import React from 'react';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';

import Display from './Display';

describe('<Display />', () => {
  it('renders the count of balls and strikes passed in', () => {
    const { getByText, debug } = render(<Display balls="3" strikes="2" />);
    debug();
    // console.log('body', document.body.outerHTML);

    getByText(/3 balls/i);
    getByText(/2 strikes/i);
  });

  it('unmounts component after each test', () => {
    console.log(document.body.outerHTML);
  });
});

/*
- [x] display the count of `balls` and `strikes` for the at-bat.

- resets both balls and strikes to 0 when a player reaches 3 strikes or 4 balls.
- resets both balls and strikes to 0 when a player connects any type of hit.
*/
