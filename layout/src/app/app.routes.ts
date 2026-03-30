import { Routes } from '@angular/router';
import { Farmador } from './pages/farmador/farmador';
import { Mogador } from './pages/mogador/mogador';
import { Home } from './pages/home/home';

export const routes: Routes = [
  {path:'farmador',component:Farmador},
    {path:'mogador',component:Mogador},
    {path:'',component:Home},
];
