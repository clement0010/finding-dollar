import Vue from 'vue';
import VueCompositionApi, { ref } from '@vue/composition-api';

import { Leaderboard, Quotas, Team } from '@/common/firestore/type';

Vue.use(VueCompositionApi);

// Team
export const adminTeams = ref<Team[]>([]);
export const teamProfile = ref<Team>();
export const quota = ref<Quotas>([]);
export const leaderboard = ref<Leaderboard>([]);

// Authentication
export const authenticated = ref(true);
export const authLoading = ref(true);
export const authError = ref(false);

export const uid = ref('');

// Snackbar
export const snackbarActivate = ref(false);
export const snackbarMessage = ref('');
export const snackbarStatus = ref('');

// Global State
export const viewCharacter = ref(false);
export const viewTemplate = ref(false);
export const submissionTime = ref('');
