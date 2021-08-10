<template>
  <v-container fluid class="pa-0 ma-0">
    <v-card class="rounded-xl elevation-3" color="secondary">
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
            <v-form v-model="valid">
              <v-row justify="center" align="center" v-if="tab === 0">
                <v-col cols="3">
                  <v-select
                    v-model="tableValue.select"
                    :items="category"
                    label="Category"
                    outlined
                    color="secondary"
                    item-color="secondary"
                    :rules="[requireInputRule]"
                  ></v-select>
                </v-col>

                <v-col cols="3">
                  <v-text-field
                    v-model="tableValue.name"
                    label="Item"
                    placeholder="Item"
                    outlined
                    color="secondary"
                    :rules="[requireInputRule]"
                  ></v-text-field>
                </v-col>

                <v-col cols="3">
                  <v-text-field
                    v-model="tableValue.value"
                    label="Value"
                    placeholder="Value"
                    outlined
                    type="number"
                    color="secondary"
                    :rules="[requireInputRule]"
                    @keypress.enter="submit"
                  ></v-text-field>
                </v-col>
                <v-col cols="2" class="text-center mb-5">
                  <v-btn
                    class="success rounded-md"
                    :disabled="!valid"
                    type="submit"
                    @click="submit"
                  >
                    Submit
                  </v-btn>
                </v-col>
              </v-row>
              <v-container fluid>
                <DataTable :data="data" v-if="tab === 0" @delete="removeItem" @edit="editItem" />
                <Chart :data="data" v-if="tab === 1" />
              </v-container>
            </v-form>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from '@vue/composition-api';

import { requireInputRule } from '@/common/validation';
import { FinanceCategory, FinanceTableData } from '@/common/firestore/type';
import DataTable from '@/components/ToolsComponents/Table.vue';
import Chart from '@/components/ToolsComponents/Chart.vue';

export default defineComponent({
  name: 'ToolsCard',
  components: { DataTable, Chart },
  setup() {
    const tab = ref(null);
    const items = [{ tab: '50/30/20 Table' }, { tab: 'Chart' }];
    const valid = ref(false);

    const category = ['Needs', 'Wants', 'Savings'];
    const tableValue = reactive({
      select: '',
      value: 0,
      name: '',
    });
    const data = ref<FinanceTableData[]>([]);
    const submit = (e: Event) => {
      e.preventDefault();
      console.log({ ...tableValue });

      data.value.push({
        category: tableValue.select as FinanceCategory,
        value: +tableValue.value,
        name: tableValue.name,
        id: data.value.length,
      });
      tableValue.select = '';
      tableValue.name = '';
      tableValue.value = 0;
    };
    const removeItem = (index: number) => {
      console.log({ index }, 'delete');
      data.value = data.value.filter((val) => val.id !== index);
    };

    const editItem = (payload: Record<string, unknown>) => {
      console.log({ payload });
      data.value = data.value.map((val) => {
        if (val.id !== payload.index) return val;

        return payload.editedValue as FinanceTableData;
      });
    };
    return {
      tab,
      items,
      category,
      tableValue,
      submit,
      removeItem,
      editItem,
      data,

      // Validation
      valid,
      requireInputRule,
    };
  },
});
</script>

<style lang="scss" scoped>
.scroll {
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
