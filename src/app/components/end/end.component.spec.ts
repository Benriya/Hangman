import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndComponent } from './end.component';

describe('WinnerComponent', () => {
  let component: EndComponent;
  let fixture: ComponentFixture<EndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EndComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
