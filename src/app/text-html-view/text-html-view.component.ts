import { Component, OnInit } from '@angular/core';
import {TextHtmlService} from '../text-html.service';

@Component({
  selector: 'app-text-html-view',
  templateUrl: './text-html-view.component.html',
  styleUrls: ['./text-html-view.component.css']
})
export class TextHtmlViewComponent implements OnInit {

  get templateHtml() {
    return this.textHtmlService.templateHtml;
  }

  get templateHtml2() {
    return this.textHtmlService.templateHtml2;
  }

  set templateHtml2(val) {
    this.textHtmlService.templateHtml2 = val;
  }

  constructor(private textHtmlService: TextHtmlService) { }

  ngOnInit() {
  }

  init() {
    const fruits: string[] = ['pomme', 'poire', 'abricot'];
    this.templateHtml2 = '<div *ngFor="let fruit of fruits">{{fruit}}</div>';
  }

}
