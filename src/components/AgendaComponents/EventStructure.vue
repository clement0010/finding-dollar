<template>
  <v-container fluid>
    <v-expansion-panels accordion class="elevation-5 rounded-lg primary" multiple>
      <v-expansion-panel v-for="item in items" :key="item.role">
        <v-expansion-panel-header>
          {{ item.event }}
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row justify="space-between">
            <v-col cols="10" class="text-justify text-body-2">
              {{ item.content }}
            </v-col>
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'EventStructure',
  setup() {
    const items = [
      {
        event: 'Fireside Chat with MASIS',
        content: `You will be engaged in an exciting 40-minute chat revolving around personal
        finance from a student standpoint. Hear from our esteemed speakers from the Malaysian
        Association in Singapore (MASIS) about their experience as a student in Singapore, as they
        share tips to transition from a student to a working professional. In this session, we will
        get up close and personal with Lee Ji En and Goh Kai Xun to get insights on surviving the x3
        life in Singapore.`,
      },
      {
        event: 'Personal Finance Workshop',
        content: `This workshop will be conducted by a Personal Finance enthusiast, Michelle
          Chin. She has been contributing to the society with her instagram page @her.duit, sharing
          personal finance knowledge with the public besides holding a Head of Digital Marketing at
          Digi-X. Recently, she’s founded Oyen, a start-up focusing on pet insurance.
          <ul>
            <li>Time value of money</li>
            <li>Income Management</li>
            <li>Saving and Investment</li>
          </ul> `,
      },
      {
        event: 'Mystery Challenge',
        content: `This challenge will be a hands-on experience for participants to apply the
        financial literacy knowledge learnt from the previous workshop. You will discuss in a group
        to strategise the investment and saving plans for the scenarios given. You will also need to
        address the financial problem given. At the end of the challenge, your team will present the
        ideas on the slide deck and justify the rationale. `,
      },
    ];
    return {
      items,
    };
  },
});
</script>
