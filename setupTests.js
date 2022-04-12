// optional: configure or set up a testing framework before each test
// if you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// used for __tests__/testing-library.js
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      onchange: null,
      addListener: function () {},
      removeListener: function () {},
    };
  };

jest.mock('@bugsnag/js');

jest.mock('next/config', () =>
  jest.fn().mockReturnValue({
    serverRuntimeConfig: {},
    publicRuntimeConfig: {},
  }),
);

jest.mock('react-i18next', () => ({
  // this mock makes sure any components using the translate HoC receive the t function as a prop
  withTranslation: () => (Component) => {
    Component.defaultProps = { ...Component.defaultProps, t: (key) => key };
    return Component;
  },
}));

jest.mock('next/dynamic', () => {
  return jest.fn(() => 'Dynamic');
});
