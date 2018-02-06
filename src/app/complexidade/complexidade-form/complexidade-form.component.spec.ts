import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ComplexidadeFormComponent } from './complexidade-form.component';

describe('ComplexidadeFormComponent', () => {
  let component: ComplexidadeFormComponent;
  let fixture: ComponentFixture<ComplexidadeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplexidadeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexidadeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
