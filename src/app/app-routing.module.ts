import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import  { MainViewComponent} from './main-view/main-view.component'
import { SideBySideCompareComponent } from './side-by-side-compare/side-by-side-compare.component'
const routes: Routes = [
  {
    component:MainViewComponent,
    path :''
  },
  {
    component:SideBySideCompareComponent,
    path :'sideBySide'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
