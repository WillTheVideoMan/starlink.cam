import React from "react"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    html,body,#___gatsby, #gatsby-focus-wrapper{
        margin:0;
        height:100%;
    }
`

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    {children}
  </>
)

export default Layout
