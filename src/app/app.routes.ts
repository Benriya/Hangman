import { Routes } from '@angular/router';
import {MainPageComponent} from "./components/main-page/main-page.component";
import {GamePageComponent} from "./components/game-page/game-page.component";

export const routes: Routes = [
  { path: 'main-page', component: MainPageComponent },
  { path: 'game-page', component: GamePageComponent },
  { path: '', component: MainPageComponent },
  { path: '**', component: MainPageComponent },
];
