import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";
import styled from "styled-components";

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <ImgContainer>
        <ImgBackground
          src="/images/404/404.svg"
          alt="Error 404 Not found Image"
          align="center"
        />
      </ImgContainer>
    </Layout>
  );
}

export default NotFoundPage;

const ImgContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImgBackground = styled.img`
  width: 400px;
`;
