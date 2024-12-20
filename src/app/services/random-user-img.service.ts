import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomUserImgService {

  constructor() { }

  generateUrlImg() {
    Math.random()
  }
}
