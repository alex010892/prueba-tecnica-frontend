import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCoheteComponent } from './detalle-cohete.component';

describe('DetalleCoheteComponent', () => {
  let component: DetalleCoheteComponent;
  let fixture: ComponentFixture<DetalleCoheteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleCoheteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleCoheteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
