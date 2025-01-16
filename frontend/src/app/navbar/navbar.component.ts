import { Component } from '@angular/core';
import { ResetButtonComponent } from '../reset-button/reset-button.component';
import { TooltipComponent } from '../tooltip/tooltip.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    ResetButtonComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
