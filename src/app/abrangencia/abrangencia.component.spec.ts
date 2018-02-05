import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AbrangenciaComponent } from './abrangencia.component';

describe('AbrangenciaComponent', () => {
  let component: AbrangenciaComponent;
  let fixture: ComponentFixture<AbrangenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbrangenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbrangenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
