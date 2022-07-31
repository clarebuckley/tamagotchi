import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/user.interface';
import { UserApiService } from 'src/app/services/user-api-service/user-api.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { TamagotchiApiService } from 'src/app/services/tamagotchi-api-service/tamagotchi-api.service';
import { ITamagotchi } from 'src/app/interfaces/tamagotchi.interface';

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
    lastLoggedInDate: new Date()
  }

  tamagotchi: ITamagotchi = {
    tamagotchiId: '',
    owner: ''
  }

  constructor(private userApiService: UserApiService,
    private formBuilder: FormBuilder,
    private tamagotchiApiService: TamagotchiApiService) {
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
      this.user.lastLoggedInDate = new Date();
      this.tamagotchi.tamagotchiId = crypto.randomUUID();
      this.tamagotchi.owner = this.user.userId

      this.userApiService.createUser(this.user).subscribe((response) => console.log(response))
      this.tamagotchiApiService.createTamagotchi(this.tamagotchi).subscribe((response) => console.log(response))
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
