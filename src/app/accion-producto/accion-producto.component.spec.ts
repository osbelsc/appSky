import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccionProductoComponent } from './accion-producto.component';

describe('AccionProductoComponent', () => {
  let component: AccionProductoComponent;
  let fixture: ComponentFixture<AccionProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccionProductoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccionProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
