import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Email="";
  Pass = '';
  CPass = '';
  Mobile = '';

  EmailCheck = false;
  PassCheck = false;
  CPassCheck = false;
  isPassMatch = false;
  MobileCheck = false;

  rx = /^[a-z0-9\\._]+@[a-z0-9\\.-]+\.[a-z]+$/;

  regexOp : boolean = false;

  emailChange() {
    this.regexOp = ! this.rx.test(this.Email)
  }

  checkEmpty () {
    this.EmailCheck = (this.Email == '')
    this.PassCheck = (this.Pass == '')
    this.CPassCheck = (this.CPass == '')
    this.isPassMatch = ! (this.CPass == this.Pass)
    this.MobileCheck = (this.Mobile == '') || this.Mobile.length < 10 || this.Mobile.length > 10
  }


}
