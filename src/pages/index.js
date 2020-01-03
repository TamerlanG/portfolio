import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TextLoop from "react-text-loop";
import styled from "styled-components"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <h2>
        Hello I'm a Software {" "}
        <TextLoop interval={2000}>
          <span>Engineer</span>
          <span>Developer</span>
          <span>Architect</span>
          <span>Builder</span>
          <span>Planner</span>
          <span>Hobbiest</span>
        </TextLoop>
      </h2>
    </Container>
  </Layout>
)

export default IndexPage;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
  transform: translate(-50%);
`