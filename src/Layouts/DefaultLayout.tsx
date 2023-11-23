import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import React from "react";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Layout style={{ height: "100vh", backgroundColor: "white" }}>
        <Content className="site-layout" style={{ margin: "20px" }}>
          <div>{children}</div>
        </Content>
      </Layout>
    </div>
  );
};
export default DefaultLayout;
