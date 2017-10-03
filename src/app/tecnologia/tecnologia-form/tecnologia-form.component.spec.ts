import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnologiaFormComponent } from './tecnologia-form.component';

describe('TecnologiaFormComponent', () => {
  let component: TecnologiaFormComponent;
  let fixture: ComponentFixture<TecnologiaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TecnologiaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TecnologiaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
