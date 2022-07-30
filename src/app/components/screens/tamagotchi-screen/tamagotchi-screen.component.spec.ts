import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TamagotchiScreenComponent } from './tamagotchi-screen.component';

describe('TamagotchiScreenComponent', () => {
  let component: TamagotchiScreenComponent;
  let fixture: ComponentFixture<TamagotchiScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TamagotchiScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TamagotchiScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
