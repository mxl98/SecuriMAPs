import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MobileMenuService {

  constructor() { }

  toggleMobileSidebar(isExpanded : boolean) {
    isExpanded ? this.animateRetract() : this.animateExpand();
  }

  animateExpand() {
    console.log("expanding");
    let menu = document.getElementById('menu');

    menu?.classList.remove('mobile-menu-expand');
    menu?.classList.add('mobile-menu-retract');
  }

  animateRetract() {
    console.log("retract");
    let menu = document.getElementById('menu');

    menu?.classList.remove('mobile-menu-retract');
    menu?.classList.add('mobile-menu-expand');
  }
}
