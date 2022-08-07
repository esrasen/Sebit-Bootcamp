import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { MatDialog } from '@angular/material/dialog';
import { BlogDialogComponent } from './blog-dialog/blog-dialog.component';

// interface Blog {
//   title:string,
//   body:string,
//   imageId:number,
//   userId:number,
//   id:number
// }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  pageSize = 8;
  page = 13;
  blogData: Array<any> = [];
  constructor(private blogService: BlogService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getBlogList();
  }
  openDialog(element: any, viewOrUpdate: any) {
    const dialogRef = this.dialog.open(BlogDialogComponent, {
      width: '450px',
      data:{blog:element, isUpdate:viewOrUpdate},

    });


    dialogRef.afterClosed().subscribe(()=>{
this.getBlogList();
    })
  }

  getBlogList()
  {
    this.blogService.getPosts().subscribe((res) => {
      this.blogData = res;
    });

}}
