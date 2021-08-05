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
        content: `It will be a 40-minutes chat with a speaker from MASIS. The chat will revolve
        around personal finance as a student in Singapore and also the speaker’s experience when
        transitioning from a student to a working professional in Singapore. The participants will
        be able to get deeper insights on the ways to survive financially in Singapore.`,
      },
      {
        event: 'Personal Finance Workshop',
        content: `It will be conducted by an ICMS alumni from Alumni Network Committee (ANC).
          The topic of the workshop includes:
          <ul>
            <li>Time value of money</li>
            <li>Income Management</li>
            <li>Saving and Investment</li>
          </ul> `,
      },
      {
        event: 'Mystery Challenge',
        content: `This challenge will be a hands-on experience for participants to apply the
        financial literacy knowledge learnt from the previous workshop.They will discuss in a group
        to strategise the investment and saving plans for the scenarios given.They also need to
        address the financial problem given. At the end of the challenge, participants will present
        the ideas on the slide deck and justify the rationale.`,
      },
    ];
    return {
      items,
    };
  },
});
</script>
