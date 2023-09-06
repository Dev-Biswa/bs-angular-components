import { Component } from '@angular/core';

interface menuitem {
    id?: number;
    title?:string;
    link?:string;
    submenu?:menuitem[];
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  navMenuItems : menuitem[] = [
    {id: 1, title: 'Home', link : '/home'},
    {id: 2, title: 'Custom',
    submenu: [
        {id: 21, title: 'grid', link : '/custom/grid'},
        {id: 22, title: 'form', link : '/custom/form'}
    ]},
    {id: 3, title: 'Test', 
    submenu: [
        {id: 31, title: 'test sub'}
    ]},
    {id: 4, title: 'Custom', link : '/custom'},
  ]
}