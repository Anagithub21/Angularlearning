import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepieitemComponent } from './recepieitem.component';

describe('RecepieitemComponent', () => {
  let component: RecepieitemComponent;
  let fixture: ComponentFixture<RecepieitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecepieitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecepieitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
