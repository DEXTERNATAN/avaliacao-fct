import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PapelFormComponent } from './papel-form.component';

describe('PapelFormComponent', () => {
  let component: PapelFormComponent;
  let fixture: ComponentFixture<PapelFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PapelFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PapelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
