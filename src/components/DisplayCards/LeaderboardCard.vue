<template>
  <v-container fluid class="pa-0 mt-10">
    <v-card class="elevation-2 rounded-lg" color="primary" max-width="70vw">
      <v-list class="pa-0 ma-0 rounded-lg">
        <v-list-item-group v-model="selected" mandatory active-class="secondary white--text">
          <template v-for="(team, index) in leaderboard">
            <v-list-item :key="team.name" class="pa-3">
              <template v-slot:default="{ active }">
                <v-list-item-avatar>
                  <v-img
                    src="https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png"
                    width="20px"
                    contain
                  ></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title :class="{ 'secondary--text': !active }">{{
                    team.name
                  }}</v-list-item-title>
                  <v-list-item-subtitle :class="{ 'white--text': active }" class="text-caption"
                    >{{ team.score }} points</v-list-item-subtitle
                  >
                </v-list-item-content>
              </template>
            </v-list-item>
            <v-divider v-if="index < leaderboard.length - 1" :key="index"></v-divider>
          </template>
        </v-list-item-group>
      </v-list>
    </v-card>
    <v-footer color="transparent" class="mt-5 justify-end">
      <v-btn text fab small class="mr-3" @click="current--" :disabled="current === 0">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-btn text fab small @click="current++" :disabled="current === 1">
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </v-footer>
  </v-container>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref } from '@vue/composition-api';

export default defineComponent({
  name: 'LeaderboardCard',
  setup() {
    const leaderboard = reactive([
      {
        name: 'Team 1',
        score: 1007,
      },
      {
        name: 'Team 2',
        score: 1001,
      },
      {
        name: 'Team 3',
        score: 1002,
      },
      {
        name: 'Team 4',
        score: 1005,
      },
      {
        name: 'Team 5',
        score: 998,
      },
      {
        name: 'Team 6',
        score: 999,
      },
    ]);
    const selected = ref();
    const current = ref(0);

    const displayLeaderboard = computed(() => {
      const sortedLeaderboard = leaderboard.sort((team1, team2) => {
        if (team1.score < team2.score) return 1;
        if (team1.score > team2.score) return -1;
        return 0;
      });

      if (current.value === 0) return sortedLeaderboard.slice(0, 5);
      if (current.value === 1) return sortedLeaderboard.slice(5);
    });

    return {
      leaderboard: displayLeaderboard,
      selected,
      current,
    };
  },
});
</script>

<style scoped>
.photo {
  position: absolute;
  right: 0;
  bottom: 0;
}
</style>
