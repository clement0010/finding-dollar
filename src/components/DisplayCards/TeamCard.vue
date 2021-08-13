<template>
  <v-container fluid class="pa-0 mt-10">
    <v-row no-gutters justify="space-between">
      <v-col cols="12" md="11">
        <v-row no-gutters justify="space-around" class="accent2" style="min-height: 7vw">
          <v-col cols="2" style="position: relative" v-for="card in cards" :key="card.title">
            <v-img :src="card.src" max-height="9rem" contain class="photo" />
          </v-col>
        </v-row>
        <v-row no-gutters justify="space-around" class="mt-5">
          <v-col
            cols="2"
            v-for="card in cards"
            :key="card.title"
            align="center"
            class="text-center font-weight-bold secondary--text"
          >
            <p :class="{ 'text-caption': $vuetify.breakpoint.smAndDown }">{{ card.title }}</p>
          </v-col>
        </v-row>
        <v-row justify="space-around" no-gutters align="center">
          <v-col
            cols="2"
            align="center"
            v-for="card in cards"
            :key="card.title"
            class="text-center font-weight-bold secondary--text"
          >
            <v-container class="pa-0 accent1" style="max-width: 35px; height: 5px" />
            <v-btn text fab small :href="card.linkedIn" target="_blank">
              <v-icon color="secondary"> mdi-linkedin </v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="1" align="center" class="text-center">
        <v-btn text fab small @click="current++">
          <v-icon v-if="$vuetify.breakpoint.smAndUp">mdi-chevron-up</v-icon>
          <v-icon v-else>mdi-chevron-left</v-icon>
        </v-btn>

        <br v-if="$vuetify.breakpoint.smAndUp" />
        <v-btn text fab small @click="current--">
          <v-icon v-if="$vuetify.breakpoint.smAndUp">mdi-chevron-down</v-icon>
          <v-icon v-else>mdi-chevron-right</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  name: 'TeamCard',
  setup() {
    const cards = [
      {
        title: 'Chong Yu Ze',
        src: 'https://firebasestorage.googleapis.com/v0/b/finding-dollar-dev.appspot.com/o/YuZe.png?alt=media&token=f2e9cfc3-24ab-42bd-99e4-0cac2f74fdd0',
        linkedIn: 'https://www.linkedin.com/in/chong-yu-ze-0404/',
      },
      {
        title: 'Clement Tee',
        src: 'https://firebasestorage.googleapis.com/v0/b/finding-dollar-dev.appspot.com/o/Clement.png?alt=media&token=1ec65069-90ff-43d3-8a6a-b6cca9fc6b28',
        linkedIn: 'https://www.linkedin.com/in/clement0010/',
      },
      {
        title: 'Max Han',
        src: 'https://firebasestorage.googleapis.com/v0/b/finding-dollar-dev.appspot.com/o/Max.png?alt=media&token=331bf2fc-7d41-49b6-9905-4dec0c242135',
        linkedIn: 'https://www.linkedin.com/in/maxhankaiding/',
      },
      {
        title: 'Michael Ang',
        src: 'https://firebasestorage.googleapis.com/v0/b/finding-dollar-dev.appspot.com/o/Michael.png?alt=media&token=4009ecc6-39fa-4d41-a864-e8c27b80be69',
        linkedIn: 'https://www.linkedin.com/in/michael-ang-507195162/',
      },
    ];
    const cards2 = [
      {
        title: 'Ng Kha Yun',
        src: 'https://firebasestorage.googleapis.com/v0/b/finding-dollar-dev.appspot.com/o/KhaYun.png?alt=media&token=a8a87f17-6fe7-440f-8a6b-a44edbc33011',
        linkedIn: 'https://www.linkedin.com/in/khayunng/',
      },
      {
        title: 'Ong De Wei',
        src: 'https://firebasestorage.googleapis.com/v0/b/finding-dollar-dev.appspot.com/o/DeWei.png?alt=media&token=73e0b3fc-760d-4900-88d6-7ee9f8dc72b6',
        linkedIn: 'https://www.linkedin.com/in/ongdewei/',
      },
      {
        title: 'Prerthan',
        src: 'https://firebasestorage.googleapis.com/v0/b/finding-dollar-dev.appspot.com/o/Prerthan.png?alt=media&token=d9b4d4a6-c52c-4112-8175-e8a10d3ab6ae',
        linkedIn: 'https://www.linkedin.com/in/prerthan-munireternam-9815a21ab/',
      },
      {
        title: 'Yew Jia Ren',
        src: 'https://firebasestorage.googleapis.com/v0/b/finding-dollar-dev.appspot.com/o/JiaRen.png?alt=media&token=17be2810-9272-4b5d-ab84-91505d8e66e5',
        linkedIn: 'https://www.linkedin.com/in/jiaren-yew/',
      },
    ];

    const current = ref(0);

    const displayCards = computed(() => {
      if (current.value % 2 === 0) {
        return cards;
      }

      return cards2;
    });

    return {
      cards: displayCards,
      current,
    };
  },
});
</script>

<style lang="scss" scoped>
.photo {
  position: absolute;
  right: 0;
  bottom: 0;
}
</style>
