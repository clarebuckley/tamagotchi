import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsScreenComponent } from './stats-screen.component';

describe('StatsScreenComponent', () => {
  let component: StatsScreenComponent;
  let fixture: ComponentFixture<StatsScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
