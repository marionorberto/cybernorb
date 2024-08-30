import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMostReadComponent } from './card-most-read.component';

describe('CardMostReadComponent', () => {
  let component: CardMostReadComponent;
  let fixture: ComponentFixture<CardMostReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardMostReadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardMostReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
