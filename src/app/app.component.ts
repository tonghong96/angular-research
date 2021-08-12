import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-research';

  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'ja']);
    translate.setDefaultLang('en');
  }
}
