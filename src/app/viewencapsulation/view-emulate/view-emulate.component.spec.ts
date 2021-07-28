import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmulateComponent } from './view-emulate.component';

describe('ViewEmulateComponent', () => {
  let component: ViewEmulateComponent;
  let fixture: ComponentFixture<ViewEmulateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEmulateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEmulateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
