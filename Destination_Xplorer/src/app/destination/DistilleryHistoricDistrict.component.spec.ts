import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistilleryHistoricDistrictComponent } from './DistilleryHistoricDistrict.component';

describe('DistilleryHistoricDistrictComponent', () => {
  let component: DistilleryHistoricDistrictComponent;
  let fixture: ComponentFixture<DistilleryHistoricDistrictComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DistilleryHistoricDistrictComponent]
    });
    fixture = TestBed.createComponent(DistilleryHistoricDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});