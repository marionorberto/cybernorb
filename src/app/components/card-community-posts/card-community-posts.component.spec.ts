import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCommunityPostsComponent } from './card-community-posts.component';

describe('CardCommunityPostsComponent', () => {
  let component: CardCommunityPostsComponent;
  let fixture: ComponentFixture<CardCommunityPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCommunityPostsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardCommunityPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
