import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../services/article.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-article',
  templateUrl: './view-article.component.html',
  styleUrls: ['./view-article.component.css'],
})
export class ViewArticleComponent implements OnInit {
  articleId: any;
  articlesData: Array<any> = [];
  username: string = '';
  comment: string = '';

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.articleId = this.route.snapshot.paramMap.get('articleIndex');
    this.articleService.getArticles().subscribe((res) => {
      this.articlesData = res;
    });
  }
  addComment() {
    if (this.username == '' || this.comment == '') {
      this._snackBar.open('Lütfen tüm alanları doldurunuz', 'Kapat');
    } else {
      let obj = {
        username: this.username,
        commnet: this.comment,
      };
      this.articlesData[this.articleId].comments.push(obj);
      this.articleService
        .updateArticle(this.articlesData[this.articleId])
        .subscribe((res) => {
          //inputları sıfırlamak için
          this.username = '';
          this.comment = '';


        });
    }
  }
}
