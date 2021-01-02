import FacetButton from './FacetButton';
import FacetLink from './FacetLink';
import styled from 'styled-components';
import { color, fontSize } from '../constant';
import FacetLabel from './FacetLabel';

const MainDiv = styled.div`
    background-color: ${color.facetBlack};
    width: 100%;
    text-align: center;
`;

export default function Navbar() {
    return (
        <MainDiv>
            <FacetLabel color={color.white} fontSize={fontSize.xxLarge} text="Deploy Features Faster" />
            <br />
            <br />
            <FacetLabel color={color.white} fontSize={fontSize.medium} text="Rollout features" />
            <i>
                <FacetLabel color={color.facetBlue} fontSize={fontSize.medium} text=" without code " />
            </i>
            <FacetLabel color={color.white} fontSize={fontSize.medium} text="and improve your team's productivity" />
            <br />
            <br />
            <div>
            </div>
            <div>
                <FacetButton style={{ width: '60%' }} text="Download Our Chrome Extension" onClick={() => { }} />
                <br />
                <FacetLink fontSize={fontSize.large} color={color.ice} variant="contained" type="submit" text="Demo" onClick={() => { }} />
            </div>
        </MainDiv>
    );
}