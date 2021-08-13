<template>
  <v-container
    fluid
    style="position: absolute"
    :class="{ mobile: !$vuetify.breakpoint.smAndUp, web: $vuetify.breakpoint.smAndUp }"
  >
    <v-row no-gutters justify="center">
      <v-col cols="10" md="8" align="center">
        <v-img
          contain
          :width="width"
          :height="height"
          src="https://firebasestorage.googleapis.com/v0/b/finding-dollar-dev.appspot.com/o/oops-404-error-with-a-broken-robot-animate.svg?alt=media&token=dca00674-767f-4c89-bd33-4e71a7745f94"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'Error',
  setup(_, { root }) {
    const width = computed(() => {
      if (root.$vuetify.breakpoint.smAndUp) return 400;
      return 270;
    });
    const height = computed(() => {
      if (root.$vuetify.breakpoint.smAndUp) return 400;
      return 270;
    });

    return {
      width,
      height,
    };
  },
});
</script>

<style lang="scss" scoped>
.mobile {
  top: 15vh;
}
.web {
  top: 10vh;
}
</style>
