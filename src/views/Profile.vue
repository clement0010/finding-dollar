<template>
  <v-container fluid class="ma-0 pa-0" style="position: absolute; top: 10vh">
    <Spinner v-if="loading || selectLoad" />
    <v-row no-gutters justify="center">
      <v-col cols="8">
        <v-card flat color="transparent" class="rounded-xl" v-if="teamProfile">
          <v-card-title class="justify-center font-weight-bold"
            >Welcome {{ teamProfile.name }}! &#128512;</v-card-title
          >
          <v-card-title v-if="!selectedCharacter" class="justify-center font-weight-bold"
            >Please select a Character.</v-card-title
          >
          <RoleDescription
            v-if="!selectedCharacter"
            @selectCharacter="selectCharacter"
            :managementQuota="managementQuota"
            :softwareQuota="softwareQuota"
            :founderQuota="founderQuota"
            :designerQuota="designerQuota"
          />
          <ScheduleTable
            v-if="selectedCharacter && !scheduled"
            :role="teamProfile.character"
            @selectSchedule="selectSchedule"
          />
          <RoleCard
            v-if="selectedCharacter && scheduled"
            :selectedCharacter="teamProfile.character"
          />
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
import ScheduleTable from '@/components/CharacterDetails/ScheduleTable.vue';
import Spinner from '@/components/Spinner.vue';
import { teamProfile } from '@/composable/store';

export default defineComponent({
  name: 'Profile',
  components: { RoleCard, RoleDescription, ScheduleTable, Spinner },
  setup(_, { root }) {
    const teamId = root.$route.params.id;

    const {
      loading,
      error,
      managementQuota,
      softwareQuota,
      founderQuota,
      designerQuota,
      selectCharacter,
      selectSchedule,
      selectLoad,
    } = useTeam(teamId);

    const selectedCharacter = computed(() => {
      return teamProfile.value?.selectCharacter && teamProfile.value?.character !== 'NA';
    });
    const scheduled = computed(() => {
      return teamProfile.value?.schedule !== 'NA';
    });

    return {
      selectedCharacter,
      selectCharacter,
      selectSchedule,
      selectLoad,
      scheduled,

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
