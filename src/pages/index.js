import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

import './index.styles.css';

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Alex Virdee"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <div className='header'>
         <a className='header-link' href="http://alexvirdee.com/">
          Portfolio
        </a>
        <Link className='header-link' to="/blog">
          View Posts
        </Link>
        {/* <a className='header-link' href="./alexvirdee-developer.pdf">
          Resume
        </a> */}
      </div>
        <img style={{ margin: 0 }} src="./423.jpg" alt="Web Developer" />
        <h1>
          Hello World{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>I am a web developer based in Miami, Fl.</p>
        <p>
          I studied Business Administration at the University of Central Florida
          & after graduating taught myself how to build software. I want to
          share my journey of getting into the industry without a traditional
          Computer Science degree. Software is incredibly rewarding and i'm
          excited to share details both about technology as well as different topics
          and hobbies that i'm interested in.{" "}
        </p>
        <p>
          {" "}
          I am enjoying the process of writing and getting some of my ideas and
          thoughts on here. I hope you may find some my posts helpful or
          interesting.
        </p>
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
