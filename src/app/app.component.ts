import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {MyValidators} from './my-validators';

export interface Post {
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form: FormGroup;
  addressGroup: FormGroup;
  cityControl = new FormControl('', [Validators.required]);
  cityMap;

  ngOnInit(): void {
    this.addressGroup = new FormGroup({
      country: new FormControl('ua'),
      city: this.cityControl
    });

    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.email,
        Validators.required,
        MyValidators.restrictedEmails
      ], [MyValidators.uniqueEmail]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      addressGroup: this.addressGroup,
      skills: new FormArray([])
    });

    this.cityMap = {
      ua: 'Kyiv',
      ru: 'Moscow',
      by: 'Minsk'
    };

    this.setCapital();
  }

  setCapital() {
    this.addressGroup.patchValue({
      city: this.cityMap[this.addressGroup.get('country').value]
    });
  }

  submit() {
     console.log('Form submitted ',  this.form);
     this.form.reset();
  }

  addSkill() {
    const skillControl = new FormControl('', Validators.required);
    (this.form.get('skills') as FormArray).push(skillControl);
  }
}
