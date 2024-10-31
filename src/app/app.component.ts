import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageCropComponent } from './image-crop/image-crop.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ImageCropComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cropImageProject';
}
