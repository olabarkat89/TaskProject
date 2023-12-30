import { Component, Inject, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public translate = inject(TranslateService)


  title = 'Task';


 

}
