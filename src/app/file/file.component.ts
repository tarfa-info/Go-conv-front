import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit {

  @Input() file;
  constructor(private route: Router) { }

  ngOnInit() {
    console.log(this.file);
  }

  public download() {
   /* const url = window.URL.createObjectURL(this.file);
    const a = document.createElement('a');
    document.body.appendChild(a);
    a.setAttribute('style', 'display: none');
    a.href = this.file;
    a.download = this.file;
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove(); // remove the element*/
    window.location.href = this.file;
  }

}
