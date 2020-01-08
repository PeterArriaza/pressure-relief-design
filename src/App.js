import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import DeviceListView from "./components/DeviceListView";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Nav></Nav>
        <Sidebar></Sidebar>
        <DeviceListView></DeviceListView>
      </div>
    );
  }
}
