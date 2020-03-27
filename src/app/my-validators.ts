import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';

export class MyValidators {

  static restrictedEmails(control: FormControl): {[key: string]: boolean} {
    if (['v@mail.ru', 'test@mail.ru'].includes(control.value)) {
      return {restrictedEmail: true};
    }
    return null;
  }

  static uniqueEmail(control: FormControl): Promise<{[key: string]: boolean}> {
    return new Promise(resolve => { // here will be request to server
      setTimeout(() => {
        if (control.value === 'async@mail.ru') {
          resolve({
            uniqueEmail: true
          });
        } else {
          resolve(null);
        }
      }, 1000);
    });
  }
}
