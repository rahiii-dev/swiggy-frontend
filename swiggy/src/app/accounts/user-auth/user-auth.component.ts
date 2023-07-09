import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent {
  type: string = 'user';
  authtype!: string;

  constructor(private route: ActivatedRoute, private router: Router){
    this.route.params.subscribe(param => {
      let authtype = param?.['type']
      if(authtype == 'login' ||authtype == 'signup') {
        this.authtype = authtype
      }
      else {
        router.navigateByUrl('/auth/login')
      }
    })
  }

  navigate(authtype: string){
    this.router.navigateByUrl(`/auth/${authtype}`)
  }

  changeType(type: string) {
    this.type = type;
  }
}
