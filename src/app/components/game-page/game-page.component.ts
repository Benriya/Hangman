import {Component, OnInit} from '@angular/core';
import {MainCardWrapperComponent} from "../../main-card-wrapper/main-card-wrapper.component";
import {WordDisplayComponent} from "../word-display/word-display.component";
import {LettersListComponent} from "../letters-list/letters-list.component";
import {ActivatedRoute} from "@angular/router";
import {HangmanService} from "../../services/hangman/hangman.service";

@Component({
  selector: 'app-game-page',
  standalone: true,
  imports: [
    MainCardWrapperComponent,
    WordDisplayComponent,
    LettersListComponent
  ],
  templateUrl: './game-page.component.html',
  styleUrl: './game-page.component.css'
})
export class GamePageComponent implements OnInit {
  wordLength = '8';
  word: string[] = []
  allWords: string[] = [];
  lettersSelected: string[] = [];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly hangmanService: HangmanService
  ) {}

  ngOnInit(): void {
    this.wordLength = this.route.snapshot.paramMap.get('wordLength') || '3';
    this.hangmanService.getWords().subscribe({
      next: words =>  {
        for (const line of words.split(/[\r\n]+/)){
          if(line.length === +this.wordLength) this.allWords.push(line);
        }
      },
      error: err => console.error('An error occurred :', err),
      complete: () => this.getAWord(),
    });
  }

  getAWord(): void {
    console.log(this.allWords);
    this.word = this.allWords[Math.floor(Math.random()*this.allWords.length)].split('');
  }

  letterSelect(letter: string): void {
    this.hangmanService.updateLetters(letter);
  }
}
