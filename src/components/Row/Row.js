import React from "react";
import Card from "./components/Card";
import "./Row.css";

const Row = props => (
    <div className="row mt-4 mb-4">
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    </div>
);

export default Row;
