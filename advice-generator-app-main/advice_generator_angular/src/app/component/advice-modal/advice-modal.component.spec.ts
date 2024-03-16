import { ComponentFixture, TestBed } from '@angular/core/testing';

import AdviceModalComponent from './advice-modal.component';

describe('AdviceModalComponent', () => {
  let component: AdviceModalComponent;
  let fixture: ComponentFixture<AdviceModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdviceModalComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AdviceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
