import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCardWrapperComponent } from './main-card-wrapper.component';

describe('MainCardComponent', () => {
  let component: MainCardWrapperComponent;
  let fixture: ComponentFixture<MainCardWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainCardWrapperComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MainCardWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
