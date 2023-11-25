import { Component } from '@angular/core';

@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html',
  styleUrl: './header-top.component.css'
})
export class HeaderTopComponent {

  items:any;
  
  ngOnInit() {
    this.items = [
        { label: 'Home', icon: 'pi pi-fw pi-home',routerLink:'/' },
        { label: 'Register', icon: 'pi pi-fw pi-calendar',routerLink:'/register' },
        { label: 'Safe', icon: 'pi pi-fw pi-pencil',routerLink:'/safe' },
        { label: 'Graphics', icon: 'pi pi-fw pi-file' },
        { label: 'Targets', icon: 'pi pi-fw pi-cog' }
    ];
}

}
