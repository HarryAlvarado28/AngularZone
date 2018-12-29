import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtegidaComponent } from './protegida.component';

describe('ProtegidaComponent', () => {
  let component: ProtegidaComponent;
  let fixture: ComponentFixture<ProtegidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtegidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtegidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
