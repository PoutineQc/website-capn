import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';

import { NavigationEditorComponent } from './admin/navigation-editor/navigation-editor.component';
import { ProgramComponent } from './user/modular-page/dynamic/program/program.component';
import { ErrorComponent } from './user/error/error.component';
import { HomeComponent } from './user/home/home.component';
import { UserComponent } from './user/user.component';
import { RouteResolverService } from './route-resolver.service';
import { ModularPageComponent } from './user/modular-page/modular-page.component';
import { PageDataResolverService } from './user/modular-page/page-data-resolver.service';
import { AdminComponent } from './admin/admin.component';
import { ModularPageEditorComponent } from './admin/modular-page-editor/modular-page-editor.component';

const appRoutes: Routes = [
    { path: 'app', component: UserComponent, resolve: { routes: RouteResolverService }, children: [
        { path: '', redirectTo: '/app/accueil', pathMatch: 'full' },
        { path: 'not-found', component: ErrorComponent },
        { path: '**', component: ModularPageComponent, resolve: { pageData: PageDataResolverService } }
    ]},
    { path: 'admin', component: AdminComponent, children: [
        { path: '', redirectTo: '/admin/path-editor', pathMatch: 'full' },
        { path: 'path-editor', component: NavigationEditorComponent, resolve: { routes: RouteResolverService } },
        { path: '**', component: ModularPageEditorComponent, resolve: { pageData: PageDataResolverService } }
    ]},
    { path: '', redirectTo: '/app/accueil', pathMatch: 'full' },
    { path: '**', redirectTo: '/app/not-found' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
