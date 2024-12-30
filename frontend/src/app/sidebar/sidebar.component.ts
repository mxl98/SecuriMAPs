import { Component } from '@angular/core';
import { SidebarService } from '../sidebar.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  private _sidebarService: SidebarService;

  constructor(sidebarService: SidebarService) {
    this._sidebarService = sidebarService;
  }
}
