import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoHijoComponent } from './proyecto-hijo.component';

describe('ProyectoHijoComponent', () => {
  let component: ProyectoHijoComponent;
  let fixture: ComponentFixture<ProyectoHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectoHijoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectoHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
