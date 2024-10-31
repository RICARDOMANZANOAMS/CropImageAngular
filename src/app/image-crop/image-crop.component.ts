import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCropperComponent } from 'ngx-image-cropper';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-image-crop',
  standalone: true,
  imports: [CommonModule,ImageCropperComponent],
  templateUrl: './image-crop.component.html',
  styleUrl: './image-crop.component.css'
})
export class ImageCropComponent {

}
