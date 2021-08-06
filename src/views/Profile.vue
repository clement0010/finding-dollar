<template>
  <v-container fluid class="ma-0 pa-0" style="position: absolute; top: 15vh">
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
          <RoleDescription v-if="!selectedCharacter" @selectCharacter="selectCharacter" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api';

import useTeam from '@/composable/teamComposition';

import RoleCard from '@/components/DisplayCards/RoleCard.vue';
import RoleDescription from '@/components/DisplayCards/RoleDescriptionCard.vue';
import { teamProfile } from '@/composable/store';

export default defineComponent({
  name: 'Profile',
  components: { RoleCard, RoleDescription },
  setup(_, { root }) {
    const teamId = root.$route.params.id;

    const { loading, error, updateTeamProfile } = useTeam(teamId);

    const selectedCharacter = computed(() => {
      return teamProfile.value?.character !== 'NA';
    });

    const selectCharacter = async (character: string) => {
      await updateTeamProfile({
        character,
      });
    };
    return {
      selectedCharacter,
      selectCharacter,

      teamProfile,
      loading,
      error,
    };
  },
});
</script>
