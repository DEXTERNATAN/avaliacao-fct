import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AbrangenciaFormComponent } from './abrangencia-form.component';

describe('AbrangenciaFormComponent', () => {
  let component: AbrangenciaFormComponent;
  let fixture: ComponentFixture<AbrangenciaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbrangenciaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbrangenciaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
