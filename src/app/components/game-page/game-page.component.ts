import { Component } from '@angular/core';
import {MainCardWrapperComponent} from "../../main-card-wrapper/main-card-wrapper.component";
import {WordDisplayComponent} from "../word-display/word-display.component";
import {LettersListComponent} from "../letters-list/letters-list.component";

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
export class GamePageComponent {

}
