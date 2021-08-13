<template>
  <v-app-bar app color="primary">
    <v-row justify="center" align="center">
      <v-col cols="auto">
        <v-app-bar-title>
          <router-link to="/">
            <v-img contain src="@/assets/logo.png" width="175px" aspect-ratio class="mt-3" />
          </router-link>
        </v-app-bar-title>
      </v-col>
      <v-spacer></v-spacer>
      <v-col v-if="authenticated" cols="1" align="center">
        <router-link :to="{ name: 'Profile', params: { id } }">
          <v-btn text rounded class="secondary--text pa-0"> Profile </v-btn>
        </router-link>
      </v-col>
      <v-col cols="1" md="auto" align="center">
        <router-link to="/agenda">
          <v-btn text rounded class="secondary--text pa-0"> Agenda </v-btn>
        </router-link>
      </v-col>
      <v-col cols="1" md="auto" align="center">
        <router-link to="/challenge">
          <v-btn text rounded class="secondary--text pa-0"> Challenge </v-btn>
        </router-link>
      </v-col>
      <v-col cols="1" md="auto" v-if="authenticated" align="center">
        <router-link to="/leaderboard">
          <v-btn text rounded class="secondary--text pa-0"> Leaderboard </v-btn>
        </router-link>
      </v-col>
      <v-col cols="1" md="auto" align="center">
        <router-link to="/team">
          <v-btn text rounded class="secondary--text pa-0"> Team </v-btn>
        </router-link>
      </v-col>
      <v-col cols="1" md="auto" align="center">
        <router-link to="/tools">
          <v-btn text rounded class="secondary--text pa-0"> Tools </v-btn>
        </router-link>
      </v-col>
      <v-col cols="1" md="auto" align="center">
        <router-link to="/login" v-if="!authenticated">
          <v-btn text rounded class="secondary--text"> Login </v-btn>
        </router-link>
        <v-btn text rounded class="secondary--text" v-if="authenticated" @click="logout">
          Sign Out
        </v-btn>
      </v-col>
      <v-col cols="2" v-if="$vuetify.breakpoint.lgAndUp" align="center" class="pa-0">
        <v-row justify="center" align="center">
          <v-col cols="2">
            <v-btn text fab small href="https://www.facebook.com/icmscholars" target="_blank">
              <v-icon color="secondary"> mdi-facebook </v-icon>
            </v-btn>
          </v-col>
          <v-col cols="2">
            <v-btn text fab small href="https://www.instagram.com/icmscholars/" target="_blank">
              <v-icon color="secondary"> mdi-instagram </v-icon>
            </v-btn>
          </v-col>
          <v-col cols="2">
            <v-btn text fab small href="https://www.linkedin.com/company/3155872" target="_blank">
              <v-icon color="secondary"> mdi-linkedin </v-icon>
            </v-btn>
          </v-col>
          <v-col cols="2">
            <v-btn text fab small href="mailto:enquiries@icmscholars.org">
              <v-icon color="secondary"> mdi-email </v-icon>
            </v-btn>
          </v-col>
          <v-col cols="2">
            <v-btn text fab small href="https://www.icmscholars.org/" target="_blank">
              <v-icon color="secondary"> mdi-web </v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api';
import { authenticated, uid } from '@/composable/store';
import useAuth from '@/composable/authComposition';

export default defineComponent({
  name: 'NavigationBar',
  setup(_, { root }) {
    const { signout } = useAuth();
    const logout = async () => {
      await signout();
      root.$router.push('/');
    };
    return {
      authenticated,
      id: computed(() => uid.value),

      logout,
    };
  },
});
</script>
