import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Curso',  icon: 'education_agenda-bookmark', class: '' },
    { path: '/icons', title: 'Evaluación',  icon:'design-2_ruler-pencil', class: '' },
    { path: '/maps', title: 'Calificaciones',  icon:'education_paper', class: '' },
    { path: '/user-profile', title: 'Perfil',  icon:'users_single-02', class: '' },
    { path: '/table-list', title: 'Ayuda',  icon:'travel_info', class: '' },
  
    { path: '/upgrade', title: 'Cerrar Sesión',  icon:'ui-1_simple-remove', class: 'active active-pro' }

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };
}
