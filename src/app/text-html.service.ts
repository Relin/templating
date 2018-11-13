import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TextHtmlService {
  _templateHtml: string = null;
  set templateHtml(templateHtml: string) {
    this._templateHtml = templateHtml;
  }
  get templateHtml(): string {
    return this._templateHtml;
  }

  _templateHtml2 = '';
  set templateHtml2(templateHtml2: string) {
    this._templateHtml2 = templateHtml2;
  }
  get templateHtml2(): string {
    return this._templateHtml2;
  }
}
