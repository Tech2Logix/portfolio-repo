import {Component} from '@angular/core';
import {faCar, faDownload, faEnvelope, faHome, faUser} from '@fortawesome/free-solid-svg-icons';
import {TranslateService} from '@ngx-translate/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

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

  constructor(private translateService: TranslateService) {
  }

  selectLang(lang: 'en' | 'nl'): void {
    this.translateService.use(lang);
  }


  onPdfDownload() {
    this.pdfRendering = true;
    this.displayToast();

    const promises = this.renderHtml();

    const doc = new jsPDF('portrait', 'px', [595, 842], false);

    Promise.all(promises)
      .then((canvases) => {
        let first = true;
        for (const canvas of canvases) {
          this.addImageToJsPdf(doc, canvas, first);
          first = false;
        }
      })
      .then(() => {
        this.downloadPdf(doc);
        this.pdfRendering = false;
      });
  }

  private displayToast(): void {
    if (!this.toastShownAlready) {
      this.showToast = true;
      this.toastShownAlready = true;
    }
  }

  private renderHtml(): Promise<HTMLCanvasElement>[] {
    const options = {
      background: 'white',
      scale: 3
    };

    return [
      html2canvas(
        <HTMLElement> document.getElementById('page-1'),
        options
      ),
      html2canvas(
        <HTMLElement> document.getElementById('page-2'),
        options
      )];
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

  private downloadPdf(doc: jsPDF): void {
    const fileName = `${this.translateService.instant('components.titlebar.name')}_resume_${new Date().toLocaleString()}.pdf`;
    doc.save(fileName);
  }
}
