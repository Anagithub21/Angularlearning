import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceipelistComponent } from './receipelist.component';

describe('ReceipelistComponent', () => {
  let component: ReceipelistComponent;
  let fixture: ComponentFixture<ReceipelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceipelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceipelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
