const color = {
    electricA: '#5979D9',
    electricB: '#758EBF',
    ice: '#C4DDF2',
    lightGray: '#8B8E93',
    grayA: '#4A4E59',
    grayB: '#BABABA',
    grayB2: '#272D37',
    darkGray: '#181D26',
    darkestGray: '#13171E',
    black: '#000000',
    redError: '#CD0F11',
    menuDivider: '#696969',
    white: '#FFFFFF',
    facetBlue: '#4AACFF',
    menuColor: {
        red: '#ED4D4D',
        lightGreen: '#8EB914',
        lightBlue: '#23E7DB',
        lightPurple: '#927EE2',
        green: '#00D222'
    },
    skyBlue: '#C4DDF2',
    darkBlue: '#292E36',
    green: '#33DDB4',
    darkGreen: '#33DD00',
    darkerGreen: '#33FF12',
    pricingBlack: '#1E232B',
    pricingGray: '#F9F9F9',
    pricingLightGray: '#1D242E',
    pricingDivDark: '#212934',
    primary: '#9D1757',
    primaryGray: "#9D989E",
    secondaryGray: '#F3F3F3'
};

const mountainWalkColors = {
    gray: '#262626',
}

const snackbar = {
    success: {
        text: 'success',
        iconName: 'checkmark-circle-2-outline',
        fill: 'green'
    },
    error: {
        text: 'error',
        iconName: 'alert-circle-outline',
        fill: color.redError
    },
    info: {
        text: 'info',
        iconName: 'message-circle-outline',
        fill:  color.white
    }
};

const documentationIds = {
    facetTitle: 'documentation-facet-title',
    facetDeclaration: 'documentation-facet-declaration',
    holdOffRollOut: 'documentation-hold-off-rollout',
    oneLineCodeIntegration: 'documentation-one-line-code-integration',
    faq: 'documentation-faq'
}

const fontSize = {
    xxSmall: 'xx-small',
    xSmall: 'x-small',
    small: 'small',
    medium: 'medium',
    large: 'large',
    xLarge: 'x-large',
    xxLarge: 'xx-large',
    xxxLarge: 'xxx-large'
};

const allFacets = {
    facet1: 'Facet-Logo',
    facet2: 'Facet-Menu',
    facet3: 'Facet-Label',
    facet4: 'Facet-Search',
    facet5: 'Facet-Content'
};

export {
    color, fontSize, allFacets, mountainWalkColors, documentationIds, snackbar
};
