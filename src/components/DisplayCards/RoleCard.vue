<template>
  <v-container fluid class="pa-0 ma-0">
    <v-card class="rounded-xl elevation-3" color="secondary" :loading="loading">
      <template slot="progress">
        <v-progress-linear color="accent1" height="5" indeterminate></v-progress-linear>
      </template>
      <v-tabs
        v-model="tab"
        background-color="transparent"
        color="white"
        centered
        center-active
        dark
        fixed-tabs
        show-arrows
        slider-size="5"
      >
        <v-tabs-slider class="pb-5" color="accent1"></v-tabs-slider>
        <v-tab v-for="item in items" :key="item.tab" class="rounded-xl">
          {{ item.tab }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab" v-if="character">
        <v-tab-item v-for="item in items" :key="item.tab">
          <v-card flat height="50vh" class="pa-5 text-justify scroll">
            <v-row no-gutters justify="space-between" align="center" v-if="tab === 0">
              <v-col sm="2" cols="4">
                <v-img
                  alt="user"
                  :src="character.photoUrl"
                  contain
                  max-width="6rem"
                  max-height="6rem"
                />
              </v-col>
              <v-col sm="5" cols="12" class="pa-0">
                <v-card-title v-if="tab === 0" class="secondary--text font-weight-bold">
                  {{ character.name }}
                </v-card-title>
              </v-col>
              <v-col sm="4" cols="12" :align="$vuetify.breakpoint.smAndUp ? 'right' : 'left'">
                <v-btn color="accent1" :href="templateLink" target="_blank" :disabled="disable">
                  Get Slide Template
                </v-btn>
              </v-col>
            </v-row>
            <v-card-text v-if="tab === 0" v-html="character.biography"></v-card-text>
            <v-card-text v-if="tab === 2" v-html="character.scenario"></v-card-text>
            <DataTable v-if="tab === 1" :data="character.breakdown" />
            <v-container v-if="tab === 3">
              <v-card-text class="text-center"
                >Roleplay Schedule: {{ parseTimestamp(rolePlay, 'h:mm a') }}</v-card-text
              >
              <FlipCountdown :deadline="rolePlayTime" :showDays="false" />
              <v-card-text class="text-center"
                >Submission Deadline: {{ parseTimestamp(submissionTime, 'h:mm a') }}</v-card-text
              >
              <FlipCountdown :deadline="submission" :showDays="false" />
            </v-container>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref } from '@vue/composition-api';

import useCharacter from '@/composable/characterComposable';
import { submissionTime } from '@/composable/store';
import { parseTimestamp } from '@/common/';

import DataTable from '@/components/CharacterDetails/DataTable.vue';
import FlipCountdown from 'vue2-flip-countdown';

export default defineComponent({
  name: 'RoleCard',
  components: {
    DataTable,
    FlipCountdown,
  },
  props: {
    selectedCharacter: {
      type: String,
      required: true,
    },
    rolePlay: {
      type: String,
      required: true,
    },
    templateLink: {
      type: String,
    },
    disable: {
      type: Boolean,
      default: () => {
        return true;
      },
    },
  },
  setup(props) {
    const tab = ref(null);
    const { loading, character } = useCharacter(props.selectedCharacter);

    const items = reactive([
      {
        tab: 'Biography',
      },
      { tab: 'Monthly Breakdown' },
      {
        tab: 'Role-play Scenario',
      },
      {
        tab: 'Time Keeper',
      },
    ]);

    const rolePlayTime = computed(() => parseTimestamp(props.rolePlay, 'YYYY-MM-DD HH:mm:ss'));
    const submission = computed(() => parseTimestamp(submissionTime.value, 'YYYY-MM-DD HH:mm:ss'));
    return {
      tab,
      items,
      character,
      loading,
      rolePlayTime,
      submission,
      submissionTime: computed(() => submissionTime.value),
      parseTimestamp,
    };
  },
});
</script>

<style lang="scss" scoped>
.scroll {
  overflow-y: auto;
}
</style>
