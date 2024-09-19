import { Component } from '@angular/core';
import {MatCard, MatCardContent} from "@angular/material/card";

@Component({
  selector: 'app-main-card-wrapper',
  standalone: true,
    imports: [
        MatCard,
        MatCardContent
    ],
  templateUrl: './main-card-wrapper.component.html',
  styleUrl: './main-card-wrapper.component.css'
})
export class MainCardWrapperComponent {

}
