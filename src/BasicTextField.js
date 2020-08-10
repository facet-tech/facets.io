import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AppContext from './AppContext';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function BasicTextField() {
    const { onFacetAdd } = useContext(AppContext);
    console.log('appContext', useContext(AppContext));
    const classes = useStyles();

    const keyPress = (e) => {
        if (e.keyCode === 13) {
            onFacetAdd(e.target.value);
        }
    }

    return (
        <div onKeyDown={keyPress} className={classes.root}>
            <TextField id="filled-basic" label="Name your Facet" variant="outlined" />
        </div>
    );
}