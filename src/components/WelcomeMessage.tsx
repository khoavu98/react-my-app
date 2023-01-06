import { Box } from "@mui/material"
import React from 'react';

interface IWelcomeMessageProps {
    position : string,
    country : string
}
const WelcomeMessage = (props : IWelcomeMessageProps) => {
    return (
        <Box mb={1}>
            Welcome {props.position} from {props.country}
        </Box>
    )
}

export default WelcomeMessage