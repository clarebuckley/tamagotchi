import { Component, getNgModuleById, OnInit } from '@angular/core';
import { GridAutoDirective } from '@angular/flex-layout';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/interfaces/user.interface';
import { TamagotchiApiService } from 'src/app/services/tamagotchi-api-service/tamagotchi-api.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  newEmail: string = '';
  newPassword: string = '';

  existingEmail: string = '';
  existingPassword: string = '';

  submitted: boolean = false;
  registered: boolean = false;
  userFormLogin: any;
  userFormSignUp: any;

  user: IUser = {
    userId: '',
    username: '',
    password: '',
    tamagotchi: '',
    lastLoggedInDate: new Date()
  }

  constructor(private tamagotchiApiService: TamagotchiApiService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.userFormLogin = this.formBuilder.group({
      existingEmail: ['', Validators.required],
      existingPassword: ['', Validators.required],
    });

    this.userFormSignUp = this.formBuilder.group({
      newEmail: ['', Validators.required],
      newPassword: ['', Validators.required],
    });
  }

  onSignupSubmit() {
    this.submitted = true;
    if (this.userFormSignUp.invalid == true) {
      return;
    }
    else {
      this.registered = true;
      this.user.userId = crypto.randomUUID();
      this.user.username = this.newEmail;
      this.user.password = this.newPassword;
      this.tamagotchiApiService.createuser(this.user);
    }
  }

  onLoginSubmit() {
    this.submitted = true;
    if (this.userFormSignUp.invalid == true) {
      return;
    }
    else {
      this.user.username = this.newEmail;
      this.user.password = this.newPassword;
    }
  }

  invalidLoginEmail() {
    return (this.submitted && this.userFormLogin.controls.existingEmail.errors != null);
  }

  invalidSignUpEmail() {
    return (this.submitted && this.userFormSignUp.controls.newEmail.errors != null);
  }

  invalidLoginPassword() {
    return (this.submitted && this.userFormLogin.controls.existingPassword.errors != null);
  }

  invalidSignUpPassword() {
    return (this.submitted && this.userFormSignUp.controls.newPassword.errors != null);
  }


}
