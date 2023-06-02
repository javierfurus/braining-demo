import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule, Routes} from "@angular/router";
import {HomeScreenComponent} from "./home-screen.component";

const routes: Routes = [
  {
    path: '',
    component: HomeScreenComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeScreenRoutingModule { }
