import { Component, OnInit } from '@angular/core';
import data from "../../../assets/data/jt-website.json"
import { Icons } from '@app/shared-components/shared-interface/Icons';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {

  socialMedia: Icons[] = [
    { label: 'facebook', icon: 'fa-facebook-square', routerlink:"Home" },
    { label: 'twitter', icon: 'fa-twitter-square', routerlink:"hireUs" },
    { label: 'instagram', icon: 'fa-instagram', routerlink:"portfolio" },
    { label: 'linkedin', icon: 'fa-linkedin-square', routerlink:"services" }
  ];
  data:any = {...data};


  mainHeader!:any;
  subtitle:any = [];
  copyright!: any;

  ngOnInit() {
    this.mainHeader = Object.keys(data?.footer?.title)
    this.copyright = this.data.footer.copyright;
  }

}
