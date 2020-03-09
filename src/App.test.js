import React from 'react';
import { render } from '@testing-library/react';
import { create } from "react-test-renderer";
import Header from "./component/Header"

describe("Button component", () => {
  test("Matches the snapshot", () => {
    const header = create(<Header />);
    expect(header.toJSON()).toMatchSnapshot();
  });
});