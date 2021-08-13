<template>
  <v-container fluid>
    <v-expansion-panels accordion class="elevation-5 rounded-lg primary" multiple>
      <v-expansion-panel v-for="(item, index) in items" :key="item.event">
        <v-expansion-panel-header>
          {{ item.event }}
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row justify="space-between">
            <v-col cols="12" class="text-justify text-body-2">
              <div v-html="item.content"></div>
              <v-row
                no-gutters
                class="mt-5"
                justify="space-around"
                style="min-height: 7vw"
                v-if="index === 0 || index === 1"
              >
                <v-col
                  cols="2"
                  style="position: relative"
                  v-for="card in index === 0 ? cards : cards1"
                  :key="card.title"
                >
                  <v-img :src="card.src" max-height="9rem" contain class="photo" />
                </v-col>
              </v-row>
              <v-row justify="space-around" v-if="index === 0 || index === 1">
                <v-col
                  v-for="card in index === 0 ? cards : cards1"
                  :key="card.title"
                  class="text-center font-weight-bold secondary--text"
                >
                  <p>{{ card.title }}</p>
                  <v-divider class="pt-1 mb-2 mx-auto accent1" style="max-width: 35px" />
                  <v-btn text fab small :href="card.linkedIn" target="_blank">
                    <v-icon color="secondary"> mdi-linkedin </v-icon>
                  </v-btn>
                </v-col>
              </v-row>
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
          <br />
          <br />
          <ul>
            <li>Time value of money</li>
            <li>Income Management</li>
            <li>Saving and Investment</li>
          </ul> `,
      },
      {
        event: 'Challenge',
        content: `This challenge will be a hands-on experience for participants to apply the
        financial literacy knowledge learnt from the previous workshop. You will discuss in a group
        to strategise the investment and saving plans for the scenarios given. You will also need to
        address the financial problem given. At the end of the challenge, your team will present the
        ideas on the slide deck and justify the rationale. See the Challenge page for more information.`,
      },
    ];

    const cards = [
      {
        title: 'Lee Ji En',
        src: 'https://firebasestorage.googleapis.com/v0/b/finding-dollar-dev.appspot.com/o/JiEn.jpg?alt=media&token=905d6e37-1fdf-4dd1-b1f9-c2ea1e0523dd',
        linkedIn: 'https://www.linkedin.com/in/jienlee/',
      },
      {
        title: 'Goh Kai Xun',
        src: 'https://firebasestorage.googleapis.com/v0/b/finding-dollar-dev.appspot.com/o/kaixun.jpg?alt=media&token=a7a69606-274f-42cf-bcd7-40772216b3bf',
        linkedIn: 'https://www.linkedin.com/in/kai-xun-goh-872a9567/',
      },
    ];
    const cards1 = [
      {
        title: 'Michelle Chin',
        src: 'https://firebasestorage.googleapis.com/v0/b/finding-dollar-dev.appspot.com/o/michelle.png?alt=media&token=1987bbc7-fb04-4da9-b20e-6fd6a235c715',
        linkedIn: 'https://www.linkedin.com/in/michellecsw/',
      },
    ];
    return {
      items,
      cards,
      cards1,
    };
  },
});
</script>
