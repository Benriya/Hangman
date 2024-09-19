import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { MainCardWrapperComponent } from '../../main-card-wrapper/main-card-wrapper.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [MatCardModule, MainCardWrapperComponent, MatButtonModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent {
  constructor(private readonly router: Router) {}

  openStartPage(): void {
    this.router.navigate(['/start-page/']);
  }
}
