import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/index';
import { HomeComponent } from './home/index';
import { NivelComponent, CursosComponent, PruebasComponent } from './componentes/admin/index';
import { MaterialComponent, PruebaComponent, PerfilComponent } from './componentes/estudiante/index';
import { AuthGuard } from './_guard/index';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    // paginas seguras admin
    { path: 'niveles', component: NivelComponent, canActivate: [AuthGuard] },
    { path: 'cursos', component: CursosComponent, canActivate: [AuthGuard] },
    { path: 'pruebas', component: PruebasComponent, canActivate: [AuthGuard] },
    // paginas seguras estudiante
    { path: 'libros', component: MaterialComponent, canActivate: [AuthGuard] },
    { path: 'prueba', component: PruebaComponent, canActivate: [AuthGuard] },
    { path: 'perfil', component: PerfilComponent, canActivate: [AuthGuard] },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);