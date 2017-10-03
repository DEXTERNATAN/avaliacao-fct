import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactoFormComponent } from './impacto-form.component';

describe('ImpactoFormComponent', () => {
  let component: ImpactoFormComponent;
  let fixture: ComponentFixture<ImpactoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpactoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpactoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
