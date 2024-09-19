import {Component, EventEmitter, Input, Output} from '@angular/core';
import {letters} from "../../../../public/constants";
import {AsyncPipe, NgClass, NgForOf, NgIf} from "@angular/common";
import {MatGridListModule} from "@angular/material/grid-list";
import {Observable} from "rxjs";
import {HangmanService} from "../../services/hangman/hangman.service";

@Component({
  selector: 'app-letters-list',
  standalone: true,
  imports: [
    NgForOf,
    MatGridListModule,
    AsyncPipe,
    NgIf,
    NgClass
  ],
  templateUrl: './letters-list.component.html',
  styleUrl: './letters-list.component.css'
})
export class LettersListComponent {
  @Input() word: string[] = [];
  @Input() gameEnd = false;
  @Output() letterSelect = new EventEmitter<string>();
  @Output() tip = new EventEmitter<number>();
  LETTERS = letters;
  lettersSelected$: Observable<string[]>;

  constructor(private readonly hangmanService: HangmanService) {
    this.lettersSelected$ = this.hangmanService.words$;
  }

  letterSelected(letter: string, exists: boolean): void {
    if (this.gameEnd) return;
    const count = this.word.filter((l) => (l === letter.toLowerCase())).length;
    console.log(letter, this.word);
    if(!exists) this.letterSelect.emit(letter);
    this.tip.emit(count);
  }
}
