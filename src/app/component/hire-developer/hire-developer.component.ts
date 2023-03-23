import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hire-developer',
  templateUrl: './hire-developer.component.html',
  styleUrls: ['./hire-developer.component.scss'],
})
export class HireDeveloperComponent implements OnInit {
  constructor() {}
  ngOnInit() {}

  technologyInfo: any = {
    id: 'angular',
    label: 'Angular developement',
    decription: 'We offer reliable AngularJS mobile app development to build highly \
    scalable and secure applications. By using our Angular development \
    expertise, you can elevate your web presence goals and watch as your \
    business objectives are translated into technical solutions. JYOTI \
    TECHNOSOFT is an <b>Angular development company</b> that offers \
    customized Angular development services to suit your business needs. \
    Along with our maintenance and support services, you will never have to \
    worry about the technical aspects, giving you more time to focus on \
    expanding your business.',
    services: [
      {
        header: 'Custom Developement',
        icon: 'assets/images/Custom-AngularJS-Web-Development.svg',
        decription: 'We offer reliable AngularJS mobile app development to build highly \
        scalable and secure applications. By using our Angular development \
        expertise, you can elevate your web presence goals and watch as your \
        business objectives are translated into technical solutions. JYOTI \
        TECHNOSOFT is an <b>Angular development company</b> that offers \
        customized Angular development services to suit your business needs. \
        Along with our maintenance and support services, you will never have to \
        worry about the technical aspects, giving you more time to focus on \
        expanding your business.',
      },
      {
        header: 'Plugin Development',
        icon: 'assets/images/Plugin-Development.svg',
        decription: 'We offer reliable AngularJS mobile app development to build highly \
        scalable and secure applications. By using our Angular development \
        expertise, you can elevate your web presence goals and watch as your \
        business objectives are translated into technical solutions. JYOTI \
        TECHNOSOFT is an <b>Angular development company</b> that offers \
        customized Angular development services to suit your business needs. \
        Along with our maintenance and support services, you will never have to \
        worry about the technical aspects, giving you more time to focus on \
        expanding your business.',
      },
      {
        header: 'Maintenance & Support',
        icon: 'assets/images/Support-Maintainence.svg',
        decription: 'We offer reliable AngularJS mobile app development to build highly \
        scalable and secure applications. By using our Angular development \
        expertise, you can elevate your web presence goals and watch as your \
        business objectives are translated into technical solutions. JYOTI \
        TECHNOSOFT is an <b>Angular development company</b> that offers \
        customized Angular development services to suit your business needs. \
        Along with our maintenance and support services, you will never have to \
        worry about the technical aspects, giving you more time to focus on \
        expanding your business.',
      },
      {
        header: 'API Integration and Development',
        icon: 'assets/images/API-Integration-and-Development.svg',
        decription: 'We offer reliable AngularJS mobile app development to build highly \
        scalable and secure applications. By using our Angular development \
        expertise, you can elevate your web presence goals and watch as your \
        business objectives are translated into technical solutions. JYOTI \
        TECHNOSOFT is an <b>Angular development company</b> that offers \
        customized Angular development services to suit your business needs. \
        Along with our maintenance and support services, you will never have to \
        worry about the technical aspects, giving you more time to focus on \
        expanding your business.',
      },
    ],
  };
}
