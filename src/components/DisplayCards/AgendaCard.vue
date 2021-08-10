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
              The dress code for the event is business casual. Do read this info pack thoroughly as
              it contains the information you need to excel on event day. Enjoy reading and we look
              forward to meeting you soon!
            </v-card-text>
            <!-- Structure -->
            <v-card-text v-if="tab === 1">
              ICM$ SG: Finding Dollar is the Singapore Chapter’s Flagship event that is centred
              around personal finance. It serves as a platform to prepare you in navigating the
              financial aspect of university life. We hope that you will gain relevant
              finance-related skill sets through these series of sessions:
              <br />
              <ul>
                <li>Fireside Chat with the MASIS</li>
                <li>Personal Finance workshop conducted by Michelle Chin</li>
                <li>Hands-on Challenge for participants to apply what you have learnt</li>
              </ul>
            </v-card-text>
            <EventStructure v-if="tab === 1" />
            <!-- Itinerary -->
            <Itinerary v-if="tab === 2" />
            <!-- General Rules -->
            <v-card-text v-if="tab === 3">
              <ul>
                <li>
                  Please ensure that you are using a <strong>laptop or PC</strong> for the whole
                  duration of the event for an optimal experience.
                </li>
                <li>Please prepare a pair of <strong>earphones</strong> for this event.</li>
                <li>
                  We <strong>strongly encourage you to turn on the webcam</strong> for better
                  engagement. Do notify us beforehand if there are any external circumstances which
                  may prevent you from doing so, or if you do not have that function.
                </li>
                <li>
                  Please keep your <strong>microphones muted</strong> when others are speaking. If
                  possible, position yourself in a quiet room, free of distractions.
                </li>
                <li>We strongly advise you to be <strong>punctual</strong> to the event.</li>

                <li>Recordings of the event are <strong>strictly prohibited</strong>.</li>
                <li>
                  Please maintain <strong>professionalism</strong> and be
                  <strong>considerate</strong> to other attendees.
                </li>
                <li>Do <strong>utilise the Zoom Chat for Q&A</strong> whenever necessary.</li>
                <li>
                  Please display your full name as per registered when joining the Zoom call,
                  <strong>with your educational institution in front of your name</strong>. (i.e.,
                  NUS - Clement Tee, NTU - Chong Yu Ze)
                </li>
              </ul>
            </v-card-text>
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
    const items = [
      { tab: 'Preface' },
      { tab: 'Structure' },
      { tab: 'Itinerary' },
      { tab: 'General Rules' },
    ];
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
