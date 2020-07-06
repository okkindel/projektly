import { Message } from '@projektly/api-interfaces';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { head } from 'ramda';

@Component({
  selector: 'projektly-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');

  public ramdaTest = head(['test', 'test2']);

  constructor(private http: HttpClient) {}
}
