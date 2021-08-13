<template>
  <v-container fluid class="pa-0 ma-0">
    <v-form class="pa-5" ref="form" v-model="valid">
      <v-card class="rounded-b-xl elevation-2" color="primary" width="650" :loading="loading">
        <template slot="progress">
          <v-progress-linear color="accent1" height="5" indeterminate></v-progress-linear>
        </template>
        <v-card-title
          class="justify-center secondary--text font-weight-bold text-h3"
          style="text-shadow: 0px 3px 2px #000000"
        >
          ICM$ SG:<br />
          FINDING DOLLAR
        </v-card-title>
        <v-row dense justify="center" align="center">
          <v-col cols="6">
            <v-text-field
              v-model="user.email"
              outlined
              color="secondary"
              hint="Required"
              label="Email Address"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-account'"
              :rules="[requireInputRule, validEmailRule]"
            />
          </v-col>
        </v-row>
        <v-row dense justify="center" align="center">
          <v-col cols="6">
            <v-text-field
              v-model="user.password"
              outlined
              color="secondary"
              hint="Required"
              label="Password"
              :type="showPassword ? 'text' : 'password'"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[requireInputRule]"
              @click:append="showPassword = !showPassword"
              :error="authError"
              :error-messages="authError ? 'Wrong Password' : ''"
            />
          </v-col>
        </v-row>
        <v-row no-gutters justify="center" class="secondary">
          <v-card-actions>
            <v-btn class="white--text" type="submit" text block @click="authenticateUser">
              Login <v-icon right color="white">mdi-play-circle</v-icon>
            </v-btn>
          </v-card-actions>
        </v-row>
      </v-card>
    </v-form>
  </v-container>
</template>

<script lang="ts">
import useAuth from '@/composable/authComposition';
import { defineComponent, reactive } from '@vue/composition-api';
import { uid, authError } from '@/composable/store';

import { requireInputRule, validEmailRule } from '@/common/validation';

export default defineComponent({
  name: 'FormLogin',
  setup(_, { root }) {
    const configuration = reactive({
      valid: true,
      showPassword: false,
    });

    const { login, error, loading } = useAuth();

    const user = reactive({
      email: '',
      password: '',
    });

    const authenticateUser = async (e: Event) => {
      e.preventDefault();
      const { email, password } = user;
      if (!email && !password) {
        return;
      }
      try {
        await login(email, password);

        const id = uid.value;

        if (!id) {
          console.log('Wrong credentials!');
          user.email = '';
          user.password = '';
          return;
        }

        if (id === 'admin') {
          console.log('Id', { id });
          root.$router.push({ name: 'Admin' });
          return;
        }

        if (id) {
          console.log('Id2', { id });
          root.$router.push({ name: 'Profile', params: { id } });
        }
      } catch (err) {
        console.error(err);
      }
    };

    return {
      // Input
      user,

      // Input validation
      ...configuration,
      requireInputRule,
      validEmailRule,

      // Login
      error,
      loading,
      authError,
      authenticateUser,
    };
  },
});
</script>
