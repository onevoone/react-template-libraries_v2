import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';


export const parameters = {
  actions: { argTypesRegex: '^on.*' },
  viewport: {
    viewports: MINIMAL_VIEWPORTS,
  },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
