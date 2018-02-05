import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FaixaFormComponent } from './faixa-form.component';

describe('FaixaFormComponent', () => {
  let component: FaixaFormComponent;
  let fixture: ComponentFixture<FaixaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FaixaFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaixaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
