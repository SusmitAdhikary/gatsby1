import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import Menu from "./menu"
import '../styles/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import icon from '../../static/img/gatsby-icon.png'


const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  header = (
      <h1
        style={{
          ...scale(.5),
          marginBottom: rhythm(.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
         <div style={{ maxWidth: `80px`, marginBottom: `-1rem` }}>
          <img src={ icon } title={title}/>
        </div>
        </Link>
      </h1>
    )
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
			<Menu />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
