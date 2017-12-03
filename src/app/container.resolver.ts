import { Injectable } from "@angular/core";
import { Container } from "./models/container";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { DockerService } from "./docker.service";

import * as Rx from 'rxjs/Rx';

@Injectable()
export class ContainerResolver implements Resolve<Container> {

    constructor(private dockerService: DockerService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Container | Rx.Observable<Container> | Promise<Container> {
        return new Promise<Container>((resolve, reject) => {
            this.dockerService.getContainers().subscribe(containers => {
                const container = containers.find(c => c.Id === route.params.id);
                if (container) {
                    resolve(container);
                } else {
                    reject(`There is no container with id ${route.params.id}`);
                    this.router.navigateByUrl('/');
                }
            }, () => {
                reject('Cannot retrieve the list of containers!!!')
            });
        });
    }

}