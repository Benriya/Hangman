import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-end',
  standalone: true,
  imports: [NgClass],
  templateUrl: './end.component.html',
  styleUrl: './end.component.css',
})
export class EndComponent {
  @Input() endText = false;
}
