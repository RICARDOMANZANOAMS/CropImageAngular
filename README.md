This program is created to crop an image in angular

Create new project in angular

In the console:

ng new cropImageProject
Choose CSS
Do you want to enable server-side rendering and static site generation? For the moment N.

To create a component inside the app 
ng generate component imageCrop

npm install ngx-image-cropper --save

Note:

I had a lot of problems with this app. I solved the problem including 

constructor(
    private sanitizer: DomSanitizer
  ) {
  }

And
   onImageCropped(event: ImageCroppedEvent) {
    this.croppedImage = this.sanitizer.bypassSecurityTrustUrl(event.objectUrl || event.base64 || '');
    
    console.log(event);
    console.log(this.croppedImage)
    
  }

  This security feature is useful to avoid injection attacks among others. Without this feature, the event was not detected as base64

# CropImageProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.10.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
