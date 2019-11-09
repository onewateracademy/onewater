import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';

@Component({
  selector: 'app-author-dashboard',
  templateUrl: './author-dashboard.component.html',
  styleUrls: ['./author-dashboard.component.scss']
})
export class AuthorDashboardComponent implements OnInit {
 recentblogs=[
   {
     title:'12 benefits of yoga',
     img:'assets/img/jobs/dashboard/images/user-1.jpg',
     date:'12/12/2019',
     status:'approved'
   },
   {
    title:'12 benefits of yoga',
    img:'assets/img/jobs/dashboard/images/user-1.jpg',
    date:'12/12/2019',
    status:'pending'
  },
  {
    title:'12 benefits of yoga',
    img:'assets/img/jobs/dashboard/images/user-1.jpg',
    date:'12/12/2019',
    status:'approved'
  },
  {
    title:'12 benefits of yoga',
    img:'assets/img/jobs/dashboard/images/user-1.jpg',
    date:'12/12/2019',
    status:'pending'
  },
  {
    title:'12 benefits of yoga',
    img:'assets/img/jobs/dashboard/images/user-1.jpg',
    date:'12/12/2019',
    status:'approved'
  }
 ]
  constructor() { }

  ngOnInit() {
    Feather.replace();
  }

}
