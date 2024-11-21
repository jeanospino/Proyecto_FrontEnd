import { Component } from '@angular/core';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [PanelMenuModule],
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent {
  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [

      {
        label: 'Librarians',
        icon: 'pi pi-fw pi-id-card',
        routerLink: '/librarians'
      },
      {
        label: 'Loans',
        icon: 'pi pi-fw pi-book',
        routerLink: '/loans'
      },
      {
        label: 'Penalties',
        icon: 'pi pi-fw pi-exclamation-triangle',
        routerLink: '/penalties'
      },
      {
        label: 'Resource Types',
        icon: 'pi pi-fw pi-tags',
        routerLink: '/resourceTypes'
      },
      {
        label: 'Resources',
        icon: 'pi pi-fw pi-folder',
        routerLink: '/resources'
      },
      {
        label: 'User Types',
        icon: 'pi pi-fw pi-users',
        routerLink: '/userTypes'
      },
      {
        label: 'Users',
        icon: 'pi pi-fw pi-user',
        routerLink: '/users'
      },
      {
        label: 'Return Records',
        icon: 'pi pi-fw pi-undo',
        routerLink: '/returnRecords'
      }
    ];
  }
}
