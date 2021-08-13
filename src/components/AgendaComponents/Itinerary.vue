<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-center">Time</th>
          <th class="text-center">Subject</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in schedule" :key="item.name">
          <td class="text-center">{{ item.time }}</td>
          <td class="text-center">{{ item.subject }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'Itinerary',
  setup() {
    const schedule = [
      {
        time: '8:50 - 9:00 a.m.',
        subject: 'Registration',
      },
      {
        time: '9:00 - 9:15 a.m.',
        subject: 'Opening Ceremony',
      },
      {
        time: '9:15 - 9:50 a.m.',
        subject: 'Ice-Breaking',
      },
      {
        time: '9:50 - 10:30 a.m.',
        subject: 'Fireside Chat with MASIS',
      },
      {
        time: '10:30 - 10:35 a.m.',
        subject: 'Break',
      },
      {
        time: '10:35 - 11:50 a.m.',
        subject: 'Personal Finance Workshop',
      },
      {
        time: '11:50 - 12:30 p.m.',
        subject: 'Lunch',
      },
      {
        time: '12:30 - 2:20 p.m.',
        subject: 'Mystery Challenge',
      },
      {
        time: '2:20 - 2:30 p.m.',
        subject: 'Break',
      },
      {
        time: '2:30 - 2:50 p.m.',
        subject: 'Opportunity',
      },
      {
        time: '2:50 - 3:00 p.m.',
        subject: 'Closing Ceremony',
      },
      {
        time: '3:00 p.m.',
        subject: 'Event Ends',
      },
    ];
    return {
      schedule,
    };
  },
});
</script>
