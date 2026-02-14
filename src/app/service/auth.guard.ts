import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);

  const loginData = localStorage.getItem('loginUser');

  // If localStorage has login info → allow access
  if (loginData) {
    return true;
  }

  // Otherwise redirect to login
  return router.createUrlTree(['/login']);
};