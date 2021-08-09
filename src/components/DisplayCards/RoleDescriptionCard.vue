<template>
  <v-container fluid class="pa-0 ma-0">
    <v-expansion-panels accordion class="elevation-5 rounded-lg primary">
      <v-expansion-panel v-for="item in items" :key="item.id">
        <v-expansion-panel-header>
          {{ item.role }}
          <v-spacer></v-spacer>
          <span class="text-right grey--text mr-5"> Quota Remaining: {{ item.quota.value }}</span>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row justify="space-between">
            <v-col cols="10" class="text-justify text-body-2">
              {{ item.content }}
            </v-col>
            <v-col cols="2">
              <v-img :src="item.photoUrl" contain width="100px" />
            </v-col>
          </v-row>
          <RoleSelectionButton
            :id="item.id"
            :role="item.role"
            :disabled="item.quota.value <= 0"
            @selectCharacter="(payload) => $emit('selectCharacter', payload)"
          />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from '@vue/composition-api';

import RoleSelectionButton from '@/components/CharacterDetails/RoleSelectionButton.vue';

export default defineComponent({
  name: 'RoleCard',
  components: {
    RoleSelectionButton,
  },
  props: {
    designerQuota: {
      type: Number,
      required: true,
    },
    founderQuota: {
      type: Number,
      required: true,
    },
    softwareQuota: {
      type: Number,
      required: true,
    },
    managementQuota: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const { designerQuota, softwareQuota, founderQuota, managementQuota } = toRefs(props);
    const items = reactive([
      {
        id: 'founder',
        role: 'Nigel the Founder',
        content: `Nigel serves as the co-founder and Chief Technology Officer of a FinTech
        startup. The 24-year-old law graduate wishes to have a house of his own by the time he is
        30. He is now saving for the 10% down payment of his S$ 2M dream home. Nigel’s parents are
        approaching the retirement age, but do not have a concrete retirement plan yet.`,
        photoUrl:
          'https://firebasestorage.googleapis.com/v0/b/finding-dollar-dev.appspot.com/o/Startup%20Founder.png?alt=media&token=15137ed8-d6e6-4a73-8cc3-46ea6a671908',
        quota: founderQuota,
      },
      {
        id: 'management',
        role: 'Dory the Management Associate',
        content: `Dory recently completed an MBA at Salty Management University (SMU).
        Originally from Malaysia, she now works as a Management Associate at one of Singapore’s
        largest banks. Given her background, she understands the importance of having savings and
        does some personal investments. She aspires to purchase a small condominium so she could
        eventually save on paying rent. Her primary goal now is to finance the down payment of it.
        She has been identified as one of the high performers of her firm, taking on extra
        responsibilities and always going above and beyond for her work.`,
        photoUrl:
          'https://firebasestorage.googleapis.com/v0/b/finding-dollar-dev.appspot.com/o/Management%20Associate.png?alt=media&token=147a98ff-d61c-410c-97a5-1514677e5bf7',
        quota: managementQuota,
      },
      {
        id: 'software',
        role: 'Max the Software Engineer',
        content: `Max is a tech enthusiast who prides himself for always owning the latest
        technology products. Fresh out of university, he joined Ninja Van as a software engineer.
        Some of his income goes to the repayment of his tuition loan and a monthly contribution to
        support the education of his younger brother. Recently, he helped identify a huge bug in
        Ninja Van’s backend environment that avoided the company losing millions of dollars.`,
        photoUrl:
          'https://firebasestorage.googleapis.com/v0/b/finding-dollar-dev.appspot.com/o/Sofrware%20Engineer.png?alt=media&token=05245982-d1fe-4a1d-9342-303804952cfd',
        quota: softwareQuota,
      },
      {
        id: 'designer',
        role: 'Nemo the Designer',
        content: `Nemo is a freelance graphic designer. He actually graduated with a Mechanical
        Engineering degree last year but decided to stick to his passion in graphic design. He is in
        a stable relationship and plans to tie the knot with his significant other in six years
        time. The couple wants to have a dream wedding by then, and each of them plans to contribute
        S$45k by then.`,
        photoUrl:
          'https://firebasestorage.googleapis.com/v0/b/finding-dollar-dev.appspot.com/o/Designer.png?alt=media&token=b732a2bb-fb03-4a25-9097-6ba77fae4eee',
        quota: designerQuota,
      },
    ]);
    return {
      items,
    };
  },
});
</script>
