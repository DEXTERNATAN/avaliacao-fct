import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesosComponent } from './pesos.component';

describe('PesosComponent', () => {
  let component: PesosComponent;
  let fixture: ComponentFixture<PesosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
