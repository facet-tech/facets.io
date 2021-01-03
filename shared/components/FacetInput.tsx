import { Input, withStyles } from '@material-ui/core';
import { color } from '../constant';

const CustomInput = withStyles(
    {
        focused: {},
        disabled: {},
        error: {},
        underline: {
            '&:before': {
                borderBottom: 'none'
            },
            '&:after': {
                borderBottom: `2px solid ${color.ice}`
            },
            '&:hover:not($disabled):not($focused):not($error):before': {
                borderBottom: `2px solid ${color.ice}`
            }
        },
        input: {
            '&:-webkit-autofill': {
                transitionDelay: '9999s',
                transitionProperty: 'background-color, color',
            },
        },
    }
)(Input);

export default ({ width = '100%', type, name, id, isMountainWalkWebsite = true, ...other }) => {

    const innerElement = <div>
        <CustomInput
            id={id}
            type={type}
            name={name}
            style={{
                width,
                backgroundColor: color.grayA,
                color: 'white',
                padding: '.3rem',
                borderRadius: '.5rem',
                height: '2rem'
            }}
            id="standard-adornment-weight"
            aria-describedby="standard-weight-helper-text"
            inputProps={{
                'aria-label': 'weight',
            }}
            {...other}
        />
    </div>
    const component = <div>{innerElement}</div>;

    return component;
}