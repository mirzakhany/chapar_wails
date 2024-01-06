import React, { useState } from 'react';
import { Box, FormControl, Select, MenuItem, InputLabel, TextField, Button, Typography } from '@mui/material';
import {SelectChangeEvent} from "@mui/material/Select";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import {styled } from '@mui/material/styles';

const RequestNameField = styled(TextField)({
    '& .MuiInputBase-input': {
        padding: '4px 8px',
    },
    '& .MuiInputLabel-root': {
        fontSize: '12px',
        transform: 'translate(14px, 14px) scale(1)',
    },
    '& .MuiOutlinedInput-notchedOutline': {
        borderWidth: '0px',
    }
});

function RestRequest() {
    const [method, setMethod] = useState('GET');
    const [url, setUrl] = useState('');
    const [requestBody, setRequestBody] = useState('');
    const [response, setResponse] = useState('');

    const handleMethodChange = (event:SelectChangeEvent) => {
        setMethod(event.target.value);
    };

    const handleUrlChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setUrl(event.target.value);
    };

    const handleRequestBodyChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setRequestBody(event.target.value);
    };

    const handleSendRequest = async () => {
        // Implement the logic to send the request here.
        // Update the response state with the actual response from the server.
        setResponse('Response data here...');
    };

    return (
        <Box sx={{ paddingTop: '10px', margin: 'auto' }}>
            <Breadcrumbs
                sx={{ marginBottom: '12px' }}
                aria-label="breadcrumb">
                <Typography color="text.primary">Example</Typography>
                <RequestNameField placeholder={"Create user"} size={"small"} />
            </Breadcrumbs>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '2px', marginBottom: '20px' }}>
                <FormControl sx={{ minWidth: 120 }} size="small">
                    <Select
                        value={method}
                        displayEmpty
                        onChange={handleMethodChange}
                        inputProps={{ 'aria-label': 'Method' }}
                    >
                        <MenuItem value={'GET'}>GET</MenuItem>
                        <MenuItem value={'POST'}>POST</MenuItem>
                        <MenuItem value={'PUT'}>PUT</MenuItem>
                        <MenuItem value={'DELETE'}>DELETE</MenuItem>
                        <MenuItem value={'HEAD'}>HEAD</MenuItem>
                        <MenuItem value={'OPTION'}>OPTION</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={url}
                    onChange={handleUrlChange}
                    inputProps={{ 'aria-label': 'URL' }}
                    placeholder={'https://example.com/api/users'}
                />
                <Button
                    sx={{
                        minWidth: '100px',
                        marginRight: '10px',
                        marginLeft: '5px',
                    }}
                    variant="contained" onClick={handleSendRequest}>
                    Send
                </Button>
            </Box>
            <TextField
                label="Request Body"
                variant="outlined"
                size="small"
                fullWidth
                multiline
                rows={4}
                value={requestBody}
                onChange={handleRequestBodyChange}
                sx={{ marginBottom: '20px' }}
            />
            <Typography variant="h6">Response</Typography>
            <TextField
                variant="outlined"
                size="small"
                fullWidth
                multiline
                rows={6}
                value={response}
                InputProps={{
                    readOnly: true,
                }}
            />
        </Box>
    );
}

export default RestRequest;
