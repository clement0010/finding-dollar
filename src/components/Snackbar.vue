<template>
  <v-snackbar :color="status" :value="activate" rounded>
    <v-row justify="center">
      <v-icon left v-if="status === 'error'"> mdi-alert-decagram </v-icon>
      <v-icon left v-if="status === 'success'"> mdi-check-decagram </v-icon>
      {{ message }}
    </v-row>
  </v-snackbar>
</template>

<script lang="ts">
import useSnackbar from '@/composable/snackbarComposition';

import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'Snackbar',
  setup() {
    const { activate, message, status } = useSnackbar();

    return {
      activate,
      message,
      status,
    };
  },
});
</script>
