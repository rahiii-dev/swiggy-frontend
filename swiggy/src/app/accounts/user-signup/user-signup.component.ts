import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserRegisterSeviceService } from '../services/user-register-sevice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnChanges{
  @Input()Reload: boolean = true;
  @Input('signupFor') UserType: string = 'user';

  @Output()Created = new EventEmitter<boolean>();

  userForm!: FormGroup;
  formErrors!: any;

  constructor(
      private userRegister: UserRegisterSeviceService,
     private router: Router){}

  private initForm(){
    this.userForm = new FormGroup({
      'full_name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.email], [this.userRegister.EmailValidator(this.UserType)]),
      'phone_no': new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(10)], [this.userRegister.PhoneNoValidator(this.UserType)]),
      'userid': new FormControl(null, Validators.required,[this.userRegister.UserIdValidator()]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(5)]),
      // Minimum eight characters, at least one letter, one number and one special character:
    });
  }

  ngOnInit(): void {
    this.initForm()
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.['UserType']) {
      if (this.userForm) {
        this.userForm.reset()
        this.userForm.get('phone_no')?.setAsyncValidators([this.userRegister.PhoneNoValidator(this.UserType)])
        this.userForm.get('email')?.setAsyncValidators([this.userRegister.EmailValidator(this.UserType)])
      }
    }
  }

  onSubmit() {
    const formdata = new FormData()
    formdata.append('user_type', this.UserType);
    formdata.append('userid', this.userForm.get('userid')?.value);
    formdata.append('password', this.userForm.get('password')?.value);
    formdata.append('full_name', this.userForm.get('full_name')?.value);
    formdata.append('email', this.userForm.get('email')?.value);
    formdata.append('phone_no', this.userForm.get('phone_no')?.value);

    this.userRegister.register(formdata).subscribe({
        next: (data) => {
          if(this.Reload == true){
            this.router.navigateByUrl('/auth/login')
          }
          else {
            this.Created.emit(true)
          }
        },
        error:(err) => {
          this.formErrors = err.message
        }
    }
    );
  }
}
