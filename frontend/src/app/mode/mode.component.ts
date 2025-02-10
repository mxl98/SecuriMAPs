import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModeService } from '../mode.service';

@Component({
  selector: 'app-mode',
  standalone: true,
  imports: [],
  templateUrl: './mode.component.html',
  styleUrl: './mode.component.scss'
})
export class ModeComponent {
  _modeService: ModeService;
  private MODES: Map<string, number> = new Map<string, number>([
    ['Collision', 0]
  ]);
  @Input() mode: string = '';

  constructor(modeService: ModeService) {
    this._modeService = modeService;
  }

  private findMode(): number {
    let currentMode = this.MODES.get(this.mode);
    return currentMode ? currentMode : 0;
  }
}
