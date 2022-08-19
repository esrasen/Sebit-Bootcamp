import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UpdateBlogComponent } from './update-blog/update-blog.component';
import { ViewBlogComponent } from './view-blog/view-blog.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'view-blog/:blogid', component: ViewBlogComponent },
  { path: 'update-blog/:blogid', component: UpdateBlogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
