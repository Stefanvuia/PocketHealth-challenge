import { Component, OnInit } from '@angular/core';
import { Router }           from '@angular/router';
import { UserService }      from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name   = '';
  userId = '';
  favouriteColour  = '#ffffff';

  constructor(
    private router:      Router,
    private userService: UserService  // if you want a service fallback
  ) { }

  ngOnInit(): void {
    const navState = window.history.state as { name?: string; userId?: string; favouriteColour?: string};

    if (navState.name && navState.userId && navState.favouriteColour) {
      this.name   = navState.name;
      this.userId = navState.userId;
      this.favouriteColour = navState.favouriteColour;
      return;
    }

    // optional fallback to UserService.getUserDetails()
    const details = this.userService.getUserDetails();
    if (details) {
      this.name   = details.name;
      this.userId = details.userId;
      this.favouriteColour = details.favouriteColour;
      return;
    }

    // if still no data, send them back to register
    this.router.navigateByUrl('/register');
  }
}

