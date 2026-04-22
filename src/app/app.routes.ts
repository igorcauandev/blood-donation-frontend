import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { DashboardPage } from './pages/dashboard-page/dashboard-page';
import { StockPage } from './pages/stock-page/stock-page';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardPage },
  { path: 'stock', component: StockPage },
  // { path: 'doadores', component: DoadoresComponent },
];