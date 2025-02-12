import { Component } from '@angular/core';
import { MobileMenuService } from '../mobile-menu.service';

@Component({
  selector: 'app-mobile-menu-button',
  standalone: true,
  imports: [],
  templateUrl: './mobile-menu-button.component.html',
  styleUrl: './mobile-menu-button.component.scss'
})
export class MobileMenuButtonComponent {
  _mobileMenuService: MobileMenuService;
  private isExpanded : boolean = true;

  constructor(mobileMenuService: MobileMenuService) {
    this._mobileMenuService = mobileMenuService;
  }

  toggleMobileSidebar() {
    let sidebar = document.getElementById('mobile-sidebar');
    let menu = document.getElementById('menu');

    this.isExpanded = sidebar?.getAttribute('aria-expanded') === 'true';

    this._mobileMenuService.toggleMobileSidebar(this.isExpanded);

    sidebar?.setAttribute('aria-expanded', !this.isExpanded + "");
    menu?.setAttribute('aria-expanded', !this.isExpanded + "");
  }
}
