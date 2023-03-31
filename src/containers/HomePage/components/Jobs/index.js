import React from "react"
import { Tab, TabPanel } from "react-tabs"
import { graphql, useStaticQuery } from "gatsby"

import SectionTitle from "../../../../components/sectionTitle"

import { JobsWrapper, PanelTitle, TabsContainer, TabsWrapper } from "./styled"

const Jobs = () => {
  const data = useStaticQuery(graphql`
    query {
      mdx(frontmatter: { section: { eq: "jobs" } }) {
        frontmatter {
          jobsTitle
          tabList
          tabPanels {
            company
            position
            period
            companyLink
            panelList
          }
        }
      }
    }
  `)

  const { tabPanels, tabList, jobsTitle } = data.mdx.frontmatter

  return (
    <JobsWrapper id="jobs">
      <SectionTitle>
        <span>02.</span>
        {jobsTitle}
      </SectionTitle>

      <TabsContainer
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-once="true"
      >
        <TabsWrapper>
          {tabList.map((tablistItem, index) => (
            <Tab key={index}>{tablistItem}</Tab>
          ))}
        </TabsWrapper>

        {tabPanels.map(
          ({ company, companyLink, panelList, period, position }, index) => (
            <TabPanel key={index}>
              <PanelTitle>
                <span>{position}</span>
                <a
                  className="sectionLink"
                  href={companyLink}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {company}
                </a>
                <p>{period}</p>
              </PanelTitle>

              <ul>
                {panelList.map((panelListItem, index) => (
                  <li key={index} className="listItem">
                    {panelListItem}
                  </li>
                ))}
              </ul>
            </TabPanel>
          )
        )}
      </TabsContainer>
    </JobsWrapper>
  )
}

export default Jobs
