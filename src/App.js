import React from "react";
import "./App.css";
import Nav from "./components/Nav"
import Sidebar from "./components/Sidebar"
import DeviceListView from "./components/DeviceListView"

export default function App() {
  return (
  <Nav />
  <Sidebar />
  <DeviceListView />
  )
}
