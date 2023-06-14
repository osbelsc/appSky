import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActCompComponent } from './act-comp.component';

describe('ActCompComponent', () => {
  let component: ActCompComponent;
  let fixture: ComponentFixture<ActCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
