<template>
  <v-container fluid class="ma-0 pa-0">
    <v-row no-gutters justify="center">
      <v-col cols="8">
        <v-switch color="secondary" label="Temporary Toggle" v-model="selectedRole" />
        <v-card flat color="transparent" class="rounded-xl">
          <v-card-title v-if="!selectedRole" class="justify-center font-weight-bold"
            >Please select a Character.</v-card-title
          >
          <RoleCard v-if="selectedRole" />
          <RoleDescription v-if="!selectedRole" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';

import RoleCard from '@/components/DisplayCards/RoleCard.vue';
import RoleDescription from '@/components/RoleSelection/RoleDescription.vue';

export default defineComponent({
  name: 'Profile',
  components: { RoleCard, RoleDescription },
  setup() {
    const selectedRole = ref(true);

    return {
      selectedRole,
    };
  },
});
</script>
