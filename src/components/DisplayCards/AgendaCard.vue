<template>
  <v-container fluid class="pa-0 ma-0">
    <v-card class="rounded-xl elevation-3" color="secondary">
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

      <v-tabs-items v-model="tab">
        <v-tab-item v-for="item in items" :key="item.tab">
          <v-card flat height="50vh" class="pa-5 text-justify scroll">
            <!-- Preface -->
            <v-card-text v-if="tab === 0">
              Dear participant, <br />
              <br />

              Greetings! Welcome to ICMS $G: Finding Dollar, organised by the International Council
              of Malaysian Scholars and Associates (ICMS). To assist you in your preparation for our
              upcoming event, we have prepared an information pack for your reference.
              <br />
              <br />
              The event will begin at <strong>9:00 a.m. (SGT)</strong> on
              <strong>14 August 2021, Saturday</strong>. However, you are encouraged to be on the
              call by <strong>8:50 a.m. (SGT)</strong>, 10 minutes before the event commences.
              <br />
              <br />
              Please take note that by attending the talk, you have consented to being recorded
              throughout the entire period of the event. The recording might be used by ICMS for
              publicity purposes.
              <br />
              <br />
              The dress code for the event is business casual. Do read through this info pack
              thoroughly as it contains the essential information you would need to excel on the
              event day. Enjoy reading and we look forward to meeting you soon!
            </v-card-text>
            <!-- Structure -->
            <EventStructure v-if="tab === 1" />
            <!-- Itinerary -->
            <Itinerary v-if="tab === 2" />
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';

import EventStructure from '@/components/AgendaComponents/EventStructure.vue';
import Itinerary from '@/components/AgendaComponents/Itinerary.vue';

export default defineComponent({
  name: 'AgendaCard',
  components: { EventStructure, Itinerary },
  setup() {
    const tab = ref(null);
    const items = [{ tab: 'Preface' }, { tab: 'Structure' }, { tab: 'Itinerary' }];
    return {
      tab,
      items,
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
