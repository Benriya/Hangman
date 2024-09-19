import { Component } from '@angular/core';
import {MainCardWrapperComponent} from "../../main-card-wrapper/main-card-wrapper.component";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {NgClass, NgForOf} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {Router} from "@angular/router";
import {maxLetterLengths} from "../../../../public/constants";

@Component({
  selector: 'app-start-page',
  standalone: true,
  imports: [
    MainCardWrapperComponent,
    MatGridList,
    MatGridTile,
    NgForOf,
    MatButton,
    NgClass
  ],
  templateUrl: './start-page.component.html',
  styleUrl: './start-page.component.css'
})
export class StartPageComponent {
  MAX_LETTER_LENGHTS = maxLetterLengths;
  selectedLength = 'random';

  constructor(
    private readonly router: Router,
  ) {}

  changeSelectedLength(length: string): void {
    this.selectedLength = length;
  }

  openStartPage(): void {
    this.router.navigate([
      '/game-page/',
      { wordLength: this.selectedLength },
    ]);
  }
}
