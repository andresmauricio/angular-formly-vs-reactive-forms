import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-forms-whit-reactive-forms',
  templateUrl: './forms-whit-reactive-forms.component.html',
  styleUrls: ['./forms-whit-reactive-forms.component.scss'],
})
export class FormsWhitReactiveFormsComponent implements OnInit {
  countries: any = [];
  cities: any = [];
  personalForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private configService: ConfigService
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.configService
      .getCountries()
      .subscribe((countries) => (this.countries = countries.results));
  }

  submit() {
    console.log(this.personalForm.value);
  }

  reset() {
    this.personalForm.reset();
  }

  gecountriestCitiesId(event: any) {
    this.configService
      .getCitiesById(event.value.id)
      .subscribe((cities) => (this.cities = cities.results));
  }

  private buildForm(): void {
    this.personalForm = this.formBuilder.group({
      full_name: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),
        ],
      ],
      email: [null, [Validators.required, Validators.email]],
      country: [null, [Validators.required]],
      city: [null, [Validators.required]],
    });
  }
}
