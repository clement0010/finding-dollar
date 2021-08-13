<template>
  <v-container fluid class="pa-0 ma-0">
    <v-card flat class="scroll pa-5" height="70vh" color="transparent">
      <template slot="progress">
        <v-progress-linear color="accent1" height="5" indeterminate></v-progress-linear>
      </template>
      <v-row justify="space-around" align="center">
        <v-col cols="4" v-for="team in teams" :key="team.uid">
          <v-card height="400px" class="pa-5 text-justify">
            <v-card-title>{{ team.uid }} </v-card-title>
            <v-card-text>
              Name: {{ team.name }}
              <br />
              <br />
              Character: {{ team.character }}
              <br />
              <br />
              Timeslot: {{ parseTimestamp(team.schedule, 'hh:mm a') }}
              <br />
              <br />
              Breakout Room: {{ team.breakoutRoom }}
              <br />
              <br />
              <v-btn
                color="accent1"
                :href="team.templateLink"
                target="_blank"
                class="pa-0"
                :disabled="!team.templateLink"
                >Challenge Link</v-btn
              >
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card height="400px" class="pa-5 text-justify">
            <v-card-title>Quota Watch Table</v-card-title>
            <v-card-text>
              Management Associate: {{ managementQuota }}
              <br />
              <br />
              Founder: {{ founderQuota }}
              <br />
              <br />
              Software Engineer: {{ softwareQuota }}
              <br />
              <br />
              Designer: {{ designerQuota }}
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card height="400px" class="pa-5 text-justify">
            <v-card-title>Team Character Watch List</v-card-title>
            <v-card-text>
              Team that has yet to select a Character ({{ unselectedTeam.length }}):
              {{ unselectedTeam.name }}
              <ul>
                <li v-for="team in unselectedTeam" :key="team.uid">
                  Id: {{ team.uid }} -- Name: {{ team.name }}
                </li>
              </ul>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card height="400px" class="pa-5 text-justify">
            <v-card-title>Breakout Room Watch List</v-card-title>
            <v-card-text>
              Breakout Room 1
              <ul>
                <li v-for="team in breakoutRoom1" :key="team.uid">
                  Id: {{ team.uid }} -- Name: {{ team.name }}
                </li>
              </ul>
              Breakout Room 2
              <ul>
                <li v-for="team in breakoutRoom2" :key="team.uid">
                  Id: {{ team.uid }} -- Name: {{ team.name }}
                </li>
              </ul>
              Breakout Room 3
              <ul>
                <li v-for="team in breakoutRoom3" :key="team.uid">
                  Id: {{ team.uid }} -- Name: {{ team.name }}
                </li>
              </ul>
              Breakout Room 4
              <ul>
                <li v-for="team in breakoutRoom4" :key="team.uid">
                  Id: {{ team.uid }} -- Name: {{ team.name }}
                </li>
              </ul>
              Breakout Room 5
              <ul>
                <li v-for="team in breakoutRoom5" :key="team.uid">
                  Id: {{ team.uid }} -- Name: {{ team.name }}
                </li>
              </ul>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card height="400px" class="pa-5 text-justify">
            <v-card-title>Team Schedule Watch List</v-card-title>
            <v-card-text>
              Team that has yet to select a Schedule ({{ unscheduledTeam.length }}):
              <ul>
                <li v-for="team in unscheduledTeam" :key="team.uid">
                  Id: {{ team.uid }} -- Name: {{ team.name }}
                </li>
              </ul>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card height="400px" class="pa-5 text-justify">
            <v-card-title>System Error Watch List</v-card-title>
            <v-card-text>
              Quota Error?:
              <v-btn :class="{ error: quotaError, accent1: !quotaError }">{{
                quotaRemaining
              }}</v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeMount, onBeforeUnmount } from '@vue/composition-api';

import { getProfileFromDb, parseTimestamp, getCharacterQuotaFromDb } from '@/common/';
import { adminTeams, quota } from '@/composable/store';

export default defineComponent({
  name: 'AdminCard',
  setup() {
    let teardown: () => void;
    let teardown1: () => void;

    onBeforeMount(async () => {
      teardown = await getProfileFromDb();
      teardown1 = await getCharacterQuotaFromDb();
    });

    onBeforeUnmount(() => {
      teardown();
      teardown1();
    });

    const managementQuota = computed(
      () => 2 - adminTeams.value.filter((team) => team.character === 'management').length,
    );
    const designerQuota = computed(
      () => 2 - adminTeams.value.filter((team) => team.character === 'designer').length,
    );
    const founderQuota = computed(
      () => 3 - adminTeams.value.filter((team) => team.character === 'founder').length,
    );
    const softwareQuota = computed(
      () => 3 - adminTeams.value.filter((team) => team.character === 'software').length,
    );
    const unselectedTeam = computed(() =>
      adminTeams.value.filter((team) => team.character === 'NA' && !team.selectCharacter),
    );
    const unscheduledTeam = computed(() =>
      adminTeams.value.filter((team) => team.schedule === 'NA' && team.breakoutRoom === 0),
    );
    const quotaRemaining = computed(() =>
      quota.value.reduce((accum, team) => accum + team.remaining, 0),
    );
    const breakoutRoom1 = computed(() =>
      adminTeams.value.filter((team) => team.breakoutRoom === 1),
    );
    const breakoutRoom2 = computed(() =>
      adminTeams.value.filter((team) => team.breakoutRoom === 2),
    );
    const breakoutRoom3 = computed(() =>
      adminTeams.value.filter((team) => team.breakoutRoom === 3),
    );
    const breakoutRoom4 = computed(() =>
      adminTeams.value.filter((team) => team.breakoutRoom === 4),
    );
    const breakoutRoom5 = computed(() =>
      adminTeams.value.filter((team) => team.breakoutRoom === 5),
    );

    return {
      parseTimestamp,
      teams: computed(() => adminTeams.value.filter((team) => team.uid !== 'admin')),
      managementQuota,
      designerQuota,
      founderQuota,
      softwareQuota,
      unselectedTeam,
      unscheduledTeam,
      quotaRemaining,
      quotaError: computed(() => quotaRemaining.value === unscheduledTeam.value.length),

      breakoutRoom1,
      breakoutRoom2,
      breakoutRoom3,
      breakoutRoom4,
      breakoutRoom5,
    };
  },
});
</script>

<style lang="scss" scoped>
.scroll {
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
