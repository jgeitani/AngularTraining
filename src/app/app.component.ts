import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavbar } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppNavbar, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrected the property name
})
export class AppComponent {
  title = 'Training';
  imgUrl: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr6a3JwynKKhblkrjpWw7HlHo18AooKWZELw&s';
  isDisabled: boolean = false;
  isActive: boolean = false;

  changeStatus() {
    this.isActive = !this.isActive;
  }
}
