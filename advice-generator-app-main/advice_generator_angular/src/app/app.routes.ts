import { Routes } from '@angular/router';
import AdviceModalComponent from './component/advice-modal/advice-modal.component';

export const routes: Routes = [
  { path: '', redirectTo: 'advice', pathMatch: 'full' },
  { path: 'advice', loadComponent: () => AdviceModalComponent }
];
