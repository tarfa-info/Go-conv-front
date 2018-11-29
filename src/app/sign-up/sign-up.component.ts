import { Component, OnInit } from '@angular/core';
import { RegistryService } from '../registry.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private registry: RegistryService, private route: Router) { }

  ngOnInit() {
  }

  public signUp (fullname: string, email: string, password: string) {

    this.registry.signUp(fullname, email, password).subscribe((res) => {
      console.log(res);
      if (res) {
        this.route.navigate(['/dash']);
      }
     });
  }

}
