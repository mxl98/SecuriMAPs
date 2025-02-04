import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollisionModeService } from '../collision-mode.service';

@Component({
  selector: 'app-mode',
  standalone: true,
  imports: [],
  templateUrl: './mode.component.html',
  styleUrl: './mode.component.scss'
})
export class ModeComponent {
  private _collisionModeService: CollisionModeService;
  private MODES: Map<string, number> = new Map<string, number>([
    ['Collision', 0]
  ]);
  @Input() mode: string = '';

  constructor(collisionModeService : CollisionModeService) {
    this._collisionModeService = collisionModeService;
  }

  private findMode(): number {
    let currentMode = this.MODES.get(this.mode);
    if (currentMode != undefined) return currentMode;
    return 0;
  }
}
