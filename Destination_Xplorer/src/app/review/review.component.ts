import { Component } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent {
  reviewTitle: string = '';
  reviewDescription: string = '';
  uploadedPictures: string[] = [];

  onFileSelected(event: any) {
    // Handle file selection
    const selectedFiles = event.target.files;
    if (selectedFiles) {
      // Convert FileList to an array and process each selected file
      Array.from(selectedFiles).forEach((file: unknown) => {
        // Explicitly cast the file to Blob type
        const blobFile = file as Blob;

        // Convert the file to a data URL to display the image
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.uploadedPictures.push(e.target.result);
        };
        reader.readAsDataURL(blobFile);
      });
    }
  }

  submitReview() {
    // Here, you can handle the submission logic and save the review, including the pictures, to your backend or storage service.
    // You can access the reviewTitle, reviewDescription, and uploadedPictures arrays to process the data.
    // For simplicity, we won't implement the actual submission logic here.
    console.log('Review Title:', this.reviewTitle);
    console.log('Review Description:', this.reviewDescription);
    console.log('Uploaded Pictures:', this.uploadedPictures);
  }
}
