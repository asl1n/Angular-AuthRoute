import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private meroService: AuthService,
    private router: Router
  ){}

  ngOnInit() : void{
    if(this.meroService.isLoggedIn()){
      this.router.navigate(['admin']);
    }
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.meroService.login(this.loginForm.value).subscribe({
        next: () => {
          this.router.navigate(['admin']);
        },
        error: (err) => {
          alert(err.message); 
        }
      });
    }
  }
}
