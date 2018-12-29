import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioNuevoComponent } from './usuario-nuevo.component';

describe('UsuarioNuevoComponent', () => {
  let component: UsuarioNuevoComponent;
  let fixture: ComponentFixture<UsuarioNuevoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioNuevoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
