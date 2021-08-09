<template>
  <v-container fluid class="ma-0 pa-0" style="position: absolute; top: 15vh">
    <Spinner v-if="loading || selectLoad" />
    <v-row no-gutters justify="center">
      <v-col cols="8">
        <v-card flat color="transparent" class="rounded-xl" v-if="teamProfile">
          <template slot="progress">
            <v-progress-linear color="accent1" height="5" indeterminate></v-progress-linear>
          </template>

          <v-card-title v-if="!selectedCharacter" class="justify-center font-weight-bold"
            >Please select a Character.</v-card-title
          >
          <RoleCard v-if="selectedCharacter" :selectedCharacter="teamProfile.character" />
          <RoleDescription
            v-if="!selectedCharacter"
            @selectCharacter="selectCharacter"
            :managementQuota="managementQuota"
            :softwareQuota="softwareQuota"
            :founderQuota="founderQuota"
            :designerQuota="designerQuota"
          />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from '@vue/composition-api';

import useTeam from '@/composable/teamComposition';

import RoleCard from '@/components/DisplayCards/RoleCard.vue';
import RoleDescription from '@/components/DisplayCards/RoleDescriptionCard.vue';
import Spinner from '@/components/Spinner.vue';
import { teamProfile } from '@/composable/store';
import { selectCharacterHttp } from '@/common/http';
import { getToken } from '@/composable/authComposition';
import { CharacterType } from '@/common/firestore/type';
import useSnackbar from '@/composable/snackbarComposition';

export default defineComponent({
  name: 'Profile',
  components: { RoleCard, RoleDescription, Spinner },
  setup(_, { root }) {
    const teamId = root.$route.params.id;

    const { loading, error, managementQuota, softwareQuota, founderQuota, designerQuota } =
      useTeam(teamId);
    const { success, alert } = useSnackbar();

    const selectedCharacter = computed(() => {
      return teamProfile.value?.selectCharacter;
    });

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
        console.error(err);
      } finally {
        selectLoad.value = false;
      }
    };
    return {
      selectedCharacter,
      selectCharacter,
      selectLoad,

      teamProfile,
      loading,
      error,
      managementQuota,
      softwareQuota,
      founderQuota,
      designerQuota,
    };
  },
});
</script>
