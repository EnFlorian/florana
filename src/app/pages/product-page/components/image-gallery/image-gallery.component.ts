import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss'],
})
export class ImageGalleryComponent implements OnInit {
  @Input('images') imagesProps: string[];
  selectedImage: string;

  ngOnInit(): void {
    this.selectedImage = this.imagesProps[0];
  }

  selectImage(image: string) {
    this.selectedImage = image;
  }
}
