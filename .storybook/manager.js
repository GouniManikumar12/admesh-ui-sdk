import { addons } from 'storybook/internal/manager-api';
import { create } from 'storybook/internal/theming';

// Custom theme
const theme = create({
  base: 'light',
  brandTitle: 'AdMesh UI SDK',
  brandUrl: 'https://useadmesh.com',
  brandImage: undefined,
  brandTarget: '_self',
});

// Configure addons
addons.setConfig({
  theme,
  panelPosition: 'bottom',
  selectedPanel: 'storybook/docs/panel',
});


