import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../services/blog.service';
import { CommentService } from '../services/comment.service';

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.css'],
})
export class ViewBlogComponent implements OnInit {
  commentData: any;
  blogId: any;
  blogObj: any = {};
  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private commentService: CommentService
  ) {}

  ngOnInit(): void {
    this.blogId = this.route.snapshot.paramMap.get('blogid');
    this.blogService.getPost(this.blogId).subscribe((res) => {
      debugger;
      this.blogObj = res;
    });

    this.commentService.getComments().subscribe((res) => {
      this.commentData = res.filter(
        (x: { postId: any }) => x.postId == this.blogId
      );
      debugger;
    });
  }
}
