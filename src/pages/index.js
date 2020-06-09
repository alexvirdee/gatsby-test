import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Alex Virdee"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <img style={{ margin: 0 }} src="./web_developer.svg" alt="Web Developer" />
        <h1>
          Hello World{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>Welcome to my blog!</p>
        <p>I am a web developer based in Miami, Fl. 🌴</p>
        <p>I studied Business Administration at the University of Central Florida & after graduating taught myself how to build software. I want to share my journey of getting into the industry without a traditional Computer Science degree & realizing fulfillment from a career in tech. I am enjoying the process of writing and getting some of my ideas and thoughts on here. I hope you may find some my posts helpful or interesting.</p>
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
