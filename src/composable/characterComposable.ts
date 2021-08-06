import { getCharacterFromDb } from '@/common/firestore/teamDb';
import { Character } from '@/common/firestore/type';
import { computed, onBeforeMount, ref } from '@vue/composition-api';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function useCharacter(character: string) {
  const loading = ref(false);
  const error = ref(false);

  const characterData = ref<Character>();

  const fetchCharacterProfile = async () => {
    try {
      loading.value = true;
      characterData.value = await getCharacterFromDb(character);
      error.value = false;
    } catch (err) {
      console.error(err);
      error.value = true;
    } finally {
      loading.value = false;
    }
  };

  onBeforeMount(async () => {
    await fetchCharacterProfile();
  });

  return {
    fetchCharacterProfile,

    loading: computed(() => loading.value),
    error: computed(() => error.value),
    character: computed(() => characterData.value),
  };
}
