import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreatreArticleComponent } from './creatre-article/creatre-article.component';
import { ViewArticleComponent } from './view-article/view-article.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'home'},
  {path:'home',component:HomeComponent},
  {path:'create',component:CreatreArticleComponent },
  {path:'view/:articleIndex',component:ViewArticleComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
