<template>
  <v-container fluid class="pa-0 ma-0">
    <v-card class="rounded-xl elevation-3" color="secondary">
      <template slot="progress">
        <v-progress-linear color="accent1" height="5" indeterminate></v-progress-linear>
      </template>
      <v-tabs
        v-model="tab"
        background-color="transparent"
        color="white"
        centered
        center-active
        dark
        fixed-tabs
        show-arrows
        slider-size="5"
      >
        <v-tabs-slider class="pb-5" color="accent1"></v-tabs-slider>
        <v-tab v-for="item in items" :key="item.tab" class="rounded-xl">
          {{ item.tab }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item v-for="item in items" :key="item.tab">
          <v-card flat height="50vh" class="pa-5 text-justify scroll">
            <v-card-text v-if="tab === 0 || tab === 2" v-html="item.content"></v-card-text>
            <DataTable v-if="tab === 1" />
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';

import DataTable from '@/components/CharacterDetails/DataTable.vue';

export default defineComponent({
  name: 'RoleCard',
  components: {
    DataTable,
  },
  setup() {
    const tab = ref(null);
    const items = [
      {
        tab: 'Biography',
        content: `Here we have a 24-year-old lad, Nemo Ong, a freelance designer who graduated from the National University of Skrrr (NUS). Graduating in the Covid age, Nemo Ong struggled to hunt for a job that is relevant to his Mechanical Engineering degree. Unlike his Singaporean friends, Nemo Ong is not eligible for SG United Traineeship opportunities as he holds a Student’s Pass as a foreigner. These led to his decision to join the gig economy, as a freelance designer. He did some research that being a freelancer actually earns him a pretty decent salary as a fresh graduate, albeit the wage could be inconsistent sometimes. Nemo Ong always gets the same question from his relatives: why did he choose to be a freelance designer when he actually studied mechanical engineering. This perhaps correlates to the society stereotype of medical doctors, engineers and lawyers as prestigious occupations. But Nemo Ong -- a man with vision, tenacity and hustle knows there is no one job that is superior over others, and a job that he is truly passionate about is the best job for him. Although he did a degree in Mechanical Engineering, his passion has always been in the design field. The only reason why he took up his degree is because of his parents strong preference of him studying Mechanical Engineering -- for the perceived income stability. While the filial son did follow his parents advice, Nemo Ong did not let go of his passion and took up a Minor in Communications and New Media. Undoubtedly, he thrived in his minor studies, for his genuine interest that motivated him to dive deeper into the vertical, even during his free time, which he self-learnt user experience and user interface. As such, Nemo Ong is genuinely grateful for his current job, and appreciates the opportunity to do what he actually loves. 
        <br/><br/>Moving on to Nemo Ong’s personal life, he truly is a lucky man. Nemo met his fiancée in university, when both of them attended the same course. It first started when the couple participated in a Design Competition as teammates and they eventually fell in love with each other. They are now in a stable relationship where both of them think it is the right time to settle down. Both of them do agree that it is not the best time to tie the knot right now, with the uncertainties of the pandemic and their financial position. With that, they do wish to become man and wife in six years time, when they are 30 years old. To commemorate how fair they have come, they want to have a grand wedding, inviting the family and friends to be present on their important day, witnessing how far they have come. [start] The couple loved the idea of having a beach honeymoon, either at one of Maldives’ private resorts or even Bali. They are planning to save up for that. A good estimation of the wedding in 2027, excluding the honeymoon plans, goes to $45,000. Nemo think it is an achievable goal for him to fork out half of the sum in six years time, as he managed to have his tertiary education funded through an ASEAN scholarship for his outstanding academic achievements, and thus has a pool of $10,000 savings with 90% of it in fixed deposit and the remaining portion as cash in bank, with the prize money and side hustles he did all these years. As a freelance designer now, although his income could fluctuate across the months, but gauging on his personal capabilities and using the past year as a reference, he can comfortably bag home $5,000 per month. He is confident that he will be able to achieve the $25,000 mark in six years, even with his current commitments. He has been spending a great portion of his income to own the latest design softwares and hardwares, and plans to continue doing so to gain more new clients. However, he also acknowledges that this is built on the assumption that the resumption of business activities barring the country is on track to bring the covid outbreak under control.
`,
      },
      { tab: 'Monthly Breakdown', content: 'Tab 2 Content' },
      {
        tab: 'Role-play Scenario',
        content: `<strong>Conversation with Future in-laws</strong> <br/><br/> Nemo is required to calm his future in-laws. He wants to make sure the parents of his girlfriend understand the rationale behind their decision of holding an intimate/grand wedding. The expected outcome is to find the consensus without ruining the relationship between the couple and their parents. But before this, He wants to seek the opinion of his girlfriend. After all, they are the ones getting married. If they were to hold a grand wedding, he wants to make sure both he and his girlfriend are comfortable with their finances since the grand wedding can cost up to S$200k. They would be more confident financially in having an intimate wedding, as the couple just started their career. If they had an extra budget, they were thinking of doing a honeymoon in Bali. However, Nemo does understand where his future in-laws are coming from. The aim of this conversation is to clear the air, convey their decision and explain why they decided that this is best for them and their family. He wants to make sure that his in-laws understand that the couple respects them and that they are trying to make a decision that they are confident with.`,
      },
    ];
    return {
      tab,
      items,
    };
  },
});
</script>

<style lang="scss" scoped>
.scroll {
  overflow-y: auto;
}
</style>
