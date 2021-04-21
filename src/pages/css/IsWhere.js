import React from 'react'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {a11yDark} from 'react-syntax-highlighter/dist/esm/styles/prism'
import styled from '@emotion/styled'
import Layout from '../../components/layout'

const IsWhere = () => {
    const SArticle = styled('article')`
        margin: 10px;
        width: 800px;
    `
    const SSect = styled('section')`
        margin-top: 35px;
        margin-bottom: 15px;
    `
    const is1 = `
    div > header,
    div > main > section,
    div > footer {
        border: 1px solid grey;
    } 
    `
    const is2 = `
    :is(div > header, 
        div > main > section, 
        div > footer) {
        border: 1px solid grey;
    } 
    `

    const is3 = `
    :is(div, li, button, a) :is(div, li, button, a) .info {
        color: blue;
    }
    `
    const is4 = `
    div div .info, 
    div li .info, 
    div button .info,
    div a .info,
    li div .info,
    li li .info, 
    li button .info, 
    li a .info,
    button div .info, 
    button li .info, 
    button button .info,
    button a .info,
    a div .info,
    a li .info, 
    a button .info,
    a a .info {
        color: blue;
    }
    `

    return (
        <Layout>
            <SArticle>
                <header>
                    <h1>:is()</h1>
                </header>
                <main>
                    <SSect>
                        :is(), is used where u need to add some property to several selector paths.
                    </SSect>
                    <SSect>
                        Where u used to stack a list of selector paths like so:
                    </SSect>
                    <SyntaxHighlighter language="css" style={a11yDark}>
                        {is1}
                    </SyntaxHighlighter>
                    <SSect>
                        You can instead put them in the :is() psuedo class like so:
                    </SSect>
                    <SyntaxHighlighter language="css" style={a11yDark}>
                        {is2}
                    </SyntaxHighlighter>
                    <SSect>
                        The diffrence is that :is() works with a "forgiving selector list" - whereas
                        the browser will ignore the first rule, if any of the selectors in the list
                        is unsupported, the :is() on the other hand, just ignores the faulty
                        selector!
                    </SSect>
                    <SSect>
                        :is() can also be stacked for a more powerful syntax:
                    </SSect>
                    <SyntaxHighlighter language="css" style={a11yDark}>
                        {is3}
                    </SyntaxHighlighter>
                    <SSect>
                        Where this would equal the following without :is
                    </SSect>
                    <SyntaxHighlighter language="css" style={a11yDark}>
                        {is4}
                    </SyntaxHighlighter>
                </main>
            </SArticle>
            <SArticle>
                <header>
                    <h1>:where()</h1>
                </header>
                <main>
                    <SSect>
                        The difference between :where() and :is() is that :where() always has 0
                        specificity, whereas :is() takes on the specificity of the most specific
                        selector in its arguments.
                    </SSect>
                </main>
            </SArticle>
        </Layout>
    )
}

export default IsWhere