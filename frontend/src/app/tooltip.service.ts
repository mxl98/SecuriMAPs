import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TooltipService {

  constructor() { }

  /**
   * Cancels the timeout request to display the tooltip
   * @param timeoutId the timeout's ID to cancel
   * @returns null
   */
  cancelDisplay(timeoutId: any): any {
    if (timeoutId) {
      clearTimeout(timeoutId);
      return null;
    }
  }
}
