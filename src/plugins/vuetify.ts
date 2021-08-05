import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import { VuetifyParsedTheme, VuetifyThemeCache } from 'vuetify/types/services/theme';

import minifyTheme from 'minify-css-string';

Vue.use(Vuetify);

const opts = {
  theme: {
    themes: {
      light: {
        anchor: '#0E49A6',
        primary: '#F3F3FF',
        secondary: '#0E49A6',
        accent1: '#07BF9B',
        accent2: '#C7C7E4',
        accent3: '#979797',
        white: '#FFFFFF',
        grey: '#7575A9',
        black: '#000000',
        success: '#07BF9B',
        warning: '#FBC046',
        error: '#E10050',
      },
    },
    options: {
      themeCache: {
        get: (key: VuetifyParsedTheme) => localStorage.getItem(key as unknown as string),
        set: (key: VuetifyParsedTheme, value: string) =>
          localStorage.setItem(key as unknown as string, value),
      } as VuetifyThemeCache,
      variations: false,
      minifyTheme,
    },
  },
};

export default new Vuetify(opts);
