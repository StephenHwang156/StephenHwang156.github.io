import React from "react";
import TopNav from "../components/topnav";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import ProjectData from "../data/projects/project_data.json";
import ProjectComponent from "../components/project";
import "../css/index.scss";

const Layout = styled.main`
  display: grid;
  max-width: 1100px;
  margin: auto;
  align-items: center;
  padding: 50px 20px;
  gap: 50px;
`;

const HeadingContainer = styled.div`
  padding: 40px 0;
`;

export default function Projects() {
  return (
    <>
      <TopNav />
      <Layout>
        <HeadingContainer>
          <h1>Projects</h1>
        </HeadingContainer>
        {ProjectData.map((data, index) => {
          return (
            <ProjectComponent
              title={data.title}
              description={data.description}
              image={data.image}
              key={index}
            />
          );
        })}
      </Layout>
    </>
  );
}
