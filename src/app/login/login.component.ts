import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { AuthenticationService, User } from './login.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  //providers: [AuthenticationService]
})
export class LoginComponent implements OnInit {

  public user = new User('', '', '', '');
  public errorMsg = '';
  returnUrl: string;

  public loginForm = this._formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _service: AuthenticationService,
    public _formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this._service.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '';
  }

  login() {
    console.log('valor: ', this.loginForm.value);
    if (!this._service.login(this.loginForm.value)) {
      this.errorMsg = 'Failed to login';
    }else {
      // this.router.navigate([this.returnUrl]);
      this.router.navigateByUrl('');
    }
  }

}
