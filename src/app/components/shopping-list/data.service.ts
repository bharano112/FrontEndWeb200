import { Observable, BehaviorSubject } from 'rxjs';

export class DataService {

  private message = 'Defualt message from service';
  private messageSubject = new BehaviorSubject<string>('Default subject Value...');

  getMessage() {
    return this.message;
  }

  setMessage(newValue: string) {
    this.message = newValue;
    this.messageSubject.next(newValue);
  }

  getObservable(): Observable<string> {
    return this.messageSubject.asObservable();
  }

}
