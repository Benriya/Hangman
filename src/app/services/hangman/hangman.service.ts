import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HangmanService {
  private letters = new BehaviorSubject<string[]>([]);
  words$ = this.letters.asObservable();

  constructor(private httpClient: HttpClient) {}

  getWords(): Observable<string> {
    return this.httpClient.get('/Hangman_words.txt', {responseType: 'text'});
  }

  updateLetters(letter: string): void {
    this.letters.next([...this.letters.getValue(), letter]);
  }
}
