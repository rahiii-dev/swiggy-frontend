import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input()Guest: boolean= true;
  @Input()Reload: boolean= true;
  @Output() Authenticated =  new EventEmitter<boolean>()

  loginForm!: FormGroup;
  loginError!: string;
  error!: string;

  private initForm(){
    this.loginForm = new FormGroup({
      'userid': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    });
  }

  constructor(private Auth: AuthenticationService, private router: Router){}

  ngOnInit(): void {
    this.initForm()
  }

  guestLogin() {
    this.Auth.setGuestUser()
    this.router.navigateByUrl('/');
  }

  onSubmit() {
    this.loginError = ''
    
    const formdata = new FormData()
    formdata.append('userid', this.loginForm.get('userid')?.value);
    formdata.append('password', this.loginForm.get('password')?.value);

    this.Auth.authenticate(formdata)
    .subscribe({
      next: (response) => {
          if (this.Auth.isLoggedIn()) {
            if (this.Reload){
              window.location.reload()
            }
            else {
              this.Authenticated.emit(true)
            }
          } else {
            this.loginError = 'UserID or password is incorrect.';
          }
      },
      error: (err) => {
        this.loginError = err.message
      }
  });
  }
}
