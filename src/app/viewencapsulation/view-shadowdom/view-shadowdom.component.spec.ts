import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewShadowdomComponent } from './view-shadowdom.component';

describe('ViewShadowdomComponent', () => {
  let component: ViewShadowdomComponent;
  let fixture: ComponentFixture<ViewShadowdomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewShadowdomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewShadowdomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
