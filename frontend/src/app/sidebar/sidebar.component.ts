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
  private isExpanded: boolean = false;

  constructor(sidebarService: SidebarService) {
    this._sidebarService = sidebarService;
  }

  toggleSidebar(): void {
    let sidebar = document.getElementById('sidebar');
    this.isExpanded = sidebar?.getAttribute('aria-expanded') === 'true';
    this._sidebarService.toggleSidebar(this.isExpanded);
    sidebar?.setAttribute('aria-expanded', !this.isExpanded + "")
  }
}
