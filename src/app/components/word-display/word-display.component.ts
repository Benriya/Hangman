import { Component, Input } from '@angular/core';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { HangmanService } from '../../services/hangman/hangman.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-word-display',
  standalone: true,
  imports: [NgForOf, NgIf, AsyncPipe],
  templateUrl: './word-display.component.html',
  styleUrl: './word-display.component.css',
})
export class WordDisplayComponent {
  @Input() word: string[] = [];
  @Input() letters = '3';
  lettersSelected$: Observable<string[]>;

  constructor(private readonly hangmanService: HangmanService) {
    this.lettersSelected$ = this.hangmanService.words$;
  }
}
