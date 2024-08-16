import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { SecretComponent } from './secret/secret.component';

export const routes: Routes = [
  {path: "register", component: RegisterComponent},
  {path: "secret", component: SecretComponent}
];
