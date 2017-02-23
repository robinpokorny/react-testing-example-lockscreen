// Uses Jest Snapshots
import React from "react";
import renderer from 'react-test-renderer'

import LockScreen from "./LockScreen";

describe("LockScreen", () => {

  test('renders without props', () => {
    const tree = renderer.create(
      <LockScreen />
    ).toJSON()

    expect(tree).toMatchSnapshot('no-props')
  })

  test('renders with all props passed', () => {
    const tree = renderer.create(
      <LockScreen
        onUnlocked={jest.fn()}
        userInfoMessage='This is my favorite phone!'
        wallpaperPath='some/image.png'
      />
    ).toJSON()

    expect(tree).toMatchSnapshot('with-props')
  })

});
