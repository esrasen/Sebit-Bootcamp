import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleService extends BaseService{

  constructor(private base: BaseService)
  {super(base.http);
  }

public postArticle(data:any){
  return this.base.postReq('/articles',data);
}


public getArticles(){
  return this.base.getReq('/articles');
}

public updateArticle(articleData:any){
  return this.base.putReq('/articles/'+articleData.id,articleData)
}
}
