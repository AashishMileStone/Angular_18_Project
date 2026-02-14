import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);

  const loginData = localStorage.getItem('loginUser');
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  // If localStorage has login info → allow access
  // if (loginData) {
  //   return true;
  // }

  if (isLoggedIn === 'true') {
    return true;
  }

  // Otherwise redirect to login
  return router.createUrlTree(['/login']);
};


// export const authGuard: CanActivateFn = (): boolean | import('@angular/router').UrlTree => {
//   const router = inject(Router);

//   const isLoggedIn = localStorage.getItem('isLoggedIn');

//   if (isLoggedIn === 'true') {
//     return true;
//   } else {
//     return router.createUrlTree(['/login']);
//   }
// };