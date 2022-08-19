import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatreArticleComponent } from './creatre-article.component';

describe('CreatreArticleComponent', () => {
  let component: CreatreArticleComponent;
  let fixture: ComponentFixture<CreatreArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatreArticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatreArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
