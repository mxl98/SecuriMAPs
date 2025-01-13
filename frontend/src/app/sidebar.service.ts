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
   * Applies an expanding animation to the menu.
   * Also moves buttons to the right.
   */
  animateExpand(): void {
    let menu = document.getElementById('menu');

    menu?.classList.remove('menu-expand');
    menu?.classList.add('menu-retract');
  }

  /**
   * Applies a retracting animation to the menu.
   * Also moves buttons to the left.
   */
  animateRetract(): void {
    let menu = document.getElementById('menu');

    menu?.classList.remove('menu-retract');
    menu?.classList.add('menu-expand');
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
