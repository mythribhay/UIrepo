import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor(private productService: ProductService) { }
  uploadedFiles: any[] = [];

  ngOnInit() {
  }

  fileChange(event) {
    alert('Uploading....');
    let fileList: FileList = event.target.files[0];

    console.log(fileList);
    this.productService.fileUpload(fileList).subscribe(data => {
      console.log(data);
    });
    // for (let file of event.files) {
    //   this.uploadedFiles.push(file);
    // }
  }
}
