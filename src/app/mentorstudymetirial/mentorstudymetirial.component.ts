import { Component } from '@angular/core';

@Component({
  selector: 'app-mentorstudymetirial',
  templateUrl: './mentorstudymetirial.component.html',
  styleUrls: ['./mentorstudymetirial.component.css']
})
export class MentorstudymetirialComponent {
  selectedPdfFile: File | null = null;
  selectedImageFile: File | null = null;

  onPdfFileChange(event: any): void {
    this.selectedPdfFile = event.target.files[0];
  }

  onImageFileChange(event: any): void {
    this.selectedImageFile = event.target.files[0];
  }
 
  uploadFiles(): void {
    if (this.selectedPdfFile && this.selectedImageFile) {
      // Use a service to handle the file upload logic and interact with the server
      // Here, you can use Angular HttpClient to send the files to your server
      // Example:
      // this.fileUploadService.uploadFiles(this.selectedPdfFile, this.selectedImageFile).subscribe(
      //   response => {
      //     console.log('Files uploaded successfully', response);
      //   },
      //   error => {
      //     console.error('Error uploading files', error);
      //   }
      // );

      // For demonstration purposes, log file details
      console.log('Selected PDF File:', this.selectedPdfFile);
      console.log('Selected Image File:', this.selectedImageFile);

      // Clear the selected files after upload
      this.selectedPdfFile = null;
      this.selectedImageFile = null;
    } else {
      console.error('Please select both PDF and Image files');
    }
  }
}
