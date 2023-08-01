import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CNTowerComponent } from './CNTower.component';

describe('CNTowerComponent', () => {
  let component: CNTowerComponent;
  let fixture: ComponentFixture<CNTowerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CNTowerComponent]
    });
    fixture = TestBed.createComponent(CNTowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
