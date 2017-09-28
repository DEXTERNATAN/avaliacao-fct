import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexidadeComponent } from './complexidade.component';

describe('ComplexidadeComponent', () => {
  let component: ComplexidadeComponent;
  let fixture: ComponentFixture<ComplexidadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplexidadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
