/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const ProjectsTemplate = path.resolve("./src/templates/project.js")
  const result = await graphql(`
    {
      allWordpressWpProjects {
        edges {
          node {
            title
            acf {
              description
              image {
                source_url
              }
              tech_stack {
                label
              }
            }
            id
            slug
          }
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  const Projects = result.data.allWordpressWpProjects.edges;
  Projects.forEach(project => {
    createPage({
      path: `/project/${project.node.slug}`,
      component: ProjectsTemplate,
      context: {
        id: project.node.wordpress_id,
      },
    });
  });

}