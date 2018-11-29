import { Component, OnInit } from '@angular/core';
import {UpLoadService} from '../up-load.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit {
  selectedFiles: FileList;
  currentFileUpload: File;
  urlFileList = new Array<string>();

  constructor(private serviceUpload: UpLoadService, private spinner: NgxSpinnerService ) {}
  ngOnInit() {
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.spinner.show();

    this.serviceUpload.uploadFile(this.selectedFiles[0]).subscribe(res => {
      console.log(res);
      if (res.status === 'Done!') {
        console.log(res.file);
        this.urlFileList.push(res.file);
        this.spinner.hide();
      }
      this.spinner.hide();
    });
  }

}
