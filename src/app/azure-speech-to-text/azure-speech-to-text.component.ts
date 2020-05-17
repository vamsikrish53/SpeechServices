import { Component, OnInit } from '@angular/core';
import { AudioConfig, ResultReason, SpeechConfig, SpeechRecognizer } from 'microsoft-cognitiveservices-speech-sdk';
@Component({
  selector: 'app-azure-speech-to-text',
  templateUrl: './azure-speech-to-text.component.html',
  styleUrls: ['./azure-speech-to-text.component.scss']
})
export class AzureSpeechToTextComponent {

  title = 'Speech To Text';

  recognizer: SpeechRecognizer;
  textOutput;
  private lastRecognized: string = '';
  recognizing: boolean = false;
  tooltip: string = "Start speech";

  listenToSpeech(event) {
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
      const speechConfig = SpeechConfig.fromSubscription("f7fbe62e52ef44cfb6d665fe4803196f", "westus");
      speechConfig.speechRecognitionLanguage = 'en-US';
      speechConfig.enableDictation();
      this.recognizer = new SpeechRecognizer(speechConfig, audioConfig)
      this.recognizer.recognizing = this.recognizer.recognized = this.recognizerCallback.bind(this)
      this.recognizer.startContinuousRecognitionAsync();
    }
  }

  recognizerCallback(s, e) {
    console.log("Response ::    " + e.result.text);
    const reason = ResultReason[e.result.reason];
    console.log("Reason :: " + reason);
    if (reason == "RecognizingSpeech" && e.result.text) {
      this.textOutput = this.lastRecognized + e.result.text;
    }
    if (reason == "RecognizedSpeech" && e.result.text) {
      this.lastRecognized += e.result.text;
      this.textOutput = this.lastRecognized;
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

}
