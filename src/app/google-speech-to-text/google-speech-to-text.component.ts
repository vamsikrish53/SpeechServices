import { Component, OnInit, NgZone } from '@angular/core';
import Recorder from 'recorder-js';
declare var gapi: any;

@Component({
  selector: 'app-google-speech-to-text',
  templateUrl: './google-speech-to-text.component.html',
  styleUrls: ['./google-speech-to-text.component.scss']
})
export class GoogleSpeechToTextComponent implements OnInit {

  title = 'Speech To Text';

  textOutput;
  private lastRecognized: string = '';
  recognizing: boolean = false;
  tooltip: string = "Start speech";
  audio_context: AudioContext;
  recorder: Recorder;
  audio_stream;
  base64AudioFormat;
  timeOut;

  constructor(private zone: NgZone) { }

  async ngOnInit() {
    await gapi.load("client", this.loadClient);
  }

  /**
   * Load the GAPI first
   */
  loadClient() {
    console.log("Loaded client googke");
    gapi.client.setApiKey('AIzaSyBfDbvjN4PWkVc8p5qGNlI7m1qntrxDTOI');
    return gapi.client.load("https://speech.googleapis.com/$discovery/rest?version=v1", "v1")
      .then(function () { console.log("GAPI client loaded for API"); },
        function (err) { console.error("Error loading GAPI client for API", err); });
  }

  /**
   * Statrts the recording and auto stops after 10 secs
   */
  async startRecording() {
    if (this.recognizing) {
      this.stopRecording();
    }
    else {
      try {
        window.AudioContext = window.AudioContext;
        navigator.getUserMedia = navigator.getUserMedia;
        window.URL = window.URL || window.webkitURL;
        // Store the instance of AudioContext globally
        this.audio_context = new AudioContext;
        this.recorder = new Recorder(this.audio_context, { numChannels: 1 });
        console.log('Audio context is ready !');
      } catch (e) {
        alert('No web audio support in this browser!');
      }
      // Access the Microphone using the navigator.getUserMedia method to obtain a stream
      try {
        let stream = await navigator.mediaDevices.getUserMedia({ audio: true })
        this.recorder.init(stream);
        this.audio_stream = stream;
        this.recognizing = true;
      }
      catch (err) {
        console.log('Uh oh... unable to get stream...', err)
      }
      this.recorder.start()
        .then(() => console.log("Recording started"))
        .catch(err => console.log('Not able to start recording', err));
      this.timeOut = setTimeout(() => {
        this.stopRecording();
      }, 10000);
    }
  }

  /**
   * Stops the recording and calls convertToBase64
   */
  stopRecording() {
    console.log("Recording stoped");
    // Clear timeouts if any
    clearTimeout(this.timeOut);
    this.recognizing = false;
    this.audio_stream.getAudioTracks()[0].stop();
    this.recorder.stop()
      .then(({ blob, buffer }) => {
        this.convertToBase64(blob);
      });
  }

  /**
   * Converts the audio to Base64 encoded and 
   * Calls the execute method
   * @param blob 
   */
  convertToBase64(blob) {
    var reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      var base64data = (<string>reader.result).split(',')[1];
      this.base64AudioFormat = base64data;
      this.execute();
    }
  }

  /**
   * Calls the google speech to text API
   */
  async execute() {
    let response = await gapi.client.speech.speech.recognize({
      "resource": {
        "audio": {
          "content": this.base64AudioFormat
        },
        "config": {
          "enableAutomaticPunctuation": true,
          "encoding": "LINEAR16",
          "languageCode": "en-US",
          "sampleRateHertz": 44100,
          "audioChannelCount": 2
        }
      }
    });

    this.zone.run(() => {
      if (response && response.result && response.result.results && response.result.results[0] && response.result.results[0].alternatives[0].transcript)
        this.textOutput = response?.result?.results[0]?.alternatives[0]?.transcript;
      else
        alert("Sorry. Please try again");
    });
  }
}
