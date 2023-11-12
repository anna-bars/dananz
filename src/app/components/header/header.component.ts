import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  showSpan: boolean = true;
  menuVariable: Boolean = false;
  nav!: HTMLElement;
  firstSpan!: HTMLSpanElement;
  thirdSpan!: HTMLSpanElement;
  menuIcon!: HTMLDivElement

  showMenu( nav: HTMLElement, firstSpan: HTMLSpanElement, thirdSpan: HTMLSpanElement, menuIcon: HTMLDivElement){
    this.menuVariable =! this.menuVariable;
    this.showSpan =! this.showSpan;
    this.nav = nav;
    this.firstSpan = firstSpan;
    this.thirdSpan = thirdSpan;
    this.menuIcon = menuIcon;
    if(this.menuVariable){
      nav.classList.add('menuClass')
      firstSpan.classList.add('spanRotate1');
      thirdSpan.classList.add('spanRotate2');
      menuIcon.classList.add('iconPadding');
    } else {
      this.close(nav, firstSpan, thirdSpan, menuIcon)
    }
  }
  close(nav: HTMLElement, firstSpan: HTMLSpanElement, thirdSpan: HTMLSpanElement, menuIcon: HTMLDivElement){
    nav.classList.remove('menuClass');
      firstSpan.classList.remove('spanRotate1');
      thirdSpan.classList.remove('spanRotate2');
      menuIcon.classList.remove('iconPadding');
      nav.classList.add('menu-class')
  }
  closeMenu(){
    this.menuVariable =! this.menuVariable;
    this.showSpan =! this.showSpan;
    this.close(this.nav, this.firstSpan, this.thirdSpan, this.menuIcon)
  }
}
