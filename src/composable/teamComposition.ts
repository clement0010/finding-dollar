import {
  findQuotaRemaining,
  getGlobalState,
  selectCharacterHttp,
  selectScheduleHttp,
} from '@/common';
import {
  getCharacterQuotaFromDb,
  getTeamProfileFromDb,
  updateTeamProfileFromDb,
} from '@/common/firestore/teamDb';
import { CharacterType, SchedulePayload } from '@/common/firestore/type';
import { computed, onBeforeMount, ref, onBeforeUnmount } from '@vue/composition-api';
import { getToken } from './authComposition';
import useSnackbar from './snackbarComposition';
import { teamProfile, viewCharacter, viewTemplate } from './store';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function useTeam(uid: string) {
  const loading = ref(false);
  const error = ref(false);

  const { alert, success } = useSnackbar();

  let teardown1: () => void;
  let teardown2: () => void;
  let teardown3: () => void;

  const fetchTeamProfile = async () => {
    try {
      loading.value = true;
      teardown1 = await getTeamProfileFromDb(uid);
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

  const getCharacterQuota = async (): Promise<void> => {
    try {
      loading.value = true;
      teardown2 = await getCharacterQuotaFromDb();
      error.value = false;
    } catch (err) {
      console.error(err);
      error.value = true;
    } finally {
      loading.value = false;
    }
  };

  const selectLoad = ref(false);
  const selectCharacter = async (character: CharacterType) => {
    selectLoad.value = true;
    try {
      const token = await getToken();
      if (!token) {
        console.log('No Token available');
        return;
      }

      const result = await selectCharacterHttp(token, character);
      if (result === 'Not eligible') {
        alert('Quota Full');
        return;
      }
      success('Successfully selected the character!');
    } catch (err) {
      alert('Oh no! Error selecting character!');
      console.error(err);
    } finally {
      selectLoad.value = false;
    }
  };

  const selectSchedule = async (payload: SchedulePayload) => {
    selectLoad.value = true;
    try {
      const token = await getToken();
      if (!token) {
        console.log('No Token available');
        return;
      }
      const { id, role } = payload;
      const result = await selectScheduleHttp(token, id, role);
      if (result === 'Not eligible') {
        alert('Quota Full');
        return;
      }

      success('Successfully selected the schedule!');
    } catch (err) {
      alert('Oh no! Error selecting schedule!');
      console.error(err);
    } finally {
      selectLoad.value = false;
    }
  };

  onBeforeMount(async () => {
    await fetchTeamProfile();
    await getCharacterQuota();
    teardown3 = await getGlobalState();
  });

  onBeforeUnmount(() => {
    teardown1();
    teardown2();
    teardown3();
  });

  return {
    fetchTeamProfile,
    updateTeamProfile,
    getCharacterQuota,

    designerQuota: computed(() => findQuotaRemaining('designer')),
    founderQuota: computed(() => findQuotaRemaining('founder')),
    managementQuota: computed(() => findQuotaRemaining('management')),
    softwareQuota: computed(() => findQuotaRemaining('software')),

    loading: computed(() => loading.value),
    error: computed(() => error.value),
    teamProfile: computed(() => teamProfile.value),

    selectCharacter,
    selectSchedule,
    selectLoad: computed(() => selectLoad.value),
    viewCharacter: computed(() => viewCharacter.value),
    viewTemplate: computed(() => viewTemplate.value),
  };
}
