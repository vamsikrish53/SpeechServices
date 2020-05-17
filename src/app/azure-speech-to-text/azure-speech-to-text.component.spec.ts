import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AzureSpeechToTextComponent } from './azure-speech-to-text.component';

describe('AzureSpeechToTextComponent', () => {
  let component: AzureSpeechToTextComponent;
  let fixture: ComponentFixture<AzureSpeechToTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AzureSpeechToTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AzureSpeechToTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
