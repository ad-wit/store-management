import { Component, OnInit } from '@angular/core';
import { AuthService } from '../admin/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  online: boolean;
  
  constructor(private authService: AuthService) {}

  logout(): void {
    console.log('Logout!');
    this.authService.logout();
  }
  
  ngOnInit() {
    this.online = this.authService.isLoggedIn();
  }

}
