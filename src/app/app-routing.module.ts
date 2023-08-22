import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersondataComponent } from './persondata/persondata.component';

const routes: Routes = [
  {path:'', redirectTo:'persondata', pathMatch:'full'},
  {path: 'persondata', component: PersondataComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
