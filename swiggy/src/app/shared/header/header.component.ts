import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfileService } from 'src/app/accounts/services/user-profile.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() LogoHidden: Boolean = false;

  constructor(private router: Router){}

  ngOnInit(): void {
  }

  toHome(){
    this.router.navigateByUrl("/")
  }
}
