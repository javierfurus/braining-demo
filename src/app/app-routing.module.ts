import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginScreenComponent} from './screens/login-screen/login-screen.component';
import {of} from "rxjs";
import {HomeScreenModule} from "./screens/home-screen/home-screen.module";
import {AboutScreenModule} from "./screens/about-screen/about-screen.module";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => of(HomeScreenModule)
  },
  {
    path: 'about',
    loadChildren:() => of(AboutScreenModule),
  },
  {
    path: 'login',
    component: LoginScreenComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
