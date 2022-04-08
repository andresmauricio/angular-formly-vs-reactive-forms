import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { distinctUntilChanged, map, startWith, switchMap } from 'rxjs';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-forms-whit-formly',
  templateUrl: './forms-whit-formly.component.html',
  styleUrls: ['./forms-whit-formly.component.scss'],
})
export class FormsWhitFormlyComponent implements OnInit {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions | any = {
    formState: {
      awesomeIsForced: false,
    },
  };

  fields: FormlyFieldConfig[] = [
    {
      key: 'full_name',
      type: 'input',
      templateOptions: {
        label: 'Full Name',
        placeholder: 'Joe Doe',
        required: true,
        appearance: 'fill'
      },
    },
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        label: 'Email',
        placeholder: 'example@example.com',
        required: true,
        appearance: 'fill'
      },
    },
    {
      key: 'country',
      type: 'select',
      templateOptions: {
        label: 'Country',
        options: this.configService.getCountries().pipe(map((r) => r.results)),
        valueProp: 'id',
        labelProp: 'name',
        required: true,
        appearance: 'fill'
      },
    },
    {
      key: 'city',
      type: 'select',
      templateOptions: {
        label: 'City',
        required: true,
        options: [],
        valueProp: 'id',
        labelProp: 'name',
        appearance: 'fill'
      },
      hooks: {
        onInit: (field: FormlyFieldConfig | any) => {
          field.templateOptions.options = field.form
            .get('country')
            .valueChanges.pipe(
              switchMap((countryId) =>
                this.configService
                  .getCitiesById(countryId)
                  .pipe(map((response) => response.results))
              )
            );
        },
      },
    },
  ];

  constructor(private configService: ConfigService) {}

  ngOnInit(): void {}

  submit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model));
    }
  }
}
