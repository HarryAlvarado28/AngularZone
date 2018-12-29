import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreciosComponent } from './precios.component';

describe('PreciosComponent', () => {
  let component: PreciosComponent;
  let fixture: ComponentFixture<PreciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
