import { getTeamProfileFromDb, updateTeamProfileFromDb } from '@/common/firestore/teamDb';
import { computed, onBeforeMount, ref } from '@vue/composition-api';
import useSnackbar from './snackbarComposition';
import { teamProfile } from './store';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function useTeam(uid: string) {
  const loading = ref(false);
  const error = ref(false);

  const { alert, success } = useSnackbar();

  const fetchTeamProfile = async () => {
    try {
      loading.value = true;
      teamProfile.value = await getTeamProfileFromDb(uid);
      error.value = false;
    } catch (err) {
      console.error(err);
      error.value = true;
    } finally {
      loading.value = false;
    }
  };

  const updateTeamProfile = async (newData: Record<string, unknown>) => {
    try {
      if (!teamProfile.value) {
        console.log('No profile to edit');
        return;
      }
      teamProfile.value = {
        ...teamProfile.value,
        ...newData,
      };
      await updateTeamProfileFromDb(uid, newData);
      success('You have chosen your character successfully!');
      return;
    } catch (err) {
      alert('Oh No! Unable to select a character! Please contact your facilitator.');
      throw new Error(err);
    }
  };

  onBeforeMount(async () => {
    await fetchTeamProfile();
  });

  return {
    fetchTeamProfile,
    updateTeamProfile,

    loading: computed(() => loading.value),
    error: computed(() => error.value),
    teamProfile: computed(() => teamProfile.value),
  };
}
