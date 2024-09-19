import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HangmanService {
  private words = new BehaviorSubject<string[]>([]);
  words$ = this.words.asObservable();

  constructor(private httpClient: HttpClient) {}
}
