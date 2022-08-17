/**
 * Note:
 * Client side rendering is a small pain in the butt.
 * As we all know, clients vary, and such it's impossible to guarantee functionality on every device.
 * On top of that, every device can vary in screen size and performance.
 * Which, coincidentally, has a big impact on client side PDF rendering the way it was implemented.
 *
 * The implemented way of rendering PDFs is as follows:
 * - a screenshot of the current HTML page is taken
 * - the screenshot is rendered as a PDF
 *
 * Challenges so far:
 * - Multi page support
 * - Rendering on smaller screens
 * - Render performance
 * - Conflicting @media screen queries for the off-page render
 * - ...
 */

import {Component, NgZone} from '@angular/core';
import {faCar, faDownload, faEnvelope, faHome, faUser} from '@fortawesome/free-solid-svg-icons';
import {TranslateService} from '@ngx-translate/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const JS_DOC_HEIGHT = 842;
const JS_DOC_WIDTH = 595;

@Component({
  selector: 'app-titlebar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['./titlebar.component.scss']
})
export class TitlebarComponent {
  faUser = faUser;
  faEnvelope = faEnvelope;
  faHome = faHome;
  faCar = faCar;
  faDownload = faDownload;

  pdfRendering = false;
  showToast = false;
  toastShownAlready = false;

  pdfFileName = () => {
    return `${this.translateService.instant('components.titlebar.name')}_resume_${new Date().toLocaleString()}.pdf`;
  };

  constructor(private translateService: TranslateService,
              private zone: NgZone) {
  }

  selectLang(lang: 'en' | 'nl'): void {
    this.translateService.use(lang);
  }

  onPdfDownload() {
    this.pdfRendering = true;
    this.displayToast();

    const frame = this.renderHtmlToframeForMockedScreenSize();

    this.parsePdf(frame);
  }

  private displayToast(): void {
    if (!this.toastShownAlready) {
      this.showToast = true;
      this.toastShownAlready = true;
    }
  }


  /**
   * Silly little hack to render the HTML to an frame to get the canvas elements in the same size regardless of screen size.
   * Since the PDF generated works with taking a screenshot of html; rendering the PDF on mobile (or other smaller screens) showed inconsistencies.
   *
   * @Returns frame element containing the HTML page with a width of 1280px
   */
  private renderHtmlToframeForMockedScreenSize(): HTMLElement {
    // create the frame
    // there is css to push it off-screen (ie. left: -1024px;)
    let frame: HTMLElement = document.createElement('invisible-frame');
    frame.style.width = '1200px';
    frame.style.height = '4000px';
    frame.style.left = '-1200px';
    frame.style.position = 'absolute';
    frame.id = 'invisible-frame';

    // add html to frame
    frame.innerHTML = `${document.getElementById('page-container')?.outerHTML}`;

    document.body.appendChild(frame);

    return frame;
  }

  private parsePdf(frame: HTMLElement): void {
    const options = {
      background: 'white',
      scale: 3
    };
    console.log('frame1', frame.querySelector('#page-1'));
    console.log('frame2', frame.querySelector('#page-2'));

    Promise.all([
      html2canvas(
        <HTMLElement> frame.querySelector('#page-1'),
        options
      ),
      html2canvas(
        <HTMLElement> frame.querySelector('#page-2'),
        options
      )
    ])
      .then((canvases) => {
        console.log('done with rendering canvases', canvases);
        const pdf = this.printCanvasesToPdf(canvases);
        this.downloadPdf(pdf);
        this.pdfRendering = false;
      });

    frame.remove();
  }

  /**
   * Prints the canvases to a PDF and downloads pdf
   * @param canvases
   */
  private printCanvasesToPdf(canvases: HTMLCanvasElement[]): jsPDF {
    const doc = new jsPDF('portrait', 'px', [JS_DOC_WIDTH, JS_DOC_HEIGHT], false);

    let first = true;
    for (const canvas of canvases) {
      this.addImageToJsPdf(doc, canvas, first);
      first = false;
    }

    return doc;
  }

  private addImageToJsPdf(doc: jsPDF, canvas: HTMLCanvasElement, first: boolean): void {
    if (!first) {
      doc.addPage();
    }

    const img = canvas.toDataURL('image/PNG');
    const imgProps = (<any> doc).getImageProperties(img);

    const ratio = imgProps.height / imgProps.width;

    const imageHeight = (doc.internal.pageSize.getWidth()) * ratio;

    // Add image Canvas to PDF
    doc.addImage(img, 'PNG', 0, 0, doc.internal.pageSize.getWidth(), imageHeight, undefined, 'FAST');
  }

  private downloadPdf(pdf: jsPDF): void {
    pdf.save(this.pdfFileName());
  }
}
