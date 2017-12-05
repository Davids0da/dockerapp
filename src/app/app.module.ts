import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ContainerInfoComponent } from './container-info/container-info.component';
import { ContainerInlistComponent } from './container-inlist/container-inlist.component';
import { DockerService } from './docker.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ContainerResolver } from './container.resolver';

@NgModule({
  declarations: [
    AppComponent,
    ContainerInfoComponent,
    ContainerInlistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [DockerService, ContainerResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
