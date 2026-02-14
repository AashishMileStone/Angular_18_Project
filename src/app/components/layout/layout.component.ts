import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { DepartmentService } from '../../service/department.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FormsModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})

export class LayoutComponent {
  selectedRole: string = '';
  router = inject(Router);
  loggedUserData: any;

  constructor(private deptService: DepartmentService) {}

  // logoff() {
  //   sessionStorage.removeItem('loginUser');
  //   this.router.navigateByUrl('login')
  // }

  logoff() {
    localStorage.removeItem('loginUser');
    sessionStorage.removeItem('sessionActive');
    this.router.navigateByUrl('/login');
  }


  onRoleChnage(role: string) {
    this.deptService.onRoleChange$.next(role)
    this.deptService.role$.next(role)
  }

  ngOnInit() {
    // increment open tab count
    const openTabs = Number(localStorage.getItem('openTabs') || '0');
    localStorage.setItem('openTabs', (openTabs + 1).toString());

    // mark this tab as active in sessionStorage
    sessionStorage.setItem('tabActive', 'true');

    // when tab is closed
    window.addEventListener('beforeunload', () => {
      const openTabsNow = Number(localStorage.getItem('openTabs') || '1') - 1;
      if (openTabsNow <= 0) {
        // last tab closed → remove login
        localStorage.removeItem('loginUser');
        localStorage.removeItem('openTabs');
      } else {
        localStorage.setItem('openTabs', openTabsNow.toString());
      }
    });
  }


}
