import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCohetesComponent } from './lista-cohetes.component';

describe('ListaCohetesComponent', () => {
  let component: ListaCohetesComponent;
  let fixture: ComponentFixture<ListaCohetesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCohetesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaCohetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
