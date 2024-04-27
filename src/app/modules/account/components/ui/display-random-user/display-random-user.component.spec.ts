import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayRandomUserComponent } from './display-random-user.component';

describe('DisplayRandomUserComponent', () => {
  let component: DisplayRandomUserComponent;
  let fixture: ComponentFixture<DisplayRandomUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisplayRandomUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayRandomUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
