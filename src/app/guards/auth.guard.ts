import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const platformId: Object = inject(PLATFORM_ID);

  if(isPlatformBrowser(platformId)) {
    return true;
  } 

  router.navigate(['/tasker/login']);
  return false;
};
