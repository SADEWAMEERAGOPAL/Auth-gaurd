import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducDashboardComponent } from './produc-dashboard.component';

describe('ProducDashboardComponent', () => {
  let component: ProducDashboardComponent;
  let fixture: ComponentFixture<ProducDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProducDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProducDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
