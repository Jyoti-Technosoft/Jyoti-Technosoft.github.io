import data from '../../../assets/data/jt-website.json';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss'],
  encapsulation : ViewEncapsulation.None,
})
export class CareerComponent implements OnInit {
  pageSize = 5;
  data = { ...data };
  jobInfo: any;
  onPageData: any = [];
  searchText:any = {};
  jobCatagory: any;
  tooDisplay = false;
  selectedJobs: any | undefined;

  constructor(
    private route: Router,
    private activeRoute: ActivatedRoute,
    private location: Location,
    private scroller: ViewportScroller
  ) {}

  ngOnInit() {
    this.jobInfo = this.data?.jobs;
    this.onPageData = this.jobInfo.slice(0, this.pageSize);
    this.getSelectedJobData();
  }

  toggledData() {
    this.tooDisplay = !this.tooDisplay;
  }

  back() {
    this.location.back();
  }
  getSelectedJobData() {
    this.activeRoute.queryParams.subscribe((selectedJob:any)=>{
      if(selectedJob) {
        this.selectedJobs = this.data.jobs.find((data)=> data.id == parseInt(selectedJob.job));
      }
    })
  }

  onPageChanged(e) {
    let firstCut = e.pageIndex * e.pageSize;
    let secondCut = firstCut + e.pageSize;
    this.onPageData = this.jobInfo.slice(firstCut, secondCut);
  }
  filterChange(data) {
    if(this.searchText.jobNature == data) {
      delete this.searchText.jobNature
    } else {
      this.searchText.jobNature = data ;
    }
  }
  filterChangee(data) {
    if(this.searchText.jobCatagory == data) {
      delete this.searchText.jobCatagory
    } else {
      this.searchText.jobCatagory = data ;
    }
  }

  jobs(id: number) {
    const queryParams: Params = { job: id };
   this.route.navigate(['/career'], { queryParams });
   this.scroller.scrollToPosition([0,500])
  }
}
