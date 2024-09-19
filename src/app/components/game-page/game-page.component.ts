import { Component, OnInit } from '@angular/core';
import { MainCardWrapperComponent } from '../../main-card-wrapper/main-card-wrapper.component';
import { WordDisplayComponent } from '../word-display/word-display.component';
import { LettersListComponent } from '../letters-list/letters-list.component';
import {ActivatedRoute, NavigationStart, Router} from '@angular/router';
import { HangmanService } from '../../services/hangman/hangman.service';
import { EndComponent } from '../end/end.component';
import { NgClass, NgIf } from '@angular/common';
import { MatButton } from '@angular/material/button';
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";

@UntilDestroy()
@Component({
  selector: 'app-game-page',
  standalone: true,
  imports: [
    MainCardWrapperComponent,
    WordDisplayComponent,
    LettersListComponent,
    EndComponent,
    NgIf,
    MatButton,
    NgClass,
  ],
  templateUrl: './game-page.component.html',
  styleUrl: './game-page.component.css',
})
export class GamePageComponent implements OnInit {
  wordLength = '8';
  word: string[] = [];
  allWords: string[] = [];
  gameEnd = false;
  won = false;
  badTips = 0;
  goodTips = 0;

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly hangmanService: HangmanService,
  ) {}

  ngOnInit(): void {

    //should load the saved letters when reloading

    /*this.router.events.pipe(untilDestroyed(this)).subscribe((event) => {
      if (event instanceof NavigationStart) {
        !this.router.navigated ? this.hangmanService.loadWords() : '';
      }
    });*/

    this.wordLength = this.route.snapshot.paramMap.get('wordLength') || '3';
    this.hangmanService.getWords().pipe(untilDestroyed(this)).subscribe({
      next: (words) => {
        for (const line of words.split(/[\r\n]+/)) {
          if (line.length === +this.wordLength) this.allWords.push(line);
          if (this.wordLength === 'random') this.allWords.push(line);
        }
      },
      error: (err) => console.error('An error occurred :', err),
      complete: () => this.getAWord(),
    });
  }

  getAWord(): void {
    console.log(this.allWords);
    this.word =
      this.allWords[Math.floor(Math.random() * this.allWords.length)].split('');
  }

  tipHandler(count: number): void {
    count > 0 ? (this.goodTips += count) : this.badTips++;
    if (this.goodTips === this.word.length) {
      this.gameEnd = true;
      this.won = true;
    }
    if (this.badTips > 9) {
      this.gameEnd = true;
      this.won = false;
    }

    console.log(this.badTips);
  }

  letterSelect(letter: string): void {
    this.hangmanService.updateLetters(letter, this.word);
  }

  endGame(): void {
    this.hangmanService.newGame();
    this.router.navigate(['/main-page/']);
  }

  newGame(): void {
    this.hangmanService.newGame();
    this.won = false;
    this.goodTips = 0;
    this.badTips = 0;
    this.gameEnd = false;
    this.router.navigate(['/start-page/']);
  }
}
