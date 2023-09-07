import { Component, HostListener, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  {
  title = 'AyabiliariaFront';
  @ViewChild('sidenav') sidenav!: MatSidenav;
  isSmallScreen = false;

  constructor() {}

  toggleSidenav() {
    this.sidenav.toggle();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isSmallScreen = window.innerWidth <= 768; // Cambia 768 al ancho deseado para mostrar el botón hamburguesa
  }

}


