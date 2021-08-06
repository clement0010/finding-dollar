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
            <!-- Task -->
            <v-card-text v-if="tab === 0">
              As a freshman, undergraduate or graduate, we’re in a transition towards adulting, it
              is always very crucial to at least think about and manage your personal finance as
              soon as you can. Hence, you are required to assess your character’s financial position
              and give them suggestions on how to improve to safeguard their personal finances in
              the future.
            </v-card-text>
            <v-card-text v-if="tab === 1">
              <ol>
                <li>
                  You will receive your character brief before the challenge. This character brief
                  contains important information such as his/her income and expenses, savings and
                  investments, and his/her financial goals.
                </li>
                <br />
                <li>
                  You will need to apply the knowledge from the workshop as follow:
                  <ol style="list-style-type: lower-alpha">
                    <li>
                      Discuss your strategy on how to
                      <strong>apply the 50/30/20 framework</strong> for this challenge.
                    </li>
                    <li>
                      You are required to <strong>strategise investment or saving plans</strong> to
                      achieve the character’s financial goal(s) and make decisions on the given
                      scenarios.
                    </li>
                    <li>
                      Throughout this process, the team should
                      <strong>prepare for a role-play scenario</strong> with our judges to address
                      one financial problem.
                    </li>
                    <li>
                      You will have to work together to come up with a presentation slide deck to
                      <strong>present your strategy</strong> and
                      <strong>justify the rationale</strong>.
                    </li>
                  </ol>
                </li>
                <br />
                <li>
                  You are encouraged to read the character brief thoroughly before the challenge.
                </li>
                <br />
                <li>
                  You are required to complete the task using the slide deck template provided and
                  do a <strong>6 minutes presentation</strong>, followed by
                  <strong>5 minutes of Q&A</strong>.
                </li>
                <br />
                <li>
                  Submissions will be evaluated based on four key aspects --
                  <strong>Analysis</strong> (15%), <strong>Strategy</strong> (40%) and
                  <strong>Creativity</strong> (15%) and
                  <strong>Presentation & Communication</strong> (30%).
                </li>
                <br />
                <li>Do take note editing rights will be disabled once the time is up.</li>
              </ol>
            </v-card-text>
            <v-card-text v-if="tab === 2">
              <ol>
                <li>
                  <strong>Achieving Financial Goals</strong>
                  <br />
                  <br />
                  From the list of the characters given, choose your favourite character. For each
                  of the characters, his/her Character Overview, Financial Goals, Investment
                  Profile, Monthly Breakdown and Scenarios are given. You are required to help the
                  character to strategise his/her investment plans to achieve his/her financial
                  goals. In addition to that, you’ll need to make sure that the character is
                  managing his/her finances thoroughly before making any financial decisions.
                  Present your ideas and strategy on the slide deck given.
                </li>
                <br />
                <li>
                  <strong>Role Play as the Character</strong>
                  <br />
                  <br />
                  Based on your selection, you are required to help your character strategise a
                  solution to the scenario given. You will be required to solve one of the financial
                  problems given.
                </li>
              </ol>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  name: 'ChallengeCard',
  setup() {
    const tab = ref(null);
    const items = [{ tab: 'Task' }, { tab: 'Instructions' }, { tab: 'Objectives' }];
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
