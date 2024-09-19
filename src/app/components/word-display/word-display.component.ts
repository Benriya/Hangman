import {Component, Input} from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-word-display',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './word-display.component.html',
  styleUrl: './word-display.component.css'
})
export class WordDisplayComponent {
  @Input() word: string[] = [];
  @Input() letters = '0';

}
