import { authenticated, authError, authLoading, uid } from '@/composable/store';
import { auth } from '@/common/firestore/client';

import { ref, computed, onMounted } from '@vue/composition-api';
import useSnackbar from './snackbarComposition';

auth.onAuthStateChanged(async (user) => {
  try {
    authLoading.value = true;
    if (!user) {
      authenticated.value = false;
      console.log('Im logged out!');
      return;
    }
    uid.value = user.uid;
    console.log('Auth State: ', user);
    authenticated.value = true;
  } catch (err) {
    console.error(err);
  } finally {
    authLoading.value = false;
  }
});

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function useAuth() {
  const error = ref(false);
  const loading = ref(false);

  const { success, alert } = useSnackbar();

  const signout = async () => {
    try {
      loading.value = true;
      await auth.signOut();
      authenticated.value = false;
      uid.value = '';
      success('Sign out successfully');
    } catch (err) {
      console.error(err);
      error.value = true;
      alert('Error signing out');
    } finally {
      loading.value = false;
    }
  };

  const login = async (email: string, password: string): Promise<string | undefined> => {
    try {
      loading.value = true;
      const { user } = await auth.signInWithEmailAndPassword(email, password);

      authenticated.value = true;
      error.value = false;

      if (!user) {
        throw new Error('Login Error');
      }
      success('Login successfully');
      authError.value = false;

      return user?.uid;
    } catch (err) {
      console.error(err.code);
      if (err.code !== 'auth/wrong-password') {
        error.value = true;
        authenticated.value = false;
        alert('Error login');
        return;
      }
      alert('Wrong Password');
      authError.value = true;
      return err;
    } finally {
      loading.value = false;
    }
  };

  onMounted(() => {
    authError.value = false;
  });

  return {
    error: computed(() => error.value),
    loading: computed(() => loading.value),

    signout,
    login,
  };
}
