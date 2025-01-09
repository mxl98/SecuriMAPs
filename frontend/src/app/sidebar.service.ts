import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  arrowMatrix = [
    [17, 25, 7, 37],
    [17, 47, 7, 35]
  ];

  constructor() { }

  /**
   * Changes the state of the sidebar depending on its current state.
   * @param isExpanded Tells if the sidebar is currently expanded.
   */
  toggleSidebar(isExpanded: boolean): void {
    isExpanded ? this.animateRetract() : this.animateExpand();
  }

  /**
   * Applies an expanding animation to its container and the drawer button.
   * Also moves buttons to the right.
   */
  animateExpand(): void {
    let sidebar = document.getElementById('sidebar');
    let drawer = document.getElementById('sidebar-drawer');
    
    sidebar?.classList.remove('sidebar-expand_animation');
    sidebar?.classList.add('sidebar-retract_animation');

    drawer?.classList.remove('drawer-expand_animation')
    drawer?.classList.add('drawer-retract_animation');
  }

  /**
   * Applies a retracting animation to its container and the drawer button.
   * Also moves buttons to the left.
   */
  animateRetract(): void {
    let sidebar = document.getElementById('sidebar');
    let drawer = document.getElementById('sidebar-drawer');

    sidebar?.classList.remove('sidebar-retract_animation');
    sidebar?.classList.add('sidebar-expand_animation');

    drawer?.classList.remove('drawer-retract_animation');
    drawer?.classList.add('drawer-expand_animation')
  }

  /**
   * Flips the draw button arrow by applying a reflection transformation on the arrow matrix.
   * This swaps x1/x2 coordinates to point in the opposite direction.
   * The flipped arrow matrix should look like this:
   * [
   *   [7, 25, 15, 37],
   *   [7, 47, 17, 35]
   * ]
   * @param isExpanded Tells if the sidebar is currently expanded, then the arrow is pointing left.
   */
  flipArrow(): number[][] {
    this.arrowMatrix = this.arrowMatrix.map(([x1, y1, x2, y2]) => {
      return [
        x2,
        y1,
        x1,
        y2
      ];
    });
    return this.arrowMatrix;
  }
}
