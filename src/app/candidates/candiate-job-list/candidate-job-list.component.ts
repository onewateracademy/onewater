import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class CandidateJobListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    Feather.replace();
  }

}
