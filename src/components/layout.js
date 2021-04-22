import React from "react"
import { Global, css } from '@emotion/react'
import styled from "@emotion/styled"
const Wrapper = styled('div')`
  border: 2px solid green;
  padding: 10px;
`
export default function Layout({ children }) {
    return (
        <Wrapper>
            <Global
                styles={css`
          div {
            background: #222;
            color: #bbb;
            padding: 10px;
            font-family: 'Work Sans', sans-serif;
            font-size: large;
          }
          h1 {
            color: rgb(171, 227, 56);
          }
        `}
            />
            {children}
        </Wrapper>
    )
}