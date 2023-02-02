import React from "react";
import  renderer  from "react-test-renderer";
import BlogPageMain from "../BlogPageMain"



test ( "BlogPageMain test snapshot", () => { 
    const component=renderer.create(<BlogPageMain />)
    const tree = component.toJSON(); 
    expect(tree).toMatchSnapshot(); 
})