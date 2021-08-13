<template>
  <v-container
    fluid
    style="position: absolute"
    :class="{ mobile: !$vuetify.breakpoint.smAndUp, web: $vuetify.breakpoint.smAndUp }"
  >
    <v-row no-gutters justify="center">
      <v-col cols="12" md="8" align="center">
        <ToolsCard />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import ToolsCard from '@/components/DisplayCards/ToolsCard.vue';

export default defineComponent({
  name: 'Tools',
  components: { ToolsCard },
});
</script>

<style lang="scss" scoped>
.mobile {
  top: 5vh;
}
.web {
  top: 15vh;
}
</style>
