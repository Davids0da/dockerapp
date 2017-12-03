import { Component, OnInit } from '@angular/core';
import { DockerService } from '../docker.service';

import { Container } from '../models/container';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-container-inlist',
  templateUrl: './container-inlist.component.html',
  styleUrls: ['./container-inlist.component.css']
})
export class ContainerInlistComponent implements OnInit {

  containers: Container[];
  sortedContainers: Container[];

  constructor(
    private dockerService: DockerService,
    private route: ActivatedRoute 
  ) { }

  ngOnInit() {
    this.dockerService.getContainers().subscribe(containers => {
      this.containers = containers;
      this.sortedContainers = this.containers.slice().filter(c => c.Command !== 'socat TCP-LISTEN:1234,fork UNIX-CONNECT:/var/run/docker.sock').sort((a, b) => a.State > b.State ? -1 : 1);
    });
    
  }

  public isActive(container: Container): boolean {
    return container.State === 'running' ? true : false;
  }

  public stopContainer(container: Container) {
    this.dockerService.stopContainer(container.Id).subscribe(() => {
      container.State = 'stopped';
    });
  }x
}
