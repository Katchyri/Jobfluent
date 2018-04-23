import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CmpBodyComponent } from './cmp-body/cmp-body.component';
import { CmpListaComponent } from './cmp-lista/cmp-lista.component';
import { CmpJobsComponent } from './cmp-paginas/cmp-jobs/cmp-jobs.component';
import { CmpCompaniesComponent } from './cmp-paginas/cmp-companies/cmp-companies.component';
import { CmpEmployersComponent } from './cmp-paginas/cmp-employers/cmp-employers.component';
import { CmpPostComponent } from './cmp-paginas/cmp-post/cmp-post.component';
import { routing } from './app.routing';
import {ItemsService} from './../items.service';


@NgModule({
  declarations: [
    AppComponent,
    CmpBodyComponent,
    CmpListaComponent,
    CmpJobsComponent,
    CmpCompaniesComponent,
    CmpEmployersComponent,
    CmpPostComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    ItemsService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
