import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsWhitFormlyComponent } from './components/forms-whit-formly/forms-whit-formly.component';
import { FormsWhitReactiveFormsComponent } from './components/forms-whit-reactive-forms/forms-whit-reactive-forms.component';

const routes: Routes = [
  { path: 'formly', component: FormsWhitFormlyComponent },
  { path: 'forms', component: FormsWhitReactiveFormsComponent },
  { path: '', redirectTo: 'formly', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
