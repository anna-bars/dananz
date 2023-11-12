import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-company-inform',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './company-inform.component.html',
  styleUrls: ['./company-inform.component.css']
})
export class CompanyInformComponent implements OnInit {
  @Input() cssHref: string = '';

  ngOnInit() {
    if (this.cssHref) {
      this.addCustomStyles(this.cssHref);
    }
  }

  private addCustomStyles(href: string) {
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.type = 'text/css';
    linkElement.href = href;
    document.head.appendChild(linkElement);
  }
}
