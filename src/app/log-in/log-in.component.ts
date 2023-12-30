import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importez Router depuis '@angular/router'

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'] // Utilisez 'styleUrls' au lieu de 'styleUrl'
})
export class LogInComponent {
  constructor(private router: Router) {}

  onresetpasswordclick() {
    // Rediriger vers la page "reset-password"
    this.router.navigate(['/reset-password']);
  }
}
