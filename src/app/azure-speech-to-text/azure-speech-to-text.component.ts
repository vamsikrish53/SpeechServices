import { Component, OnInit } from '@angular/core';
import { AudioConfig, ResultReason, SpeechConfig, SpeechRecognizer, SpeechSynthesizer, SpeechSynthesisOutputFormat } from 'microsoft-cognitiveservices-speech-sdk';
@Component({
  selector: 'app-azure-speech-to-text',
  templateUrl: './azure-speech-to-text.component.html',
  styleUrls: ['./azure-speech-to-text.component.scss']
})
export class AzureSpeechToTextComponent implements OnInit {

  recognizer: SpeechRecognizer;
  synthesizer: SpeechSynthesizer;
  speechConfig: SpeechConfig;
  soundContext: any;
  text: string;
  lastRecognized: string = '';
  recognizing: boolean = false;
  tooltip: string = "Start speech";

  ngOnInit(): void {
    this.speechConfig = SpeechConfig.fromSubscription("f7fbe62e52ef44cfb6d665fe4803196f", "westus");
    try {
      var AudioContext = window.AudioContext || false;
      if (AudioContext) {
        this.soundContext = new AudioContext();
      } else {
        alert("AudioContext not supported");
      }
    }
    catch (e) {
      console.log("no sound context found, no audio output. " + e);
    }
  }

  speechToText(event) {
    if (this.recognizing) {
      this.tooltip = "Start speech";
      this.stop();
      this.recognizing = false;
    }
    else {
      this.recognizing = true;
      this.tooltip = "Stop speech";
      console.log("recording");
      const audioConfig = AudioConfig.fromDefaultMicrophoneInput();
      this.speechConfig.speechRecognitionLanguage = 'en-US';
      this.speechConfig.enableDictation();
      this.recognizer = new SpeechRecognizer(this.speechConfig, audioConfig)
      this.recognizer.recognizing = this.recognizer.recognized = this.recognizerCallback.bind(this)
      this.recognizer.startContinuousRecognitionAsync();
    }
  }

  recognizerCallback(s, e) {
    console.log("Response ::    " + e.result.text);
    const reason = ResultReason[e.result.reason];
    console.log("Reason :: " + reason);
    if (reason == "RecognizingSpeech" && e.result.text) {
      this.text = this.lastRecognized + e.result.text;
    }
    if (reason == "RecognizedSpeech" && e.result.text) {
      this.lastRecognized += e.result.text;
      this.text = this.lastRecognized;
    }
  }

  stop() {
    this.recognizer.stopContinuousRecognitionAsync(
      stopRecognizer.bind(this),
      function (err) {
        stopRecognizer.bind(this)
        console.error(err)
      }.bind(this)
    )
    function stopRecognizer() {
      this.recognizer.close()
      this.recognizer = undefined
      console.log('stopped');
    }
  }

  textToSpeech() {
    this.speechConfig.speechSynthesisOutputFormat = SpeechSynthesisOutputFormat.Audio16Khz32KBitRateMonoMp3
    this.synthesizer = new SpeechSynthesizer(this.speechConfig, AudioConfig.fromSpeakerOutput());
    this.synthesizer.speakTextAsync(this.text, (result) => {
      this.synthesizer.close();
    }, (error) => {
      this.synthesizer.close();
      window.alert(error);
    });
  };

}
