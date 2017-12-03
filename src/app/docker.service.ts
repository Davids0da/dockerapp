import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Rx from 'rxjs/Rx';

import { Port } from './models/port';
import { Image } from './models/image';
import { Container } from './models/container';


@Injectable()
export class DockerService {

  constructor(private http: HttpClient) { }

  public getImages() {
    return this.http.get('http://localhost:1234/images/json') as Rx.Observable<Image[]>;
  }

  public getContainers() {
    return this.http.get('http://localhost:1234/containers/json?all=1') as Rx.Observable<Container[]>;
  }

  public stopContainer(id: string) {
    return this.http.post(`http://localhost:1234/containers/${id}/stop`, null);
  }

  public startContainer(id: string) {
    return this.http.post(`http://localhost:1234/containers/${id}/start`, null);
  }

}


