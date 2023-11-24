import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-header-top></app-header-top><router-outlet></router-outlet><app-footer-bottom></app-footer-bottom>`,
 // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'costControl';
  items:any;
  date: Date[] | undefined;

  ngOnInit() {
    this.items = [
        { label: 'Home', icon: 'pi pi-fw pi-home' },
        { label: 'Calendar', icon: 'pi pi-fw pi-calendar' },
        { label: 'Edit', icon: 'pi pi-fw pi-pencil' },
        { label: 'Documentation', icon: 'pi pi-fw pi-file' },
        { label: 'Settings', icon: 'pi pi-fw pi-cog' }
    ];
}
}
