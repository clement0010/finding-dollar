<template>
  <v-container fluid class="pa-0 mt-10">
    <v-row no-gutters justify="space-between">
      <v-col cols="11">
        <v-row no-gutters justify="space-around" class="accent2" style="min-height: 7vw">
          <v-col cols="2" style="position: relative" v-for="card in cards" :key="card.title">
            <v-img :src="card.src" max-height="25rem" contain class="photo" />
          </v-col>
        </v-row>
        <v-row justify="space-around">
          <v-col
            cols="2"
            v-for="card in cards"
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
      <v-col align-self="center" class="text-center">
        <v-btn text fab small @click="current++">
          <v-icon>mdi-chevron-up</v-icon>
        </v-btn>

        <br />
        <v-btn text fab small @click="current--">
          <v-icon>mdi-chevron-down</v-icon>
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
        src: 'https://firebasestorage.googleapis.com/v0/b/finding-dollar-dev.appspot.com/o/KhaYun.png?alt=media&token=a8a87f17-6fe7-440f-8a6b-a44edbc33011',
        linkedIn: 'https://www.linkedin.com/in/khayunng/',
      },
      {
        title: 'Clement Tee',
        src: 'https://firebasestorage.googleapis.com/v0/b/finding-dollar-dev.appspot.com/o/KhaYun.png?alt=media&token=a8a87f17-6fe7-440f-8a6b-a44edbc33011',
        linkedIn: 'https://www.linkedin.com/in/khayunng/',
      },
      {
        title: 'Max Han',
        src: 'https://firebasestorage.googleapis.com/v0/b/finding-dollar-dev.appspot.com/o/KhaYun.png?alt=media&token=a8a87f17-6fe7-440f-8a6b-a44edbc33011',
        linkedIn: 'https://www.linkedin.com/in/khayunng/',
      },
      {
        title: 'Michael Ang',
        src: 'https://firebasestorage.googleapis.com/v0/b/finding-dollar-dev.appspot.com/o/KhaYun.png?alt=media&token=a8a87f17-6fe7-440f-8a6b-a44edbc33011',
        linkedIn: 'https://www.linkedin.com/in/khayunng/',
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
        src: 'https://firebasestorage.googleapis.com/v0/b/finding-dollar-dev.appspot.com/o/KhaYun.png?alt=media&token=a8a87f17-6fe7-440f-8a6b-a44edbc33011',
        linkedIn: 'https://www.linkedin.com/in/khayunng/',
      },
      {
        title: 'Prerthan',
        src: 'https://firebasestorage.googleapis.com/v0/b/finding-dollar-dev.appspot.com/o/KhaYun.png?alt=media&token=a8a87f17-6fe7-440f-8a6b-a44edbc33011',
        linkedIn: 'https://www.linkedin.com/in/khayunng/',
      },
      {
        title: 'Yew Jia Ren',
        src: 'https://firebasestorage.googleapis.com/v0/b/finding-dollar-dev.appspot.com/o/KhaYun.png?alt=media&token=a8a87f17-6fe7-440f-8a6b-a44edbc33011',
        linkedIn: 'https://www.linkedin.com/in/khayunng/',
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

<style scoped>
.photo {
  position: absolute;
  right: 0;
  bottom: 0;
}
</style>
