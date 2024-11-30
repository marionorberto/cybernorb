import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDotsSettingsComponent } from './three-dots-settings.component';

describe('ThreeDotsSettingsComponent', () => {
  let component: ThreeDotsSettingsComponent;
  let fixture: ComponentFixture<ThreeDotsSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThreeDotsSettingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThreeDotsSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
