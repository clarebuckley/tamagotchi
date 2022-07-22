import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TamagotchiComponent } from './tamagotchi.component';

describe('TamagotchiComponent', () => {
  let component: TamagotchiComponent;
  let fixture: ComponentFixture<TamagotchiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TamagotchiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TamagotchiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
