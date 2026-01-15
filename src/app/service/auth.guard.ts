import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { environment } from '../../environments/environment';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const loggedData = localStorage.getItem('loginUser');
    if(loggedData != null) {
      return true;
    }
    else{
      router.navigateByUrl('login')
      return false;
    }

  // return true;
};
