<template>
  <v-container fluid class="pa-0 ma-0">
    <v-card class="rounded-xl elevation-3" color="secondary" :loading="loading">
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

      <v-tabs-items v-model="tab" v-if="character">
        <v-tab-item v-for="item in items" :key="item.tab">
          <v-card flat height="50vh" class="pa-5 text-justify scroll">
            <v-card-title v-if="tab === 0" class="secondary--text font-weight-bold">
              <v-avatar size="56">
                <img alt="user" :src="character.photoUrl" contain />
              </v-avatar>
              <p class="ml-3 mt-5">{{ character.name }}</p>
              <v-spacer />
              <v-btn color="accent1" :href="templateLink" target="_blank" :disabled="disable">
                Get Slide Template
              </v-btn>
            </v-card-title>
            <v-card-text v-if="tab === 0" v-html="character.biography"></v-card-text>
            <v-card-text v-if="tab === 2" v-html="character.scenario"></v-card-text>
            <DataTable v-if="tab === 1" :data="character.breakdown" />
            <v-container v-if="tab === 3">
              <v-card-text class="text-center"
                >Roleplay Schedule: {{ parseTimestamp(rolePlay, 'h:mm a') }}</v-card-text
              >
              <FlipCountdown :deadline="rolePlayTime" :showDays="false" />
              <v-card-text class="text-center">Submission Deadline: 1:50 pm</v-card-text>
              <FlipCountdown deadline="2021-08-14 13:50" :showDays="false" />
            </v-container>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref } from '@vue/composition-api';

import useCharacter from '@/composable/characterComposable';
import { parseTimestamp } from '@/common/';

import DataTable from '@/components/CharacterDetails/DataTable.vue';
import FlipCountdown from 'vue2-flip-countdown';
import { Character } from '@/common/firestore/type';

export default defineComponent({
  name: 'RoleCard',
  components: {
    DataTable,
    FlipCountdown,
  },
  props: {
    selectedCharacter: {
      type: String,
      required: true,
    },
    rolePlay: {
      type: String,
      required: true,
    },
    templateLink: {
      type: String,
    },
    disable: {
      type: Boolean,
      default: () => {
        return true;
      },
    },
  },
  setup(props) {
    const tab = ref(null);
    const { loading } = useCharacter(props.selectedCharacter);

    const character: Character = {
      id: 'designer',
      name: 'Nemo the Designer',
      biography: `Here we have a 24-year-old lad, Nemo Ong, a freelance designer who graduated
        from the National University of Skrrr (NUS). Graduating in the Covid age, Nemo Ong struggled
        to hunt for a job that is relevant to his Mechanical Engineering degree. He then decided to
        join the gig economy, as a freelance designer. He did some research that being a freelancer
        actually earns him a pretty decent salary as a fresh graduate, albeit the wage could be
        inconsistent. Nemo Ong always gets the same question from his relatives: why did he choose
        to be a freelance designer when he actually studied mechanical engineering. This perhaps
        correlates to the social stereotype of medical doctors, engineers and lawyers as prestigious
        occupations. But Nemo Ong -- a man with vision knows there is no one job that is superior
        over others, and a job that he is truly passionate about is the best job for him. The only
        reason why he took up a degree in Mechanical Engineering is because of his parent’s strong
        preference -- for the perceived income stability. While the filial son did follow his
        parents’ advice, Nemo Ong did not let go of his passion and took up a Minor in
        Communications and New Media. Undoubtedly, he thrived in his minor studies, for the genuine
        interest that motivated him to dive deeper into the vertical, even during his free time,
        which he self-learnt user experience and user interface. Nemo Ong is genuinely grateful for
        his current job and appreciates the opportunity to do what he actually loves. <br /><br />
        As an industry professional who graduated with MBA, Dory definitely has a certain extent of
        financial literacy. She’s taking home a total of SGD 5,000 excluding bonuses from the
        company. While she believes that savings are important, she feels like her current
        investment portfolio is sufficient to cover what she needs in the future, thus spending
        almost all her income on things that she wants. She has a habit of using mobile everywhere
        and having the latest phone possible. That leads to her having a fixed 24 months phone
        contract. She loves shopping for handbags and usually spends most of her income on the
        latest editions when her pay comes in every month. While she’s working overseas, she’ll have
        to pay for her own accommodation and that will reduce her total income to spend on her daily
        life. She likes to take private taxis to work in the morning because she prefers to wake up
        later. Her household expenses came from utility bills and maintenance equipment only as she
        doesn’t cook at home. As mentioned, she’s also currently on a student loan for both her
        degree and masters that she’s yet to pay back.
        <br /><br />
        Beyond work, Nemo enjoys spending time with his fiancee. The couple met in university when
        they joined a design competition. Having been with each other for five years, they are now
        in a stable relationship and both of them think it is the right time to settle down. They
        agreed that it is not the best time to tie the knot right now, with the uncertainties of the
        pandemic and their financial position. Their plan is to hold a wedding in three years time.
        The couple loved the idea of having a beach honeymoon, either at Bali or at one of Maldives’
        private resorts. They are planning to save up for that. A good estimation of the wedding in
        2027, excluding the honeymoon plans, goes up to $60,000. Nemo thinks it is an achievable
        goal for him to fork out $900 every month for the next three years. He had his tertiary
        education funded through the ASEAN scholarship and managed to save a pool of $10,000 with
        the prize money and side hustles he did all these years. As a freelance designer now,
        although his income varies across the months, gauging on his personal capabilities and using
        the past year as a reference, he can comfortably bag home $4,000 every month. He has been
        spending a great portion of his income to purchase the latest design software and hardware
        and plans to continue doing so to gain more new clients.`,
      breakdown: [
        {
          name: 'Salary',
          value: 4000,
          category: 'Income',
        },
        {
          name: 'Phone Bill',
          value: 100,
          category: 'Expense',
        },
        {
          name: 'Food and Beverages',
          value: 900,
          category: 'Expense',
        },
        {
          name: 'House Rental',
          value: 700,
          category: 'Expense',
        },
        {
          name: 'Savings',
          value: 300,
          category: 'Expense',
        },
        {
          name: 'Entertainment',
          value: 900,
          category: 'Expense',
        },
        {
          name: 'Household Expenses',
          value: 200,
          category: 'Expense',
        },
        {
          name: 'Transportation',
          value: 600,
          category: 'Expense',
        },
        {
          name: 'Insurance',
          value: 200,
          category: 'Expense',
        },
        {
          name: 'Design Software and Tools ',
          value: 400,
          category: 'Expense',
        },
      ],
      scenario: `<strong>Conversation with Future in-laws</strong> <br /><br />
        Nemo’s future in-laws are respectable businessmen in the timepiece field, and they request
        for the couple to hold a grand wedding, inviting 600 guests, including their clients and
        business partners. Nemo is required to calm his future in-laws. He wants to make sure the
        parents of his girlfriend, Bubbles understand the rationale behind their decision of holding
        an intimate/grand wedding. The expected outcome is to find the consensus without ruining the
        relationship between the couple and their parents. But before this, He wants to seek the
        opinion of Bubbles. After all, they are the ones getting married. If they were to hold a
        grand wedding, he wants to make sure both he and his girlfriend are comfortable with their
        finances since the grand wedding can cost up to S$200,000. They would be more confident
        financially in having an intimate wedding, as the couple just started their career. If they
        had an extra budget, they were thinking of doing a honeymoon in Bali. However, Nemo does
        understand where his future in-laws are coming from.
        <br /><br />
        Action required: The aim of this conversation is to clear the air, convey their decision and
        explain why they decided that this is best for them and their family. He wants to make sure
        that his in-laws understand that the couple respects them and that they are trying to make a
        decision that they are confident with. `,
      photoUrl:
        'https://firebasestorage.googleapis.com/v0/b/finding-dollar-dev.appspot.com/o/Designer.png?alt=media&token=b732a2bb-fb03-4a25-9097-6ba77fae4eee',
    };

    const items = reactive([
      {
        tab: 'Biography',
      },
      { tab: 'Monthly Breakdown' },
      {
        tab: 'Role-play Scenario',
      },
      {
        tab: 'Time Keeper',
      },
    ]);

    const rolePlayTime = computed(() => parseTimestamp(props.rolePlay, 'YYYY-MM-DD HH:mm:ss'));
    return {
      tab,
      items,
      character,
      loading,
      rolePlayTime,
      parseTimestamp,
    };
  },
});
</script>

<style lang="scss" scoped>
.scroll {
  overflow-y: auto;
}
</style>
