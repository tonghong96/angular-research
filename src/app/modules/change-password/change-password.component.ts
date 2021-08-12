import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  public formChangePass = this.formBuilder.group({
    current_password: '',
    new_password: '',
    confirm_password: '',
  });

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  changePassword(): void {
    console.log('CHANGE PASSWORD')
  }

}
