<template>
  <v-card flat color="transparent">
    <transition name="fade">
      <v-card-title
        class="
          text-center
          secondary--text
          font-weight-bold
          justify-center
          text-sm-h2 text-md-h1 text-h4
        "
        v-motion
        :initial="{
          scale: 0,
        }"
        :enter="{
          scale: 1,
          transition: {
            delay: 700,
          },
        }"
      >
        ICM$ SG:
        <br />
        Finding Dollar
      </v-card-title>
    </transition>
    <v-card-actions class="justify-center">
      <transition appear name="slide-fade-left">
        <v-btn
          class="rounded-lg secondary pa-4 mr-2"
          :small="$vuetify.breakpoint.smAndDown"
          :x-large="$vuetify.breakpoint.mdAndUp"
          elevation="5"
          >14 AUG 2021</v-btn
        >
      </transition>
      <transition appear name="slide-fade-right">
        <v-btn
          class="rounded-lg secondary pa-4 ml-2"
          :small="$vuetify.breakpoint.smAndDown"
          :x-large="$vuetify.breakpoint.mdAndUp"
          elevation="5"
          >9 AM - 3 PM (SGT)</v-btn
        >
      </transition>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'Home',
  components: {},
  setup(_, { root }) {
    const test = computed(() => {
      switch (root.$vuetify.breakpoint.name) {
        case 'xs':
          console.log('I am XS');
          return 200;
        case 'sm':
          console.log('I am SM');
          return 300;
        case 'md':
          console.log('I am MD');
          return 300;
        case 'lg':
          console.log('I am LG');
          return 450;
        case 'xl':
          console.log('I am XL');
          return 450;
      }
    });
    return {
      test,
    };
  },
});
</script>

<style lang="scss" scoped>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-left-enter-active {
  transition: all 1.2s ease;
}
.slide-fade-left-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-left-enter, .slide-fade-left-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(-60px);
  opacity: 0;
}
/* Enter and leave animations can use different` */
/* durations and timing functions.              */
.slide-fade-right-enter-active {
  transition: all 1.2s ease;
}
.slide-fade-right-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-right-enter, .slide-fade-right-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(60px);
  opacity: 0;
}
</style>
