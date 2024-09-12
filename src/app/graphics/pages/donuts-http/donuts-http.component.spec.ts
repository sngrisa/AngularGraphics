import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonutsHttpComponent } from './donuts-http.component';

describe('DonutsHttpComponent', () => {
  let component: DonutsHttpComponent;
  let fixture: ComponentFixture<DonutsHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DonutsHttpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonutsHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
