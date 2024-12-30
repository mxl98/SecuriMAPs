import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor() { }

  /**
   * Changes the state of the sidebar based on its current state.
   */
  toggleSidebar(): void {

  }

  /**
   * Expands the sidebar by applying an animation to its container and the drawer button and arrow.
   * Changes the aria-expanded state to true.
   */
  expandSidebar(): void {

  }

  /**
   * Retracts the sidebar by applying an animation to its container and the drawer button and arrow.
   * Changes the aria-expanded state to false.
   */
  retractSidebar(): void {

  }
}
