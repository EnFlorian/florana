import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],
})
export class AuthPageComponent implements OnInit {
  title: string = 'My Account';
  description: string = 'Login to your Account';
  form: FormGroup;
  // demo purposes only
  email: string = 'demo@user.com';
  password: string = 'demo';

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    this.authService.login(this.form.value);
  }
}
