<template>
  <v-container fluid>
    <v-card class="rounded-xl elevation-3">
      <v-card-title class="justify-center font-weight-bold text-justify"
        >Please select your schedule</v-card-title
      >
      <v-card flat class="pa-5">
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Time</th>
                <th class="text-center">Status</th>
                <th class="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in displaySchedule" :key="item.id">
                <td>{{ item.timeslot }}</td>
                <td class="text-center">
                  <v-icon v-if="item.availability" color="green" small
                    >mdi-checkbox-marked-circle-outline</v-icon
                  >
                  <v-icon v-if="!item.availability" small color="red"
                    >mdi-close-circle-outline</v-icon
                  >
                  {{ item.availability ? 'Open' : 'Booked' }}
                </td>
                <td class="text-center">
                  <SelectScheduleButton
                    :disabled="!item.availability"
                    :id="item.id"
                    :timeslot="item.timeslot"
                    :role="role"
                    @selectSchedule="(payload) => $emit('selectSchedule', payload)"
                  />
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api';

import { CharacterType } from '@/common/firestore/type';
import { parseSchedule, findTimeslotQuota } from '@/common/';
import SelectScheduleButton from '@/components/CharacterDetails/ScheduleSelectionButton.vue';

export default defineComponent({
  name: 'SchedulingTable',
  components: {
    SelectScheduleButton,
  },
  props: {
    role: {
      type: String as () => CharacterType,
      required: true,
    },
  },
  setup(props) {
    const displaySchedule = computed(() => {
      const data = findTimeslotQuota(props.role);
      return parseSchedule(data, props.role);
    });

    return { displaySchedule };
  },
});
</script>
