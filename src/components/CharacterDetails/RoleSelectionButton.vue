<template>
  <v-dialog v-model="dialog" max-width="500">
    <template #activator="{ on, attrs }">
      <v-btn class="my-5" color="accent1" v-bind="attrs" v-on="on"> I Choose You! </v-btn>
    </template>

    <v-card>
      <v-card-title> Select Character </v-card-title>
      <v-card-text>
        <span>
          Are you sure you want to select this <strong>{{ role }}</strong> as your character ?</span
        >
        <br />
        <br />
        <span> This action is <strong>irreversible</strong>.</span>
      </v-card-text>
      <v-card-actions>
        <v-btn class="accent1" @click="selectCharacter"> Confirm </v-btn>

        <v-btn @click="cancel"> Cancel </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs } from '@vue/composition-api';

export default defineComponent({
  name: 'SelectCharacterButton',
  props: {
    id: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
  },
  setup(props, { emit }) {
    const dialog = ref(false);

    const { id } = toRefs(props);

    const selectCharacter = (): void => {
      dialog.value = false;

      emit('selectCharacter', id.value);
    };

    const cancel = () => {
      dialog.value = false;
    };

    return {
      dialog,
      cancel,
      selectCharacter,
    };
  },
});
</script>
