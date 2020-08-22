import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import { withStyles } from "@material-ui/core/styles";
import { useSnackbar } from 'notistack';

const StyledDiv = styled.div`
    width: 35rem;
    margin-left: 2rem;
    margin-top: .5rem;
`;

const GridDiv = styled.div`
    display: grid;
    grid-template-columns: 60% 30%;
    grid-gap: .5rem;
`;

const styles = {
    root: {
        background: 'white'
    },
    input: {
        color: 'white'
    },
};

const Subscribe = (props) => {

    const { classes } = props;
    const { enqueueSnackbar } = useSnackbar();
    const [emailValue, setEmailValue] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        fetch('https://ninja.us17.list-manage.com/subscribe/post?u=8be72dd4e67ab3df3baeae4ff&amp;id=cd4710e2ed', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(emailValue),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                enqueueSnackbar(`Success! Thank you for subscribing to facet.ninja`, { variant: "success" });

            })
            .catch((error) => {
                console.error('Error:', error);
                enqueueSnackbar(`Oops. It's not you. Something went wrong 😞 We couldn't subscribe you.`, { variant: "error" });
            });
    }


    return <div>
        <StyledDiv >
            <form onSubmit={onSubmit} className='validate'>
                <div>
                    <h2 className={classes.input}>Get our newsletter</h2>
                    <div>
                        <GridDiv>
                            <TextField
                                className={classes.root}
                                id="filled-secondary"
                                label="example@domain.com"
                                variant="filled"
                                color="secondary"
                                value={emailValue}
                                onChange={(e) => { setEmailValue(e.target.value) }}
                                type="email" name="EMAIL" placeholder="example@domain.com"></TextField>
                            {/* <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" placeholder="example@domain.com" /> */}
                            <Button size='medium' variant="contained" color="secondary" type="submit" value="Subscribe" name="subscribe" >Subscribe</Button>
                        </GridDiv>
                    </div>
                    <div id="mce-responses" class="clear">
                        <div class="response" id="mce-error-response"></div>
                        <div class="response" id="mce-success-response"></div>
                    </div>

                    {/* <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button" />
                </div> */}
                </div>
            </form>
        </StyledDiv>
    </div>
}

export default withStyles(styles)(Subscribe);
