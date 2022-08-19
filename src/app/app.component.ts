import { Component } from '@angular/core';

import Editor from './ckeditor5/build/ckeditor';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  public Editor = Editor;
}
