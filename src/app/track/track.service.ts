import { Injectable } from '@angular/core';
import { Track } from './track.interface';

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  private playlist: Track[] = [
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
  constructor() {}

  getAllPlaylist() {
    return this.playlist;
  }
}
