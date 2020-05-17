import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleSpeechToTextComponent } from './google-speech-to-text.component';

describe('GoogleSpeechToTextComponent', () => {
  let component: GoogleSpeechToTextComponent;
  let fixture: ComponentFixture<GoogleSpeechToTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleSpeechToTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleSpeechToTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
