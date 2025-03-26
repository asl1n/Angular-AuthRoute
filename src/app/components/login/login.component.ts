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
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  constructor(private meroService: AuthService,
    private router: Router
  ){}

  onSubmit() {
    if (this.loginForm.valid) {
      const returnValues = this.loginForm.getRawValue();
      this.meroService.login(returnValues).subscribe({
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
