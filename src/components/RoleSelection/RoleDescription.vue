<template>
  <v-container fluid class="pa-0 ma-0">
    <v-expansion-panels accordion class="elevation-5 rounded-lg primary">
      <v-expansion-panel v-for="item in items" :key="item.role">
        <v-expansion-panel-header>
          {{ item.role }}
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row justify="space-between">
            <v-col cols="10" class="text-justify text-body-2">
              {{ item.content }}
            </v-col>
            <v-col cols="2">
              <v-img src="@/assets/photo/1.png" contain width="100px" />
            </v-col>
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'RoleCard',
  setup() {
    const items = [
      {
        role: 'Nigel the Founder',
        content: `Nigel serves as the co-founder and Chief Technology Officer of a FinTech startup. The 24-year-old law graduate wishes to have a house of his own by the time he is 30. He is now saving for the 10% down payment of his S$ 2M dream home. Nigel’s parents are approaching the retirement age, but do not have a concrete retirement plan yet.`,
      },
      {
        role: 'Dory the Management Associate',
        content: `Dory recently completed an MBA at Salty Management University (SMU). Originally from Malaysia, she now works as a Management Associate at one of Singapore’s largest banks. Given her background, she understands the importance of having savings and does some personal investments. She aspires to purchase a small condominium so she could eventually save on paying rent. Her primary goal now is to finance the down payment of it. She has been identified as one of the high performers of her firm, taking on extra responsibilities and always going above and beyond for her work.`,
      },
      {
        role: 'Max the Software Engineer',
        content: `Max is a tech enthusiast who prides himself for always owning the latest technology products. Fresh out of university, he joined Ninja Van as a software engineer. Some of his income goes to the repayment of his tuition loan and a monthly contribution to support the education of his younger brother. Recently, he helped identify a huge bug in Ninja Van’s backend environment that avoided the company losing millions of dollars.`,
      },
      {
        role: 'Nemo the Designer',
        content: `Nemo is a freelance graphic designer. He actually graduated with a Mechanical Engineering degree last year but decided to stick to his passion in graphic design. He is in a stable relationship and plans to tie the knot with his significant other in six years time. The couple wants to have a dream wedding by then, and each of them plans to contribute S$45k by then.`,
      },
    ];
    return {
      items,
    };
  },
});
</script>
