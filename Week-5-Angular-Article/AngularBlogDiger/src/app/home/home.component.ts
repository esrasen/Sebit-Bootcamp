import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { MatDialog } from '@angular/material/dialog';

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

  getBlogList() {
    this.blogService.getPosts().subscribe((res) => {
      this.blogData = res;
    });
  }
}
