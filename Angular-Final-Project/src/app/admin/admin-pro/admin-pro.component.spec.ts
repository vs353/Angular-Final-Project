import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminProComponent } from './admin-pro.component';

describe('AdminProComponent', () => {
  let component: AdminProComponent;
  let fixture: ComponentFixture<AdminProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminProComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
