import { Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { TooltipService } from '../tooltip.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tooltip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tooltip.component.html',
  styleUrl: './tooltip.component.scss'
})
export class TooltipComponent{
  _tooltipService: TooltipService;
  @Input() msg = '';
  @Input() targetId = '';
  visibility = false;
  hidden = true;
  timeoutDelay = 500;

  private targetElement: HTMLElement | null = null;
  private listeners: (() => void)[] = [];
  private timeoutId: any;

  constructor(tooltipService: TooltipService, private renderer: Renderer2, private el: ElementRef) {
    this._tooltipService = tooltipService;
  }

  ngOnInit(): void {
    this.targetElement = document.getElementById(this.targetId);

    if (this.targetElement) {
      const mouseEnterListener = this.renderer.listen(this.targetElement, 'mouseenter', () => {
        this.hidden = false;
        this.timeoutId = setTimeout(() => {
          this.visibility = true;
        }, this.timeoutDelay);
      });

      const mouseLeaveListener = this.renderer.listen(this.targetElement, 'mouseleave', () => {
        this.hidden = true;
        this.cancelTimeout();
        this.visibility = false;
      });

      this.listeners.push(mouseEnterListener, mouseLeaveListener);
    } else {
      console.warn("Element with ID '${ this.target }' not found.")
    }
  }

  ngOnDestroy(): void {
    this.listeners.forEach((removeListener) => removeListener());
    this.cancelTimeout();
  }

  cancelTimeout(): void {
    this.timeoutId = this._tooltipService.cancelDisplay(this.timeoutId);
  }
}
