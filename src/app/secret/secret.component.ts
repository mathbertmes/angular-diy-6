import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-secret',
  standalone: true,
  imports: [NgIf],
  templateUrl: './secret.component.html',
  styleUrl: './secret.component.css'
})
export class SecretComponent {
  password: string | undefined = undefined;
  ngOnInit() {
    const userData = localStorage.getItem('user')
    if(userData){
      this.password = JSON.parse(userData).password
    }
  }
}
