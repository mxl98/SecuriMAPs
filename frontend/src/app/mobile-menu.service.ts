import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MobileMenuService {

  constructor() { }

  toggleMobileSidebar() {
    console.log("menu toggled");
  }
}
