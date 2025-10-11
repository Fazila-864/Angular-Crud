import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdForm } from './prod-form';

describe('ProdForm', () => {
  let component: ProdForm;
  let fixture: ComponentFixture<ProdForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
