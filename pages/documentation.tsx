
import Head from 'next/head'
import Documentation from '../shared/components/Documentation'
import ContentContainer from '../shared/components/ContentContainer'
import Navbar from '../shared/components/Navbar'
import styled from 'styled-components'
import TOC from '../shared/components/TOC'
import AppProvider from '../shared/components/AppProvider'
import { pages } from '../shared/components/AppContext'

const StyledDiv = styled.div`
    display: grid;
    grid-template-columns: 20% 80%;
    margin-left: 2rem;
    margin-right: 2rem;
`;

const StickyDiv = styled.div`
    position: sticky;
    top: 0px;
`

const InnerStickyDiv = styled.div`
    position: sticky;
    top: 0px;
`

export default function DocumentationPage() {
    return (
        <AppProvider>
            <div>
                <Head>
                    <title>Facet</title>
                    <link rel="icon" href="/favicon.ico" />
                    <script src="https://api.facet.ninja/facet.ninja.js?id=DOMAIN~ZTM5OTEwOTYtNzM2Mi00OWZmLWJmOWUtNjQ4MjE5NjFhYTEx"></script>
                </Head>
                <ContentContainer >
                    <Navbar activePage={pages.Documentation} />
                </ContentContainer>
                <ContentContainer hasPadding={false}>
                    <StyledDiv>
                        <StickyDiv>
                            <InnerStickyDiv />
                            <TOC />
                            <InnerStickyDiv />
                        </StickyDiv>
                        <div>
                            <Documentation />
                        </div>
                    </StyledDiv>
                </ContentContainer>
            </div>
        </AppProvider>
    )
}
