import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ContainerInlistComponent } from './container-inlist/container-inlist.component'
import { ContainerInfoComponent } from './container-info/container-info.component';
import { ContainerResolver } from './container.resolver';

const routes: Routes = [
  { path: '', redirectTo: '/containers', pathMatch: 'full' },
  {
    path: 'containers', component: ContainerInlistComponent, children: [
      { path: ':id', component: ContainerInfoComponent, resolve: { container: ContainerResolver } }
    ]
  }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
