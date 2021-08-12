import {EventEmitter, Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  syncDataEventEmitter = new EventEmitter();
  showLoadingEventEmitter = new EventEmitter();
  helpEventEmitter = new EventEmitter();

  constructor(
  ) { }

  /**
   * Emit event sync data
   */
  syncData(): void{
    this.syncDataEventEmitter.emit();
  }

  /**
   * Emit event show help info
   */
  helpInfo(): void{
    this.helpEventEmitter.emit();
  }

  /**
   * Encode URI object param
   * @param objParam: object param uri
   */
  encodeURI(objParam: any): string{
    const uri = [];
    for (const param in objParam) {
      if (objParam.hasOwnProperty(param)) {
        const field = objParam[param];
        uri.push((field !== null && typeof field === 'object') ?
          this.encodeURI(field) :
          encodeURIComponent(param) + '=' + encodeURIComponent(field));
      }
    }
    return uri.join('&');
  }

  getDateText(date: Date): string {
    let monthText = (date.getMonth()<9)? '0'+ (date.getMonth()+1): date.getMonth()+1;
    let dateText = (date.getDate()<9)? '0'+ (date.getDate()): date.getDate();
    return date.getFullYear()+ '-'+ monthText + '-' + dateText;
  }
}
