<template>
  <v-dialog v-model="dialog" fullscreen transition="slide-x-transition" @click="toggleDialog">
    <template #activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on">
        <v-app-bar-nav-icon color="secondary" />
      </v-btn>
    </template>

    <v-app-bar app class="primary">
      <v-row align="center" justify="center" class="py-0">
        <v-col cols="auto" class="py-0">
          <v-app-bar-title>
            <router-link to="/">
              <v-img contain src="@/assets/logo.png" width="175px" aspect-ratio class="mt-3" />
            </router-link>
          </v-app-bar-title>
        </v-col>

        <v-spacer />

        <v-col cols="auto">
          <v-btn icon color="secondary" @click="toggleDialog">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-app-bar>

    <v-card color="primary">
      <v-list v-if="!authenticated" nav color="primary">
        <v-list-item class="justify-center">
          <router-link :to="{ name: 'Login' }">
            <v-btn class="text-lowercase font-weight-regular" rounded text> Login </v-btn>
          </router-link>
        </v-list-item>
      </v-list>
      <div>
        <v-divider />
        <v-list nav color="primary">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                <strong> Hello Team 3 </strong>
              </v-list-item-title>
              <v-list-item-subtitle> You are role ? </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item-group :value="selected">
            <router-link :to="{ name: 'Profile', params: { id: 10 } }">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="secondary">mdi-account</v-icon>
                </v-list-item-icon>
                <v-list-item-content> Profile </v-list-item-content>
              </v-list-item>
            </router-link>

            <router-link to="/agenda">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="secondary">mdi-shopping</v-icon>
                </v-list-item-icon>
                <v-list-item-content> Agenda </v-list-item-content>
              </v-list-item>
            </router-link>

            <router-link to="/leaderboard">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="secondary">mdi-trophy-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-content> Leaderboard </v-list-item-content>
              </v-list-item>
            </router-link>

            <router-link to="/team">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="secondary">mdi-account-supervisor-circle-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-content> Team </v-list-item-content>
              </v-list-item>
            </router-link>

            <v-divider />

            <v-list color="primary">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="secondary">mdi-exit-to-app</v-icon>
                </v-list-item-icon>
                <v-list-item-content> Sign Out </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-list-item-group>
        </v-list>
      </div>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { authenticated } from '@/composable/store';
import { computed, defineComponent, ref, watch } from '@vue/composition-api';

export default defineComponent({
  name: 'NavigationDropdown',
  components: {},
  setup(_, { root }) {
    const dialog = ref(false);
    const routeName = computed(() => root.$route.name);

    watch(routeName, () => {
      dialog.value = false;
    });

    const selected = computed(() => {
      switch (routeName.value) {
        case 'Profile':
          return 0;
        case 'Agenda':
          return 1;
        case 'Leaderboard':
          return 2;
        case 'Team':
          return 3;
        case 'Settings':
          return 4;
        default:
          return undefined;
      }
    });

    const toggleDialog = () => {
      dialog.value = !dialog.value;
    };

    return {
      dialog,
      authenticated,
      toggleDialog,
      selected,
    };
  },
});
</script>
