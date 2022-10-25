import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TtYoutubeComponent } from './tt-youtube.component';

describe('TtYoutubeComponent', () => {
  let component: TtYoutubeComponent;
  let fixture: ComponentFixture<TtYoutubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TtYoutubeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TtYoutubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
