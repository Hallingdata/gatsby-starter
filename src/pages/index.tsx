import * as image from "../content/index/row1.jpg"

import * as React from "react"
import Link from "gatsby-link"
import { Grid, Row, Col } from "react-flexbox-grid"

import HtmlRenderComponent from "../components/html-render"

const IndexPage = ({ data }: { data: any }) => (
  <Grid fluid>
    <Row>
      <Col xs={12} >
        <HtmlRenderComponent content={data.row1.childMarkdownRemark.html} />
      </Col>
    </Row>
  </Grid>
)

export default IndexPage

export const pageQuery = graphql`
  query PromoContent {
    row1: file(relativePath: { eq: "content/index/row1.md" }) {
      childMarkdownRemark {
        html
        timeToRead
      }
    }
  }
`
