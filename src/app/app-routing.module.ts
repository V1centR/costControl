import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { SafeComponent } from './safe/safe.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'safe', component: SafeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
