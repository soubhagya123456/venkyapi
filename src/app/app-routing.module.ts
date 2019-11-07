import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssignmentComponent } from './assignment/assignment.component';
import { FiledataComponent } from './filedata/filedata.component';
const routes: Routes = [
  {path:'asign',component: AssignmentComponent},
  {path:'file',component: FiledataComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
