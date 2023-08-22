import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

HttpClient



@Injectable({
  providedIn: 'root',
})

export class PostservicesService {

  constructor(public httpclient: HttpClient) { }

  
  personUser(userdata: any) {
  console.log(userdata)
  return this.httpclient.post<any[]>(environment.apiUrl + '/users/persondata',{ userdata });
}

}

