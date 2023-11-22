import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout style={{ height: "100vh" }}>
      <Content className="site-layout" style={{ margin: "20px" }}>
        <div>{children}</div>
      </Content>
    </Layout>
  );
}
