import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabYoutubeComponent } from './tab-youtube.component';

describe('TabYoutubeComponent', () => {
  let component: TabYoutubeComponent;
  let fixture: ComponentFixture<TabYoutubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabYoutubeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabYoutubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
