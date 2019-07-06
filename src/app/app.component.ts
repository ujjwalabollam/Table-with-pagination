import { Component, OnInit } from '@angular/core';
import { sampleData } from './sample-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit {
  rows = [10, 25, 50, 100, 125, 150, 175, 200];
  selectedRowData: any;
  selectedRowCount: any = '';
  numOfPages: any = [];
  range = 20;
  selectedPage = 1;
  submittedID: any = null;
  submittedStatus:  any = null;
  headers = [
    { title: 'Actions', width: '100px'},
    { title: 'ID', width: '100px'},
    { title: 'Name', width: '200px'},
    { title: 'Phone', width: '200px'},
    { title: 'Email', width: '250px'},
    { title: 'Company', width: '250px'},
    { title: 'Entry Date', width: '250px'},
    { title: 'Org Phone', width: '200px'},
    { title: 'Address', width: '250px'},
    { title: 'City', width: '250px'},
    { title: 'Zipcode', width: '150px'},
    { title: 'Geo', width: '250px'},
    { title: 'PAN', width: '250px'},
    { title: 'PIN', width: '150px'},
    { title: 'Status', width: '150px'},
    { title: 'Fee', width: '150px'},
    { title: 'Exit Date', width: '250px'},
    { title: 'First Date', width: '250px'},
    { title: 'Recent Date', width: '250px'},
    { title: 'URL', width: '250px'}
  ];
  ngOnInit() {
    this.selectedRowData = sampleData;
    const noOfPages = sampleData.length / this.range;
    for (let i = 1; i <= noOfPages; i++) {
      this.numOfPages.push(i);
    }
    this.selectedPage = this.numOfPages[0];
    this.loadPage(this.selectedPage);
  }

  changeRowCount(item) {
    this.selectedRowCount = item;
    this.selectedPage = 0;
    this.selectedRowData = sampleData.slice(0, this.selectedRowCount);
  }

  loadPage(pageNum) {
    this.selectedRowCount = '';
    this.selectedPage = pageNum;
    const startRange = pageNum * this.range - this.range;
    const endRange = this.range * pageNum;
    // console.log(pageNum, startRange, endRange);
    this.selectedRowData = sampleData.slice(startRange, endRange);
  }

  updateScroll(scrollOne: HTMLElement, scrollTwo: HTMLElement) {
    scrollOne.scrollLeft = scrollTwo.scrollLeft;
  }

  submitRow(id, status) {
    this.submittedID = id;
    this.submittedStatus = status;
  }
}
