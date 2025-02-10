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

  constructor(mobileMenuService: MobileMenuService) {
    this._mobileMenuService = mobileMenuService;
  }

  toggleMobileSidebar() {
    this._mobileMenuService.toggleMobileSidebar();
  }
}
