import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AppwriteService } from './services/appwrite.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Transcript This';

    items: MenuItem[] = [];
    /**
     *
     */
    constructor(private appwriteService: AppwriteService) {
        appwriteService.setupSDK();

    }
    ngOnInit() {

        this.items = [
            {
                label: "Home",
                icon: "pi pi-home",
                routerLink: ["home"]
            },
            {
                label: "Video",
                icon: "pi pi-video",
                routerLink: ["video"]
            },
            {
                label: "Podcast",
                icon: "pi pi-megaphone",
                disabled: true
            },
            {
                label: "About",
                routerLink: ["about"]
                
            }
            /*           {
                          label: 'File',
                          items: [{
                                  label: 'New', 
                                  icon: 'pi pi-fw pi-plus',
                                  items: [
                                      {label: 'Project'},
                                      {label: 'Other'},
                                  ]
                              },
                              {label: 'Open'},
                              {label: 'Quit'}
                          ]
                      },
                      {
                          label: 'Edit',
                          icon: 'pi pi-fw pi-pencil',
                          items: [
                              {label: 'Delete', icon: 'pi pi-fw pi-trash'},
                              {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
                          ]
                      } */
        ];
    }
}
