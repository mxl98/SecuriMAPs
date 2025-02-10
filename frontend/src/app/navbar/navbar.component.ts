import { Component } from '@angular/core';
import { ResetButtonComponent } from '../reset-button/reset-button.component';
import { MobileMenuButtonComponent } from '../mobile-menu-button/mobile-menu-button.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    ResetButtonComponent,
    MobileMenuButtonComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
