import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterappComponent } from './counterapp.component';

describe('CounterappComponent', () => {
  let component: CounterappComponent;
  let fixture: ComponentFixture<CounterappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterappComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
