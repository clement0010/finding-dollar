<template>
  <v-dialog v-model="dialog" max-width="500px">
    <template v-slot:activator="{ on, attrs }">
      <v-data-table
        :headers="headers"
        :items="data"
        sort-by="category"
        class="elevation-3"
        hide-default-footer
      >
        <template #[`item.actions`]="{ item }" v-if="$vuetify.breakpoint.smAndDown">
          <v-btn
            fab
            x-small
            color="primary"
            class="mr-4"
            @click="editItem(item)"
            v-on="on"
            v-bind="attrs"
          >
            <v-icon color="secondary"> mdi-pencil </v-icon>
          </v-btn>
          <v-btn fab x-small color="primary" @click="$emit('delete', item.id)">
            <v-icon color="secondary"> mdi-delete </v-icon>
          </v-btn>
        </template>
        <template #[`item.value`]="{ item }" v-if="$vuetify.breakpoint.smAndDown">
          {{ formatThousandSeparator(item.value) }}
        </template>
        <template v-if="$vuetify.breakpoint.smAndUp" #body="{ items }">
          <tbody is="transition-group" name="list">
            <tr v-for="item in items" :key="item.name" class="item-row text-center">
              <td>{{ item.category }}</td>
              <td>{{ item.name }}</td>
              <td>{{ formatThousandSeparator(item.value) }}</td>
              <td>
                <v-btn
                  fab
                  x-small
                  color="primary"
                  class="mr-4"
                  @click="editItem(item)"
                  v-on="on"
                  v-bind="attrs"
                >
                  <v-icon color="secondary"> mdi-pencil </v-icon>
                </v-btn>
                <v-btn fab x-small color="primary" @click="$emit('delete', item.id)">
                  <v-icon color="secondary"> mdi-delete </v-icon>
                </v-btn>
              </td>
            </tr>
          </tbody>
        </template>

        <template v-slot:no-data> Input some items </template>
      </v-data-table>

      <v-row no-gutters class="mt-5">
        <v-col> Total: </v-col>
        <v-col align="right"> {{ formatThousandSeparator(total) }} </v-col>
      </v-row>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">Edit your item</span>
      </v-card-title>

      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="4">
              <v-select
                v-model="editedItem.category"
                :items="category"
                outlined
                dense
                item-color="secondary"
                label="Category"
                color="secondary"
              ></v-select>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                v-model="editedItem.name"
                label="Item"
                outlined
                dense
                color="secondary"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                v-model="editedItem.value"
                label="Value"
                type="number"
                outlined
                dense
                color="secondary"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="close"> Cancel </v-btn>
        <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { formatThousandSeparator } from '@/common';
import { FinanceCategory, FinanceTableData } from '@/common/firestore/type';
import { computed, defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  name: 'ToolsTable',
  props: {
    data: {
      type: Array as () => FinanceTableData[],
    },
  },
  setup(props, { emit }) {
    const dialog = ref(false);
    const headers = [
      { text: 'Category', value: 'category', align: 'start' },
      { text: 'Item', value: 'name', sortable: false },
      { text: 'Value', value: 'value', align: 'center' },
      { text: 'Actions', value: 'actions', sortable: false, align: 'center' },
    ];
    const category = ['Needs', 'Wants', 'Savings'];

    const editedItem = ref({
      name: '',
      category: '' as FinanceCategory,
      value: 0,
    });
    const editedIndex = ref(-1);
    const editItem = (item: FinanceTableData) => {
      editedIndex.value = item.id as number;
      console.log(item.id);
      editedItem.value = Object.assign({}, item);
      dialog.value = true;
    };

    const close = () => {
      dialog.value = false;
      editedItem.value = {
        name: '',
        category: '' as FinanceCategory,
        value: 0,
      };
    };
    const save = () => {
      editedItem.value.value = +editedItem.value.value;
      emit('edit', {
        index: editedIndex.value,
        editedValue: editedItem.value,
      });
      close();
    };

    const total = computed(() => {
      return props.data?.reduce((accumulate, currentValue) => {
        return accumulate + currentValue.value;
      }, 0);
    });

    return {
      dialog,
      headers,
      editedItem,
      editItem,
      save,
      close,

      category,
      total,
      formatThousandSeparator,
    };
  },
});
</script>

<style lang="scss" scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.8s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(100%);
}
.list-move {
  transition: transform 0.6s;
}
.item-row {
  display: table-row;
}
</style>
