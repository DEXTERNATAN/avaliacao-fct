import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DivisaoComponent } from './divisao.component';

describe('DivisaoComponent', () => {
  let component: DivisaoComponent;
  let fixture: ComponentFixture<DivisaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivisaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivisaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
