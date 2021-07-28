import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewnoneComponent } from './viewnone.component';

describe('ViewnoneComponent', () => {
  let component: ViewnoneComponent;
  let fixture: ComponentFixture<ViewnoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewnoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewnoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
