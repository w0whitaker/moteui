/** @format */

// 'setCustomElementsManifest' is required for docs addon to work
import { Preview, setCustomElementsManifest } from '@storybook/web-components';

// in order to import json, 'resolveJsonModule' and 'esModuleInterop' must be set to true in tsconfig.json
import customElements from '../custom-elements.json';

setCustomElementsManifest(customElements);

import '../src/assets/css/main.css';

const preview: Preview = {};

export default preview;
