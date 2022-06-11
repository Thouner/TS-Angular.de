import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

slideTitle = [
  'Next Level',
  'Best Level',
  'Last Level'
];
slideImages = [
  'image-slide (1).jpg',
  'image-slide (2).jpg',
  'image-slide (3).jpg'
];
  currendImage = 0;
  showImage = true;

ngOnInit() {
  this.UpdateImage();
}


UpdateImage() {

setInterval(() => {
  this.currendImage++;
  this.currendImage = this.currendImage % this.slideImages.length;
  this.showImage = false;
  setTimeout(()=> {
    this.showImage = true;
  });
}, 5000);

}


}
