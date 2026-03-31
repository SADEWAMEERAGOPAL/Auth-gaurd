import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetconfiComponent } from './getconfi.component';

describe('GetconfiComponent', () => {
  let component: GetconfiComponent;
  let fixture: ComponentFixture<GetconfiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetconfiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetconfiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
