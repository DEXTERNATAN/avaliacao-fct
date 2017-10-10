import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistribuicaoFormComponent } from './distribuicao-form.component';

describe('DistribuicaoFormComponent', () => {
  let component: DistribuicaoFormComponent;
  let fixture: ComponentFixture<DistribuicaoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistribuicaoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistribuicaoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
