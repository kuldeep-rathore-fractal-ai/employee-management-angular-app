import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    standalone: true,
    templateUrl: './footer.component.html',
    styles: `
  .footer {
    background-color: #333;
    color: white;
    padding: 20px 10px;
    margin-top: 60px;
    text-align: center;
    border-top: 1px solid #555;
    color: #999;
}
  `
    ,
})
export class FooterComponent { }
