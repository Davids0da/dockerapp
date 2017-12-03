import { Port } from './port';

export interface Container {
    Command: string;
    Created: number;
    HostConfig: any;
    Id: string;
    Image: string;
    Ports: Port[];
    State: string;
}