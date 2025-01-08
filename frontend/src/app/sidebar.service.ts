import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor() { }

  /**
   * Changes the state of the sidebar based on its current state.
   */
  toggleSidebar(isExpanded: boolean): void {
    isExpanded ? this.animateRetract() : this.animateExpand();
  }

  /**
   * Applies an expanding animation to its container and the drawer button and arrow.
   * Also moves buttons to the right.
   */
  animateExpand(): void {
  }

  /**
   * Applies a retracting animation to its container and the drawer button and arrow.
   * Also moves buttons to the left.
   */
  animateRetract(): void {
  }
}
