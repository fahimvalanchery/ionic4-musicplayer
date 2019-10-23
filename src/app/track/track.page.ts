import { Component, OnInit } from '@angular/core';
import { Track } from './track.interface';
import { Howl } from 'howler';
@Component({
  selector: 'app-track',
  templateUrl: './track.page.html',
  styleUrls: ['./track.page.scss']
})
export class TrackPage implements OnInit {
  playlist: Track[] = [
    {
      name: 'new Beg',
      path: './assets/mp3/bensound-anewbeginning.mp3'
    },
    {
      name: 'Create Mind',
      path: './assets/mp3/bensound-creativeminds.mp3'
    },
    {
      name: 'Summer',
      path: './assets/mp3/bensound-summer.mp3'
    }
  ];

  activeTrack: Track = null;
  player: Howl = null;
  isPlaying = false;
  constructor() {}

  start(track: Track) {
    if (this.player) {
      this.player.stop();
    }
    this.player = new Howl({
      src: [track.path],
      onplay: () => {
        this.isPlaying = true;
        this.activeTrack = track;
      },
      onend: () => {}
    });
    this.player.play();
  }

  togglePlayer(pause) {
    this.isPlaying = !pause;
    if (pause) {
      this.player.pause();
    } else {
      this.player.play();
    }
  }

  next() {}

  prev() {}

  seek() {}

  updateProgress() {}

  ngOnInit() {}
}
