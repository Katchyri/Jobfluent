import {RouterModule, Routes} from '@angular/router';
import { CmpJobsComponent } from './cmp-paginas/cmp-jobs/cmp-jobs.component';
import { CmpCompaniesComponent } from './cmp-paginas/cmp-companies/cmp-companies.component';
import { CmpEmployersComponent } from './cmp-paginas/cmp-employers/cmp-employers.component';
import { CmpPostComponent } from './cmp-paginas/cmp-post/cmp-post.component';

const APP_ROUTER : Routes = [
    {path:'Jobs', component:CmpJobsComponent},
    {path:'Company', component:CmpCompaniesComponent},
    {path:'Employee', component:CmpEmployersComponent},
    {path:'Post', component:CmpPostComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTER);