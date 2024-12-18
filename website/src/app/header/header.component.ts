import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
currentLanguage = "gb"
menuOpen = false;
mobileLanguageDropdownOpen = false; 
mobileServicesDropdownOpen = false; // Toggle services dropdown on mobile

toggleMenu() {
  this.menuOpen = !this.menuOpen; // Toggle the mobile menu
}

toggleLanguageDropdown() {
  this.mobileLanguageDropdownOpen = !this.mobileLanguageDropdownOpen; // Toggle language dropdown
}

toggleServicesDropdown() {
  this.mobileServicesDropdownOpen = !this.mobileServicesDropdownOpen; // Toggle services dropdown on mobile
}

}
