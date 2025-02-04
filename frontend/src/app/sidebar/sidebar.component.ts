import { Component } from '@angular/core';
import { SidebarService } from '../sidebar.service';
import { NgFor } from '@angular/common';
import { TooltipComponent } from '../tooltip/tooltip.component';
import { ThemeButtonComponent } from '../theme-button/theme-button.component';
import { ModeComponent } from '../mode/mode.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    NgFor,
    TooltipComponent,
    ThemeButtonComponent,
    ModeComponent
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  private _sidebarService: SidebarService;
  private isExpanded: boolean = false;
  arrowMatrix: number[][];
  tooltipMsgs = {
    drawer: 'Toggle the sidebar'
  };

  constructor(sidebarService: SidebarService) {
    this._sidebarService = sidebarService;
    this.arrowMatrix = this._sidebarService.arrowMatrix;
  }

  toggleSidebar(): void {
    this._sidebarService.toggleSidebar(this.isExpanded);

    let sidebar = document.getElementById('sidebar');
    let menu = document.getElementById('menu');
    this.isExpanded = sidebar?.getAttribute('aria-expanded') === 'true';
    sidebar?.setAttribute('aria-expanded', !this.isExpanded + "");
    menu?.setAttribute('aria-expanded', !this.isExpanded + "");

    this.arrowMatrix = this._sidebarService.flipArrow();
  }
}
