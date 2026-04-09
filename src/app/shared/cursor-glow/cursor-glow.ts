import { Component, HostListener, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-cursor-glow',
  imports: [],
  templateUrl: './cursor-glow.html',
  styleUrl: './cursor-glow.scss'
})
export class CursorGlow {
  protected x = 0;
  protected y = 0;

  constructor(private cdr: ChangeDetectorRef) {}

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    this.x = event.clientX;
    this.y = event.clientY;
    this.cdr.detectChanges();
  }
}
