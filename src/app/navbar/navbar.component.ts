import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-navbar',
    imports: [CommonModule],
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'] // Corrected the property name
})
export class AppNavbar {
    isPopUpVisible: boolean = false;

    openPopup() {
        this.isPopUpVisible = true;
    }

    closePopup() {
        this.isPopUpVisible = false;
    }
}
