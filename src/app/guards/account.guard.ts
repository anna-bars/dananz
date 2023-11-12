import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const accountGuard: CanActivateFn = (route, state) => {
  const  token = localStorage.getItem('token');
  const  router = inject(Router);
  if(token){
    console.log(458);
    router.navigate(['admin/account']);
    return false
  }
  
  return true
};
