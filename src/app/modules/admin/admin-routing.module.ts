import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MainComponent } from './components/main/main.component';
import { SecondPageComponent } from './components/second-page/second-page.component';

const routes: Routes = [
  {path:'', component: DashboardComponent, children: [
    {path: '', redirectTo:'home', pathMatch:'full'},
    {path: 'home', component: MainComponent},
    {path: 'settings', component: SecondPageComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
