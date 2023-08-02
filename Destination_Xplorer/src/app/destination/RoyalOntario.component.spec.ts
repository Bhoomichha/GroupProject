import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoyalOntarioComponent } from './RoyalOntario.component';

describe('RoyalOntarioComponent', () => {
  let component: RoyalOntarioComponent;
  let fixture: ComponentFixture<RoyalOntarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoyalOntarioComponent]
    });
    fixture = TestBed.createComponent(RoyalOntarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});