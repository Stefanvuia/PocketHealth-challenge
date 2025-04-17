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

  constructor(
    private router:      Router,
    private userService: UserService  // if you want a service fallback
  ) { }

  ngOnInit(): void {
    const navState = window.history.state as { name?: string; userId?: string };

    if (navState.name && navState.userId) {
      this.name   = navState.name;
      this.userId = navState.userId;
      return;
    }

    // optional fallback to UserService.getUserDetails()
    const details = this.userService.getUserDetails();
    if (details) {
      this.name   = details.name;
      this.userId = details.userId;
      return;
    }

    // if still no data, send them back to register
    this.router.navigateByUrl('/register');
  }
}
