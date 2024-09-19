import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HangmanService {
  private letters = new BehaviorSubject<string[]>([]);
  words$ = this.letters.asObservable();

  constructor(private httpClient: HttpClient) {}

  getWords(): Observable<string> {
    return this.httpClient.get('/Hangman_words.txt', { responseType: 'text' });
  }

  updateLetters(letter: string, word: string[]): void {
    const letters = this.letters.getValue();
    this.letters.next([...letters, letter]);
    localStorage.setItem('usedLetters', JSON.stringify(letters));
  }

  loadWords(): void {
    const loadedLetters = localStorage.getItem('usedLetters');
    !!loadedLetters ? this.letters.next(JSON.parse(loadedLetters)) : '';
  }

  newGame(): void {
    this.letters.next([]);
  }
}
