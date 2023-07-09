import { Component, OnInit, Input } from '@angular/core';
import { ZoneService } from '../services/zone.service';
import { UserProfileService } from 'src/app/accounts/services/user-profile.service';
import { AuthenticationService } from 'src/app/accounts/services/authentication.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {
  closed : boolean = true
  userLocation! :string;
  UserName!: string;
  loggedIn!: boolean;

  cartCount: number = 0;

  constructor(private zoneservice: ZoneService,
    private user$: UserProfileService,
    private auth$: AuthenticationService,
    private cart$: CartService) {
    
  }

  ngOnInit(): void {
    if(this.zoneservice.isInZone()) {
      this.zoneservice.getPlace()
      this.zoneservice.userPlace$.subscribe((value) => {
        this.userLocation = value
      })

      this.cart$.getCartCount()
      this.cart$.itemsCount$.subscribe(data =>{
        this.cartCount = data
      })
    }

    if(this.auth$.isLoggedIn()){
      this.loggedIn = true
      this.user$.getUser().subscribe()
      this.user$.username$.subscribe(
        data => {
          this.UserName = data
        }
      )
    }
    else {
      this.loggedIn = false
    }

  }

  toggleClose($event: boolean) {
    this.closed = $event
  }
}
