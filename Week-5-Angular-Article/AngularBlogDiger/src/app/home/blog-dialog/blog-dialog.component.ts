import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { BlogService } from 'src/app/services/blog.service';
import { CommentService } from 'src/app/services/comment.service';


@Component({
  selector: 'app-blog-dialog',
  templateUrl: './blog-dialog.component.html',
  styleUrls: ['./blog-dialog.component.css'],
})
export class BlogDialogComponent implements OnInit {
  isUpdate: boolean = false;
  blogElement:any;
  imageUrl:string='';
  title: string='';
  content:string='';
  commentData:any;

  form= new FormGroup({
    title:new FormControl(null, [Validators.required]),
    body:new FormControl(null, [Validators.required]),
  });

  constructor(
    private blogService:BlogService,
    private commentService: CommentService,

    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<BlogDialogComponent>
  ) {
    debugger;
    //Düzenleme
    if (data.isUpdate) {
      this.isUpdate = true;
      this.form.patchValue({
        title: data.blog.title,
        body:data.blog.body,
      })
      this.blogElement = data.blog;
    }
    //Görüntüleme
    else {
      this.imageUrl = data.blog.imageId.toString();
      this.title = data.blog.title;
      this.content = data.blog.body;

    }
  }

  ngOnInit(): void {this.commentService.getComments().subscribe((res)=>{

    this.commentData =res.filter(
      (x:{postId:any})=> x.postId==this.data.blog.id);
    debugger;
  });
}


  close(){
    this.dialogRef.close();
  }

  onSubmit(){

    const request = {
      title: this.form.get('title')?.value,
      body: this.form.get('body')?.value,
      imageId: this.data.blog.imageId,
      userId: this.data.blog.userId,
    };


    this.blogService.updatePost(this.data.blog.id, request).subscribe((res)=>{
debugger;
this.blogElement.title =res.title;
this.blogElement.body =res.body;
      this.close();
    });
  }

}
