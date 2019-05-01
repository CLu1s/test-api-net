import React, { useState, useEffect } from 'react';
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  let [data,setData] = useState(null)
  useEffect(() => {
    // Update the document title using the browser API
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => {
      setData(json)
    })
  })
return (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi Isaac !</h1>
    <p>La informacion recibida es:</p>
    {data ? Object.keys(data).map(obj => <div key={data[obj].id}>{data[obj].title}</div>): "nada aun" }
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
  )
}

export default IndexPage
