import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdEdit } from './prod-edit';

describe('ProdEdit', () => {
  let component: ProdEdit;
  let fixture: ComponentFixture<ProdEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
