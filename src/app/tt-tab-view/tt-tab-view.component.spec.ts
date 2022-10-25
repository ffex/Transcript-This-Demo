import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TtTabViewComponent } from './tt-tab-view.component';

describe('TtTabViewComponent', () => {
  let component: TtTabViewComponent;
  let fixture: ComponentFixture<TtTabViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TtTabViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TtTabViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
