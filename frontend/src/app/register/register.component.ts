import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  favouriteColour: string = '#000000';
  
  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void { }

  onFormSubmit(form: NgForm) {
    const name   = form.value.name;
    const email  = form.value.email;
    const colour = form.value.favourite_colour;    // hex string like “#3a9ad9”
  
    this.userService.postRegister(name, email, colour)
      .subscribe({
        next: (resp: { user_id: string }) => {
          this.router.navigateByUrl('/home', {
            state: { name, userId: resp.user_id, colour}
          });
        },
        error: err => {
          alert('Registration failed: ' + err.message);
        }
      });
  }
}
