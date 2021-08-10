<template>
  <v-dialog v-model="dialog" max-width="500">
    <template #activator="{ on, attrs }">
      <v-btn class="my-5" v-bind="attrs" v-on="on" :disabled="disabled" color="accent1">
        Book Timeslot!
      </v-btn>
    </template>

    <v-card class="rounded-md pa-2">
      <v-card-title> Select Character </v-card-title>
      <v-card-text>
        <span>
          Are you sure you want to select book this timeslot - <strong>{{ timeslot }}</strong
          >?</span
        >
        <br />
        <br />
        <span> This action is <strong>irreversible</strong>.</span>
      </v-card-text>
      <v-card-actions>
        <v-btn class="accent1" @click="selectSchedule"> Confirm </v-btn>

        <v-btn @click="cancel"> Cancel </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  name: 'SelectScheduleButton',
  props: {
    id: {
      type: Number,
      required: true,
    },
    timeslot: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      required: true,
    },
  },
  setup(props, { emit }) {
    const dialog = ref(false);

    const selectSchedule = (): void => {
      dialog.value = false;

      emit('selectSchedule', {
        id: props.id,
        role: props.role,
      });
    };

    const cancel = () => {
      dialog.value = false;
    };

    return {
      dialog,
      cancel,
      selectSchedule,
    };
  },
});
</script>
