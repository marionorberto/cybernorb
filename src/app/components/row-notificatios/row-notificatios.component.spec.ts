import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowNotificatiosComponent } from './row-notificatios.component';

describe('RowNotificatiosComponent', () => {
  let component: RowNotificatiosComponent;
  let fixture: ComponentFixture<RowNotificatiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RowNotificatiosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RowNotificatiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
