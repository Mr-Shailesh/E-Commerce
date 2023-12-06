import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import "./Loader.css";

const Loader = () => (
  <div>
    <Spin
      indicator={
        <LoadingOutlined
          style={{
            fontSize: 35,
          }}
          spin
        />
      }
    />
  </div>
);
export default Loader;
