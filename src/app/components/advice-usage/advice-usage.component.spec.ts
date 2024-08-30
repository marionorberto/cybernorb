import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdviceUsageComponent } from './advice-usage.component';

describe('AdviceUsageComponent', () => {
  let component: AdviceUsageComponent;
  let fixture: ComponentFixture<AdviceUsageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdviceUsageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdviceUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
