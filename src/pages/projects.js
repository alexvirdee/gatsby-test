import React from 'react';

class ProjectsPage extends React.Component {
    render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

        return (
            <h1 style={{marginLeft: '25px'}}>PROJECTS</h1>
        )
    }
}

export default ProjectsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`