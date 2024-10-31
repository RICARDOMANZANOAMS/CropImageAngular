import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCropperComponent, ImageCroppedEvent } from 'ngx-image-cropper';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-image-crop',
  standalone: true,
  imports: [CommonModule,ImageCropperComponent],
  templateUrl: './image-crop.component.html',
  styleUrl: './image-crop.component.css'
})
export class ImageCropComponent {selectedImage: string | ArrayBuffer | null = null; // To store the original image as a Base64 string

  croppedImage: SafeUrl  = '';
  imageChangedEvent: any = null; // Store the image change event
  constructor(
    private sanitizer: DomSanitizer
  ) {
  }
  // Handle image selection event
  onImageSelected(event: any) {
    const file = event.target.files[0]; // Get the selected file from the input
  
    if (file) {
      this.imageChangedEvent = event; // Store the event for the image cropper
      console.log('Image file selected:', file);
  
      // Optional: Display the selected image as Base64 (if needed)
      const reader = new FileReader(); // Initialize FileReader to read the file
      reader.onload = () => {
        this.selectedImage = reader.result; // Store the image as Base64 to display
        console.log('Image loaded (Base64):', this.selectedImage); // Log the Base64 string
      };
      reader.readAsDataURL(file); // Read the file as Data URL (Base64)
    }
    }  

    // Handle image cropped event
  onImageCropped(event: ImageCroppedEvent) {
    this.croppedImage = this.sanitizer.bypassSecurityTrustUrl(event.objectUrl || event.base64 || '');
    
    console.log(event);
    console.log(this.croppedImage)
    
  }

  // Reset the uploaded image and cropper
  resetImage() {
    this.selectedImage = null; // Reset the selected image
    
    this.imageChangedEvent = null; // Reset the image change event
  }

  // Display the cropped image
  displayCroppedImage() {
    console.log("Executing displayCroppedImage"); // Confirm method execution
    if (this.croppedImage) {
      console.log("Cropped image is available:", this.croppedImage); // Log the cropped image
      alert('Cropped image is ready to view below!'); // Show alert indicating cropped image is ready
    } else {
      console.log("Cropped image is not set"); // Log when cropped image is not available
    }
  }
  
  
  
  
  }
