import { Component, OnInit, Input } from '@angular/core';
import { Container } from '../models/container';
import { DockerService } from '../docker.service';
import { ActivatedRoute } from '@angular/router';

import * as Rx from 'rxjs/Rx';

@Component({
  templateUrl: './container-info.component.html',
  styleUrls: ['./container-info.component.css']
})
export class ContainerInfoComponent implements OnInit {

  container: Container;

  constructor(private route: ActivatedRoute, private dockerService: DockerService) { }

  ngOnInit() {
    this.route.data.subscribe(data => this.container = data['container']);
  }

}

