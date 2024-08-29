import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleSidebarComponent } from './middle-sidebar.component';

describe('MiddleSidebarComponent', () => {
  let component: MiddleSidebarComponent;
  let fixture: ComponentFixture<MiddleSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiddleSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MiddleSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
