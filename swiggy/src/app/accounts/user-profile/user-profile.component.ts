import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../services/user-profile.service';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Myorders } from 'src/app/user/interfaces/myorders';
import { OrderService } from 'src/app/shared/services/order.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  inptDisabled: boolean = true;

  fullnameLength: number = 10;
  emailLength: number = 20;

  formError!: string;

  UserUpdateForm !: FormGroup;
  Usertype!: string;

  UserOrders!: Observable<Myorders>;

  private initForm(){
    this.UserUpdateForm = new FormGroup({
      'full_name' : new FormControl(null, [Validators.required]),
      'phone_no' : new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      'email' : new FormControl(null, [Validators.required, Validators.email]),
    });
  }

  UpdateForm(){
    this.formError = ''
    this.UserUpdateForm.disable()
    this.inptDisabled = true

    this.user$.getUser().subscribe(
      data => {
        this.fullnameLength = data.full_name.length
        this.emailLength = data.email.length

        this.UserUpdateForm.patchValue({
          'full_name': data.full_name,
          'phone_no': data.phone_no,
          'email': data.email
        });
      }
    )
  }

  constructor(private user$: UserProfileService, 
    private auth$: AuthenticationService,
    private router: Router,
    private order$: OrderService){}

  ngOnInit(): void {
    this.Usertype = this.auth$.getUserType()
    if(this.Usertype == 'user'){
      this.UserOrders =  this.order$.getOrder()
    }

    this.initForm()
    this.UserUpdateForm.disable()
    this.UpdateForm()
  }

  changeWidth(control: string){
    let value = this.UserUpdateForm.get(control)?.value;

    if(value.length < 3){
      return
    }

    if(control == 'full_name'){
      this.fullnameLength = value.length
    }
    else{
      this.emailLength = value.length
    }
  }

  enableForm(){
    this.inptDisabled = false
    this.UserUpdateForm.enable()
  }

  SubmitForm(){
    this.formError = ''

    const formdata =  new FormData()
    formdata.append('full_name', this.UserUpdateForm.get('full_name')?.value);
    formdata.append('phone_no', this.UserUpdateForm.get('phone_no')?.value);
    formdata.append('email', this.UserUpdateForm.get('email')?.value);

    if(this.UserUpdateForm.valid){
      this.user$.updateUser(formdata).subscribe({
        next: data => {
          this.UpdateForm()
        },
        error: err=> {
          this.formError = err.message
        }
      });
    }
  }

  logout(){
    this.auth$.logout()
    window.location.reload()
  }
}
