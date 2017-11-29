import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';




import { AppComponent } from './app.component';
import { ContainerListComponent } from './container-list/container-list.component';
import { ContainerInfoComponent } from './container-info/container-info.component';
import { ContainerLogComponent } from './container-log/container-log.component';
import { ContainerInlistComponent } from './container-inlist/container-inlist.component';


@NgModule({
  declarations: [
    AppComponent,
    ContainerListComponent,
    ContainerInfoComponent,
    ContainerLogComponent,
    ContainerInlistComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
