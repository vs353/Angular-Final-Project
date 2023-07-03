import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReachusComponent } from './reachus.component';

describe('ReachusComponent', () => {
  let component: ReachusComponent;
  let fixture: ComponentFixture<ReachusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReachusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReachusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
