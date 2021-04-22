import React from 'react'
import Layout from '../components/layout'
import styled from '@emotion/styled'

const SA = styled('a')`
    color: rgb(171, 227, 56)
`

const IndexPage = () => {
    return (
        <Layout>
            <main>
                <SA href="/css/IsWhere/">IsWhere</SA>
            </main>
        </Layout>
    )
}

export default IndexPage
