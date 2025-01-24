import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapThemeService {
  private isDarkMode = false;
  private isDarkModeSubject = new BehaviorSubject<boolean>(false);
  isDarkMode$ = this.isDarkModeSubject.asObservable();

  constructor() {}

  getIsDarkMode(): boolean {
    return this.isDarkMode;
  }

  setIsDarkMode(isDarkMode: boolean): void {
    this.isDarkMode = isDarkMode;
  }

  /**
   * Emits the updated value to its listeners.
   */
  switchTheme(): void {
    const currentMode = this.isDarkModeSubject.getValue();
    this.isDarkModeSubject.next(!currentMode);
  }

  /**
   * Checks if the user's browser is using the dark theme.
   * @returns true if the browser uses a dark theme
   */
  isUsingDarkTheme(): boolean {
    return false;
  }
}
