import React from "react";
import firebase from "firebase";
import firebaseMock from "firebase-mock"
import  renderer  from "react-test-renderer";
import BlogPageMain from "../BlogPageMain"

const mockAuth = new firebaseMock.MockFirebase();
const mockDatabase = new firebaseMock.MockFirebase();
const mockFirestore = new firebaseMock.MockFirestore();

const mockApp = firebaseMock.MockFirebaseSdk(
  (path) => {
    return path ? mockDatabase.child(path) : mockDatabase;
  },
  () => {
    return mockAuth;
  },
  () => {
    return mockFirestore;
  }
);

firebase.initializeApp(mockApp);


test ( "BlogPageMain test snapshot", () => { 
    const component=renderer.create(<BlogPageMain />)
    const tree = component.toJSON(); 
    expect(tree).toMatchSnapshot(); 
})