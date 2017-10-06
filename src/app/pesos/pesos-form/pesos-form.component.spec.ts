import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesosFormComponent } from './pesos-form.component';

describe('PesosFormComponent', () => {
  let component: PesosFormComponent;
  let fixture: ComponentFixture<PesosFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesosFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
