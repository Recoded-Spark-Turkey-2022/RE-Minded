import React from "react";
import  renderer  from "react-test-renderer";
import NaveBar from "../Navbar";


test ('Navbar test snapshot', () => {
    const tree = renderer.create(<NaveBar />).toJSON
    expect(tree).toMatchSnapshot();
});

