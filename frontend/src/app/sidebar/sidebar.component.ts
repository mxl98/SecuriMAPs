import { Component } from '@angular/core';
import { SidebarService } from '../sidebar.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgFor],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  private _sidebarService: SidebarService;
  private isExpanded: boolean = false;
  arrowMatrix: number[][];

  constructor(sidebarService: SidebarService) {
    this._sidebarService = sidebarService;
    this.arrowMatrix = this._sidebarService.arrowMatrix;
  }

  toggleSidebar(): void {
    this._sidebarService.toggleSidebar(this.isExpanded);

    let sidebar = document.getElementById('sidebar');
    this.isExpanded = sidebar?.getAttribute('aria-expanded') === 'true';
    sidebar?.setAttribute('aria-expanded', !this.isExpanded + "");

    this.arrowMatrix = this._sidebarService.flipArrow(this.isExpanded);
  }
}
