import { IconButton, makeStyles } from '@material-ui/core';
import React, { useEffect } from 'react';
import * as eva from "eva-icons";
import { color } from '../constant';

const useStyles = makeStyles({
    iconButton: {
        padding: '.25rem',
        display: 'grid',
        textAlign: 'center',
        // @ts-ignore
        width: props => props.width ? props.width : '',
    },
    i: {
        display: 'grid',
        // @ts-ignore
        fill: props => props.isSelected ? color.electricB : '',
        "&:hover": {
            fill: color.ice
        }
    }
});

export default ({ name, size = "small", fill = color.lightGray,
    isSelected = true, customHeight, width, iconWidth, iconHeight, children, ...other }) => {
    const classes = useStyles({ isSelected, width });
    useEffect(() => {
        eva.replace();
    }, [name]);

    return <IconButton
        {...other}
        className={classes.iconButton}>
        <i
            style={{
                height: customHeight ? customHeight : ''
            }}
            className={classes.i}
            // @ts-ignore
            fill={fill}
            data-eva={name}
            data-eva-hover="true"
            data-eva-height={iconHeight ? iconHeight : '24'}
            data-eva-width={iconWidth ? iconWidth : '24'}
        />
        {children}
    </IconButton>
}