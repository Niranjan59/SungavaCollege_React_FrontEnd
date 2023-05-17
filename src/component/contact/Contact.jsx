import girl_1 from '../../images/girl_1.png'
import './contact.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Contact = () => {
    return (
        <div>
            <div className="container">
                <div className="row contactSection">
                    <div className="contactImage col-lg-6">
                        <img src={girl_1} alt="" />
                    </div>

                    <div className="col-lg-6 mt-4">
                        <div className="row text-center mt-4">
                            <div className="col-lg-12">
                                <h3>Send Us a Message</h3>
                            </div>
                        </div>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': {
                                    m: 1,
                                    width: '70ch',
                                    '@media (max-width: 600px)': {
                                        width: '45ch',
                                    },
                                    '@media (max-width: 380px)': {
                                        width: '40ch',
                                    },

                                },

                            }}
                            noValidate
                            autoComplete="off"
                            className='contactBox'
                        >
                            <TextField id="standard-basic" className='mt-4' type='email' label="Email" variant="standard" />
                            <TextField id="standard-basic" className='mt-4' type='tel' label="Phone Number" variant="standard" />
                            <TextField
                                className='mt-4'
                                id="outlined-multiline-static"
                                label="Message"
                                multiline
                                rows={4}
                                placeholder="Send Us Message"
                            />
                        </Box>

                        <a className="btn-solid-lg page-scroll mt-4" href="#services">
                            Send
                        </a>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contact