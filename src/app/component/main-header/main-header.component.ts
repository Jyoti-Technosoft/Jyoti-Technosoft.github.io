import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {

  menuItems = [
    { label: 'Home', icon: 'pi pi-fw pi-plus', routerlink:"Home" },
    { label: 'Hire a Developer', icon: 'pi pi-fw pi-download', routerlink:"hireUs" },
    { label: 'Portfolio', icon: 'pi pi-fw pi-refresh', routerlink:"portfolio" },
    { label: 'Services', icon: 'pi pi-fw pi-refresh', routerlink:"services" },
    { label: 'Contact', icon: 'pi pi-fw pi-refresh', routerlink:"contact" },
    { label: 'Career', icon: 'pi pi-fw pi-refresh', routerlink:"career" }
  ];

  ngOnInit() {
   
  }

}
