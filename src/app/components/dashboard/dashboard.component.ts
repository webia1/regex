import { RegexExamples } from './../../common/data/index';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public debug = false;
  public regexExamples: Array<any>;

  constructor() {}

  ngOnInit(): void {
    this.convertRegexStringToLetterArray();
  }

  convertRegexStringToLetterArray() {
    this.regexExamples = RegexExamples.map((e) => {
      return {
        regex: e.regex.split(''),
        desc: e.desc,
        url: e.url,
      };
    });
  }
}
