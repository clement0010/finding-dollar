import { NavigationGuardNext, Route } from 'vue-router';
import { watch } from '@vue/composition-api';

import { authenticated, authLoading } from '@/composable/store';
import useSnackbar from '@/composable/snackbarComposition';

const authGuard = (to: Route, from: Route, next: NavigationGuardNext): void => {
  const { alert } = useSnackbar();

  const redirect = () => {
    if (authLoading.value) return;

    if (to.meta?.requiresAuth) {
      if (!authenticated.value) {
        alert('You are not logged in!');
        return next({
          path: '/login',
        });
      }
    }

    return next();
  };
  watch(authLoading, () => {
    redirect();
  });

  return redirect();
};

export default authGuard;
