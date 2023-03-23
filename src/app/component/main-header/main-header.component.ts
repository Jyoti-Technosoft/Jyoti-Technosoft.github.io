import { Component, OnInit, HostListener, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { Icons } from "@app/shared-components/shared-interface/Icons" 
@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
})
export class MainHeaderComponent implements OnInit {
  menuItems: Icons[] = [
    { label: 'Home', icon: 'pi pi-fw pi-plus', routerlink: 'home' },
    {
      label: 'Hire a Developer',
      icon: 'pi pi-fw pi-download',
      routerlink: 'hire-us',
      subItems: [
        { id:'angular', label: 'Hire Angular Developer', routerlink: 'hire-us' },
        { id: 'react', label: 'Hire Java Developer', routerlink: 'hire-us' },
        { id: 'codeIgnator', label: 'Hire CodeIgnator Developer ', routerlink: 'hire-us' },
      ],
    },
    {
      label: 'Portfolio',
      icon: 'pi pi-fw pi-refresh',
      routerlink: 'portfolio',
    },
    { label: 'Services', icon: 'pi pi-fw pi-refresh', routerlink: 'services' },
    { label: 'Contact', icon: 'pi pi-fw pi-refresh', routerlink: 'contact-us' },
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
