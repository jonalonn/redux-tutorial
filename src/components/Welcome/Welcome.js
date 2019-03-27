import React from "react";
import s from "./Welcome.module.css";
import Title from "../Title";
import Text from "../Text";

const Welcome = () => (
  <div className={s.Welcome}>
    <Title title="Welcome to the shop of things" />
    <Text text="Something about the shop" />
  </div>
);
export default Welcome;
