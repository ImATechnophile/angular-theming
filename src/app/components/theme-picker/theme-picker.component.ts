import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.scss']
})
export class ThemePickerComponent implements OnInit {
  private headerPointer = document.querySelector('.navigation');
  private footerPointer = document.querySelector('.footer');
  private cardPointer = document.querySelector('.card-container');
 /* private themeWrapper = document.querySelector('body');*/

  onSubmit(form) {
    this.global(form.value);
  }

  global(stylesheet) {
    console.log(stylesheet);

    // Navigation Styles
    if (stylesheet.globalNavColor) {
      console.log(stylesheet.globalNavColor);
      /*console.log(this.themeWrapper);*/
      (this.headerPointer as HTMLElement).style.setProperty('--navColor', stylesheet.globalNavColor);
    }
    if (stylesheet.globalNavBackground) {
      (this.headerPointer as HTMLElement).style.setProperty('--navBackground', stylesheet.globalNavBackground);
    }

    // Card Styles
    if (stylesheet.globalCardColor) {
      (this.cardPointer as HTMLElement).style.setProperty('--cardColor', stylesheet.globalCardColor);
    }
    if (stylesheet.globalCardBackground) {
      (this.cardPointer as HTMLElement).style.setProperty('--cardBackground', stylesheet.globalCardBackground);
    }

    // Footer Styles
    if (stylesheet.globalFooterColor) {
      (this.footerPointer as HTMLElement).style.setProperty('--footerColor', stylesheet.globalFooterColor);
    }
    if (stylesheet.globalFooterBackground) {
      (this.footerPointer as HTMLElement).style.setProperty('--footerBackground', stylesheet.globalFooterBackground);
    }
    if (stylesheet.globalFooterAlignment) {
      (this.footerPointer as HTMLElement).style.setProperty('--footerAlignment', stylesheet.globalFooterAlignment);
    }

    // Button Styles
    if (stylesheet.globalButtonColor) {
      (this.cardPointer as HTMLElement).style.setProperty('--buttonColor', stylesheet.globalButtonColor);
    }
    if (stylesheet.globalButtonBackground) {
      (this.cardPointer as HTMLElement).style.setProperty('--buttonBackground', stylesheet.globalButtonBackground);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
