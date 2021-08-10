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
              As young adults, we are all going through the transition to adulthood. Being able to
              manage our finances is the first step to adulting. ICM$ SG: Finding Dollar provides an
              opportunity for you to assess the financial position of different characters and
              provide your input to strategize their personal finance. We hope that you would gain a
              thing or two from this, to better manage your own finances in the future.
            </v-card-text>
            <v-card-text v-if="tab === 1">
              <ol>
                <li>
                  You will receive a character brief prior to the challenge which will include the
                  following key information about the character:
                  <ol style="list-style-type: lower-alpha">
                    <li>short write-up</li>
                    <li>monthly income, expenses and savings</li>
                    <li>financial goals</li>
                  </ol>
                </li>
                <br />
                <li>
                  You will apply the information covered in the personal finance workshop to devise
                  a strategic allocation plan for your character. A detailed breakdown of
                  recommended steps are as follows:
                  <ol style="list-style-type: lower-alpha">
                    <li>
                      Discuss among your team the strategy to
                      <strong>apply the 50/30/20 framework</strong>.
                    </li>
                    <li>
                      You are required to
                      <strong>strategise an investment plan or a saving plan</strong> to achieve the
                      character’s financial goal(s) and make decisions on the given scenarios.
                    </li>
                    <li>
                      Throughout this process, the team should also
                      <strong>prepare for a role-play scenario</strong> with the judges to address
                      the financial issue the character is facing.
                    </li>
                    <li>
                      You will have to work together to come up with a presentation slide deck to
                      <strong>present your strategy</strong> and
                      <strong>justify the rationale</strong>.
                    </li>
                    <li>
                      You will do a <strong>6-minute</strong> presentation, followed by a 5-minute
                      Q&A for this.
                    </li>
                    <li>
                      All team members are highly encouraged to actively participate in the 6-minute
                      presentation.
                    </li>
                  </ol>
                </li>
                <br />
                <li>
                  Gentle reminder:
                  <ol style="list-style-type: lower-alpha">
                    <li>
                      You are encouraged to read the character brief thoroughly before the
                      challenge.
                    </li>
                    <li>
                      Do utilise the slide template provided should you wish to, you may use your
                      preferred template as well.
                    </li>
                    <li>
                      Submissions will be evaluated based on four key aspects --
                      <strong>Analysis</strong> (15%), <strong>Strategy</strong> (40%) and
                      <strong>Creativity</strong> (15%) and
                      <strong>Presentation & Communication</strong> (30%).
                    </li>
                    <li>Do take note that editing rights will be disabled once the time is up.</li>
                  </ol>
                </li>
              </ol>
            </v-card-text>
            <v-card-text v-if="tab === 2">
              <ol>
                <li>
                  <strong>Achieving Financial Goals</strong>
                  <br />
                  <br />
                  You will be given a list of characters and a preview of these characters. You may
                  then choose your favourite character. After selection, you will be given a full
                  character brief containing the Character Overview, Financial Goals, Investment
                  Profile, Monthly Breakdown and Scenarios of your character. You are then required
                  to help your character to strategise an allocation plan to achieve the financial
                  goals. In addition, you will need to make sure that your character is managing the
                  finances carefully before making any financial decisions. Present your ideas and
                  strategy with the slide template provided.
                </li>
                <br />
                <li>
                  <strong>Role Play as the Character</strong>
                  <br />
                  <br />
                  Based on your selection, you will help your character strategise a solution to the
                  financial issue faced. You will communicate with the character role-played by the
                  judges and try to persuade them to reach your desired outcome. Do note that the
                  outcome of the role-play will not affect your primary allocation task. This
                  role-play session will contribute 30% to your total score as a team. You are
                  encouraged to act in the best interest of your character.
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
