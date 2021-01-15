import styled from 'styled-components';
import { color } from '../constant';
import FacetIconButton from './FacetIconButton';
import Link from 'next/link'
import FacetLabel from './FacetLabel';
import { pages } from './AppContext'
import FacetButton, {blackBtnColor} from "./FacetButton";

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: 40% 5% 5% 0% 5% 5% 5%;
    column-gap: 2%;
    align-items: center;
    justify-content: center;
    justify-items: center;
`;

const InnerDiv = styled.div`
    display: grid;
    grid-template-columns: 3rem 3rem;
    cursor: pointer;
`;

const MainDiv = styled.div`
    background-color: ${color.white};
    width: 100%;
    grid-template-columns: 100% 10% 20%;
`;

const LabelContainer = styled.div`
    cursor: pointer;
`

export default function Navbar({ activePage = '' }) {
    return (
        <MainDiv>
            <StyledGrid>
                <Link href="/">
                    <InnerDiv>
                        <div>
                            <img src="/facet_black.svg" alt="Facet logo" />
                        </div>
                        <div style={{ alignSelf: 'center' }}>
                            <img src="/facet_typography_black.svg" alt="Facet" />
                        </div>
                    </InnerDiv>
                </Link>
                <div>
                    <Link href="/pricing">
                        <LabelContainer isActive={pages.Pricing === activePage}>
                            <FacetLabel color={color.black} text={pages.Pricing} />
                        </LabelContainer>
                    </Link>
                </div>
                <div>
                    <Link href="/documentation">
                        <LabelContainer isActive={pages.Documentation === activePage}>
                            <FacetLabel color={color.black} text={pages.Documentation} />
                        </LabelContainer>
                    </Link>
                </div>
                <div>
                    <Link href="/blog">
                        <LabelContainer isActive={pages.Blog === activePage}>
                            <FacetLabel color={color.black} text={pages.Blog} />
                        </LabelContainer>
                    </Link>
                </div>
                <div>
                    <Link href="/contact">
                        <LabelContainer isActive={pages.Contact === activePage}>
                            <FacetLabel color={color.black} text="Contact" />
                        </LabelContainer>
                    </Link>
                </div>
                <div>
                    <Link href="https://github.com/facets-io">
                        <a target="_blank">
                            <div style={{ cursor: 'pointer' }}>
                                {/* @ts-ignore */}
                                <FacetLabel color={color.black} text='GitHub' />
                            </div>
                        </a>
                    </Link>
                </div>
                <div>
                    <FacetButton colorButtonStyle={blackBtnColor} text="Download" onClick={() => { }} />
                </div>
            </StyledGrid>
        </MainDiv>
    );
}