import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RipleysAquariumComponent } from './RipleysAquarium.component';

describe('RipleysAquariumComponent', () => {
  let component: RipleysAquariumComponent;
  let fixture: ComponentFixture<RipleysAquariumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RipleysAquariumComponent]
    });
    fixture = TestBed.createComponent(RipleysAquariumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});