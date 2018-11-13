import { Component, OnInit } from '@angular/core';
import {TextHtmlService} from '../text-html.service';

@Component({
  selector: 'app-text-html-edit',
  templateUrl: './text-html-edit.component.html',
  styleUrls: ['./text-html-edit.component.css']
})
export class TextHtmlEditComponent implements OnInit {

  get templateHtml() {
    return this.textHtmlService.templateHtml;
  }

  set templateHtml(html) {
    this.textHtmlService.templateHtml = html;
  }

  tinyMceKey = 'xf2na0qmhv3onmt36zovkory1qa3mytf6pvc18upnkvlkdg2';
  config: any;

  constructor(private textHtmlService: TextHtmlService) { }

  ngOnInit() {
    this.config = {
      plugins: [
        'paste',
        'link',
        'image',
        'table',
        'code',
        'lists',
        'searchreplace',
        'contextmenu',
        'print',
        'textcolor',
      ],
      menubar: false,
      statusbar: false,
      height: '300',
      toolbar1:
        'undo redo removeformat | bold italic underline strikethrough subscript superscript | forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print | code',
      // toolbar2: 'styleselect | fontselect | fontsizeselect | link image | table spellchecker | code',
      contextmenu: 'link image inserttable | cell row column deletetable',
      paste_data_images: true,
      // paste_as_text: true,
      images_upload_handler: function(blobInfo, success, failure) {
        // no upload, just return the blobInfo.blob() as base64 data
        success('data:' + blobInfo.blob().type + ';base64,' + blobInfo.base64());
      },
      file_browser_callback: function(field_name, url, type, win) {
        win.document.getElementById(field_name).value = 'my browser value';
      },
      file_browser_callback_types: 'file image media',
      // toolbar_items_size: 'small'
    };
  }

}
