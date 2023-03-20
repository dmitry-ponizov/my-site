import React from "react"
import { Tab, TabList, TabPanel, Tabs } from "react-tabs"

import SectionTitle from "../../../../components/sectionTitle"

import { JobsWrapper, PanelTitle } from "./styled"

import "react-tabs/style/react-tabs.css"

const Jobs = () => {
  return (
    <JobsWrapper>
      <SectionTitle>
        <span>02.</span>Where I’ve Worked
      </SectionTitle>

      <Tabs>
        <TabList>
          <Tab>Upstatement</Tab>
          <Tab>Scout</Tab>
          <Tab>Apple</Tab>
          <Tab>Scout</Tab>
          <Tab>Starry</Tab>
          <Tab>MullenLowe</Tab>
        </TabList>

        <TabPanel>
          <PanelTitle>
            <span>Engineer</span>
            <a
              className="sectionLink"
              href="https://www.upstatement.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Upstatement
            </a>
            <p>May 2018 - Present</p>
          </PanelTitle>

          <ul>
            <li className="listItem">
              Write modern, performant, maintainable code for a diverse array of
              client and internal projects
            </li>
            <li className="listItem">
              Work with a variety of different languages, platforms, frameworks,
              and content management systems such as JavaScript, TypeScript,
              Gatsby, React, Craft, WordPress, Prismic, and Netlify
            </li>
            <li className="listItem">
              Communicate with multi-disciplinary teams of engineers, designers,
              producers, and clients on a daily basis
            </li>
          </ul>
        </TabPanel>

        <TabPanel>
          <PanelTitle>
            <span>Studio Developer</span>
            <a
              className="sectionLink"
              href="https://www.upstatement.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Scout
            </a>
            <p>January - April 2018</p>
          </PanelTitle>

          <ul>
            <li className="listItem">
              Worked with a team of three designers to build a marketing website
              and e-commerce platform for
            </li>
            <li className="listItem">
              Helped solidify a brand direction for blistabloc that spans both
              packaging and web
            </li>
            <li className="listItem">
              Interfaced with clients on a weekly basis, providing technological
              expertise
            </li>
          </ul>
        </TabPanel>

        <TabPanel>
          <PanelTitle>
            <span>UI Engineer Co-op</span>
            <a
              className="sectionLink"
              href="https://www.upstatement.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Apple
            </a>
            <p>July - December 2017</p>
          </PanelTitle>

          <ul>
            <li className="listItem">
              Developed and shipped highly interactive web applications for
              Apple Music using Ember.js
            </li>
            <li className="listItem">
              Built and shipped the Apple Music Extension within Facebook
              Messenger leveraging third-party and internal APIs
            </li>
            <li className="listItem">
              Architected and implemented the front-end of Apple Music${`&#39;`}
              s embeddable web player widget, which lets users log in and listen
              to full songs in the browser
            </li>
            <li className="listItem">
              Contributed extensively to MusicKit.js, a JavaScript framework
              that allows developers to add an Apple Music player to their web
              apps
            </li>
          </ul>
        </TabPanel>

        <TabPanel>
          <PanelTitle>
            <span>Studio Developer</span>
            <a
              className="sectionLink"
              href="https://www.upstatement.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Scout
            </a>
            <p>January - June 2017</p>
          </PanelTitle>

          <ul>
            <li className="listItem">
              Collaborated with a small team of student designers to spearhead a
              new brand and design system for Scout${`&#39;`}s inaugural
              student-led design conference at Northeastern
            </li>
            <li className="listItem">
              Worked closely with designers and management team to develop,
              document, and manage the conference${`&#39;`}s marketing website
              using Jekyll, Sass, and JavaScript
            </li>
          </ul>
        </TabPanel>

        <TabPanel>
          <PanelTitle>
            <span>Software Engineer Co-op</span>
            <a
              className="sectionLink"
              href="https://www.upstatement.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Starry
            </a>
            <p>July - December 2016</p>
          </PanelTitle>

          <ul>
            <li className="listItem">
              Engineered and maintained major features of Starry${`&#39;`}s
              customer-facing web app using ES6, Handlebars, Backbone,
              Marionette and CSS
            </li>
            <li className="listItem">
              Proposed and implemented scalable solutions to issues identified
              with cloud services and applications responsible for communicating
              with Starry Station
            </li>
            <li className="listItem">
              Interfaced with user experience designers and other developers to
              ensure thoughtful and coherent user experiences across Starry$
              {`&#39;`}s iOS and Android mobile apps
            </li>
          </ul>
        </TabPanel>

        <TabPanel>
          <PanelTitle>
            <span>Creative Technologist Co-op</span>
            <a
              className="sectionLink"
              href="https://www.upstatement.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              MullenLowe
            </a>
            <p>July - December 2015</p>
          </PanelTitle>

          <ul>
            <li className="listItem">
              Developed and maintained code for in-house and client websites
              primarily using HTML, CSS, Sass, JavaScript, and jQuery
            </li>
            <li className="listItem">
              Manually tested sites in various browsers and mobile devices to
              ensure cross-browser compatibility and responsiveness
            </li>
            <li className="listItem">
              Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department
              of Defense, and more
            </li>
          </ul>
        </TabPanel>
      </Tabs>
    </JobsWrapper>
  )
}

export default Jobs
