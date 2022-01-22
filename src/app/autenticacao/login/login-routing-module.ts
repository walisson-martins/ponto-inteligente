import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogarComponent, LoginComponent } from './components';

const routes: Routes = [
  {
    path: 'login',
    component: LogarComponent,
    children: [{ path: '', component: LoginComponent }],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
