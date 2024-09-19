import { Component } from '@angular/core';
import {letters} from "../../../resources/constants";
import {NgForOf} from "@angular/common";
import {MatGridListModule} from "@angular/material/grid-list";

@Component({
  selector: 'app-letters-list',
  standalone: true,
  imports: [
    NgForOf,
    MatGridListModule
  ],
  templateUrl: './letters-list.component.html',
  styleUrl: './letters-list.component.css'
})
export class LettersListComponent {
  LETTERS = letters;
}
