import { useState } from 'react'
import { TextField } from '@material-ui/core'
import styled from 'styled-components'
import { color } from '../constant'
import FacetButton, { electricBtnColor } from './FacetButton'
import FacetInput, { electricColor } from './FacetInput'
import FacetLabel from './FacetLabel'
import RadioButtons from './RadioButtons'
import StayUpdated from './StayUpdated'
import { useForm } from 'react-hook-form';
import FacetFormError from './FacetFormError'

const StyledDiv = styled.div`
    display: grid;
    margin-left: 2rem;
    margin-right: 2rem;
`

const StyledForm = styled.form`
    background-color: ${color.darkBlue};
`

const TwoColumnGrid = styled.div`
    display: grid;
    grid-template-columns: 45% 45%;
    grid-gap: 5%;
    justify-content: center;
`

export default function ContactGrid() {

    const { register, errors, handleSubmit, watch } = useForm({})
    const [submitting, setSubmitting] = useState(false)

    const onSubmit = async (data) => {
        setSubmitting(true)
        try {
        } catch (error) {
            setSubmitting(false)
        }
    };

    return (
        <StyledDiv>
            <h2>Want To Get In Touch?</h2>
            <p>We'd love to hear from you! Contact us using the form below and we'll be happy to help answer your questions.</p>
            <h4>Get in touch</h4>
            <TwoColumnGrid>
                <div>
                    <StyledForm onSubmit={(e) => e.preventDefault()}>
                        <br />
                        <TwoColumnGrid>
                            <div>
                                <FacetLabel text="First name" />
                                <div style={{ marginTop: '.5rem' }}>
                                    <FacetInput
                                        name="firstname"
                                        colorStyle={electricColor} />
                                </div>
                            </div>
                            <div>
                                <FacetLabel text="Last name" />
                                <div style={{ marginTop: '.5rem' }}>
                                    <FacetInput
                                        name="lastname"
                                        colorStyle={electricColor} />
                                </div>
                                {errors && errors.lastname && <FacetFormError role="alert" text={errors.lastname.message}></FacetFormError>}
                            </div>
                        </TwoColumnGrid>
                        <br />
                        <TwoColumnGrid>
                            <div>
                                <FacetLabel text="Email*" />
                                <div style={{ marginTop: '.5rem' }}>
                                    <FacetInput
                                        name="email"
                                        inputRef={register({
                                            required: 'Please specify an email',
                                            pattern: {
                                                value: /\S+@\S+\.\S+/,
                                                message: 'Entered value does not match email format',
                                            },
                                        })} colorStyle={electricColor} />
                                </div>
                                <br />
                                {errors && errors.email && <FacetFormError role="alert" text={errors.email.message}></FacetFormError>}
                            </div>
                            <div>
                                <FacetLabel text="Company name" />
                                <div style={{ marginTop: '.5rem' }}>
                                    <FacetInput colorStyle={electricColor} />
                                </div>
                            </div>
                        </TwoColumnGrid>
                        <br />
                        <TwoColumnGrid>
                            <div>
                                <FacetLabel text="Do you currently use Facet?" />
                                <br />
                                <br />
                                <RadioButtons />
                            </div>
                        </TwoColumnGrid>
                        <br />
                        <div style={{}}></div>
                        <div style={{ padding: '1rem' }}>
                            <FacetLabel text="Message" />
                            <br />
                            <br />
                            <TextField
                                style={{ backgroundColor: color.ice, width: '100%' }}
                                id="filled-multiline-static"
                                multiline
                                rows={7}
                                variant="filled"
                            />
                            <br />
                            <br />
                            <FacetButton onClick={handleSubmit(onSubmit)} colorButtonStyle={electricBtnColor} style={{ width: '20%' }} text="Submit" />
                        </div>
                    </StyledForm>
                    <br />
                    <div style={{ padding: '.5rem' }}>
                        <StayUpdated />
                    </div>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <img src="/contact.svg" alt="Facet" />
                </div>
            </TwoColumnGrid>
            <br />
            <br />
            <br />
            <br />
        </StyledDiv>
    )
}