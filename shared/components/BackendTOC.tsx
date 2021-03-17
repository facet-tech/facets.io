import FacetLabel from "./FacetLabel";
import styled from 'styled-components';
import { backendDocumentationIds, color, documentationIds, fontSize } from "../constant";
import { useEffect, useState } from "react";
import React from "react";

const MainDiv = styled.div`
    background-color: ${color.secondaryGray};
    width: 100%;
    position: sticky;
    border-radius: 5%;
    width: 195px;
    top: 7rem;
    width: 195px;
`;

const PaddingDiv = styled.div`
    padding: .55rem;
    cursor: pointer;
`;

const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView(true);
        window.scrollBy(0, -100);
    }
}

export default function FrontendTOC() {
    const [activePage, setActivePage] = useState(documentationIds.facetTitle);

    // TODO abstract this
    const listenScrollEvent = e => {
        if (window.scrollY < document.getElementById(backendDocumentationIds.introduction)?.offsetTop) {
            setActivePage(backendDocumentationIds.introduction);
        } else if (window.scrollY > document.getElementById(backendDocumentationIds.introduction)?.offsetTop && window.scrollY < document.getElementById(documentationIds.install)?.offsetTop) {
            setActivePage(backendDocumentationIds.install);
        } else if (window.scrollY > document.getElementById(backendDocumentationIds.install)?.offsetTop && window.scrollY < document.getElementById(backendDocumentationIds.configure)?.offsetTop) {
            setActivePage(documentationIds.addDomainToWorkspace);
        } else if (window.scrollY > document.getElementById(backendDocumentationIds.configure)?.offsetTop && window.scrollY < document.getElementById(backendDocumentationIds.verify)?.offsetTop) {
            setActivePage(documentationIds.facetDeclaration);
        } else if (window.scrollY > document.getElementById(backendDocumentationIds.verify)?.offsetTop && window.scrollY < document.getElementById(backendDocumentationIds.apply)?.offsetTop) {
            setActivePage(documentationIds.preview);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);
    }, []);

    const TocItem = (id, text) => <PaddingDiv onClick={() => { scrollTo(id) }}>
        <div style={{ backgroundColor: activePage === id ? color.primary : color.secondaryGray, padding: ".5rem", borderRadius: ".51rem" }} >
            <FacetLabel color={activePage === id ? color.white : color.black} fontSize={fontSize.medium} fontFamily={"Roboto"} fontWeight={400} text={text} />
        </div>
    </PaddingDiv>

    return (
        <MainDiv>
            {TocItem(backendDocumentationIds.introduction, backendDocumentationIds.introduction)}
            {TocItem(backendDocumentationIds.install, backendDocumentationIds.install)}
            {TocItem(backendDocumentationIds.configure, backendDocumentationIds.configure)}
            {TocItem(backendDocumentationIds.verify, backendDocumentationIds.verify)}
            {TocItem(backendDocumentationIds.apply, backendDocumentationIds.apply)}
        </MainDiv>
    );
}