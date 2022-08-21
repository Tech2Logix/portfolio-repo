# Portfolio

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.0.

## About

This application was created to refresh my Angular skills. It started small, and I gradually decided to add the necessary features for a functional portfolio website. 
There is most certainly technical dept, but I believe it's a solid effort to showcase my skills. 

## Example

Want to see a live running example of this project? Visit [http://portfolio.rhino-vb.be](http://portfolio.rhino-vb.be)

## Technologies / Dependencies
- Angular
- Bootstrap
- Font Awesome
- Html2canvas & jspdf (frontend pdf generation)

## Technical dept
- No test coverage
- App.component.html got out of hand, as it started as a one-pager
- No backend system, as such some content/translations are hardcoded through config files (/assets/config)
- Frontend PDF generation. Whilst a neat feature, it's heavily browser dependant as well as screen resolution being a factor. See Pdf generation.
- ... (probably bit more, which I forgot to add here)

### PDF generation
As stated above, a neat feature to generate a PDF completely client-sided. 

In it's core, html2canvas is used to generate two images (one for each page), then jspdf is used to merge them into a single PDF.
Initially, the idea was just this. But it quickly became apparent that this wouldn't suffice.

Rendering the pdf on a smaller screen, resulted in the same media queries affecting the pdf.
As such, a small hack was added to render the canvas to a frame outside of the screen, with fixed dimensions.
However, all css classes were still applied, as well as the media queries.

As such, the deprecated ::ng-deep feature was used to prevent the @media queries to be applied to the off-screen frame.
This works, to a certain extend. But it probably reduced the supported browsers by yet another margin.

As such, neat feature but I am aware this won't be a stable solution for production systems.
Let alone the performance (which already takes quite a while on a modern computer/browser).

I recommend to deprecate this feature and replace it with a genuine back-end solution.

## License
Project made by Rhino Van Boxelaere - contact@rhino-vb.be

MIT License

Copyright (c) 2022 Rhino

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
