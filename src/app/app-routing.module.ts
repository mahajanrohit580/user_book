import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './authgaurd/auth.guard';
import { UserregComponent } from './pages/userreg/userreg.component';
import { UsertableComponent } from './pages/usertable/usertable.component';


const routes: Routes = [
  {
    path : "",
    component : UserregComponent
  },
  {
    path : "dashbord",
    component : UsertableComponent,
    canActivate : [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
