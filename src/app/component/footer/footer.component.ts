import { Component, OnInit } from '@angular/core';
import data from "../../../assets/data/jt-website.json"

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {

  socialMedia = [
    { label: 'facebook', icon: 'share', routerlink:"Home" },
    { label: 'twitter', icon: 'share', routerlink:"hireUs" },
    { label: 'instagram', icon: 'share', routerlink:"portfolio" },
    { label: 'linkedin', icon: 'share', routerlink:"services" }
  ];
  data:any = {...data};


  mainHeader!:any;
  subtitle:any = [];
  copyright!: any;

  ngOnInit() {
    console.log(data?.footer?.title)
    this.mainHeader = Object.keys(data?.footer?.title)
    console.log(this.mainHeader);
    console.log(this.data.footer.title.company.data)
    // company.label
    // this.mainHeader.map((item:any) => {
    //   console.log(item)
    //   this.subtitle[item] = this.data?.footer?.[item]
    //   console.log(this.subtitle)
    // })
    this.copyright = this.data.footer.copyright;
  }

}
