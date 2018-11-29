import { Component, OnInit } from '@angular/core';
import { RegistryService } from '../registry.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private service: RegistryService, private router: Router) { }

  ngOnInit() {
  }

  public signIn (email , password) {
    this.service.signIn(email, password).subscribe(res => {
      console.log(res);
      if (res) {
        this.router.navigate(['/dash']);
      }
    });
  }
}
