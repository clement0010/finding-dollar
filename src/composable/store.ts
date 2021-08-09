import Vue from 'vue';
import VueCompositionApi, { ref } from '@vue/composition-api';

import { Quotas, Team } from '@/common/firestore/type';

Vue.use(VueCompositionApi);

// Team
export const teamProfile = ref<Team>();
export const quota = ref<Quotas>([]);

// Authentication
export const authenticated = ref(true);
export const authLoading = ref(true);
export const authError = ref(false);

export const uid = ref('');

// Snackbar
export const snackbarActivate = ref(false);
export const snackbarMessage = ref('');
export const snackbarStatus = ref('');
