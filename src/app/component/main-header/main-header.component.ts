import { Component, OnInit, HostListener, Renderer2, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
})
export class MainHeaderComponent implements OnInit {
  menuItems = [
    { label: 'Home', icon: 'pi pi-fw pi-plus', routerlink: 'Home' },
    {
      label: 'Hire a Developer',
      icon: 'pi pi-fw pi-download',
      routerlink: 'hireUs',
      subItems: [
        { label: 'Hire Angular Developer', routerlink: 'hireus' },
        { label: 'Hire Java Developer', routerlink: 'hireus' },
        { label: 'Hire CodeIgnator Developer ', routerlink: 'hireus' },
      ],
    },
    {
      label: 'Portfolio',
      icon: 'pi pi-fw pi-refresh',
      routerlink: 'portfolio',
    },
    { label: 'Services', icon: 'pi pi-fw pi-refresh', routerlink: 'services' },
    { label: 'Contact', icon: 'pi pi-fw pi-refresh', routerlink: 'contact' },
    { label: 'Career', icon: 'pi pi-fw pi-refresh', routerlink: 'career' },
  ];

 @ViewChild("mainNavbar") navbar: any
 
  constructor(private renderer: Renderer2) {}
  ngOnInit() {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let element = document.querySelector('.navbar-area') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      this.renderer.addClass(this.navbar.nativeElement, 'navbar-inverse');
    } else {
      element.classList.remove('navbar-inverse');
    }
  }

}
