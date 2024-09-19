import {Component, EventEmitter, Output} from '@angular/core';
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
  @Output() letterSelect = new EventEmitter<string>();
  LETTERS = letters;
  lettersSelected$: Observable<string[]>;

  constructor(private readonly hangmanService: HangmanService) {
    this.lettersSelected$ = this.hangmanService.words$;
  }

  letterSelected(letter: string, exists: boolean): void {
    if(!exists) this.letterSelect.emit(letter);
  }
}
