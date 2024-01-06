import Typography from "@mui/material/Typography";
import React from "react";
import {Divider, FormControl, MenuItem} from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";


function TopBar() {
    const [activeEnv, setActiveEnv] = React.useState('none');

    const handleChange = (event: SelectChangeEvent) => {
        if (event.target.value === 'env-item-add-new') {
            console.log('Add new env');
            return;
        }
        setActiveEnv(event.target.value);
    };

    return (
        <Box
            color="primary"
            sx={{
                width: '100%',
                borderBottom: (t) => `1px solid ${t.palette.divider}`,
            }}
        >
                <Grid container
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      spacing={1}
                >
                    <Grid item xs={"auto"}>
                        <Typography variant="h6" color="inherit" noWrap style={{marginLeft: '20px'}}>
                            Chapar
                        </Typography>
                    </Grid>
                    <Grid item xs style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Box display="flex" alignItems="center" height="100%">
                            <FormControl  sx={{ m: '8px', minWidth: '200px' }} size="small">
                                <Select
                                    size={"small"}
                                    value={activeEnv}
                                    onChange={handleChange}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Select' }}
                                >
                                    <MenuItem value={'none'}>No Environment</MenuItem>
                                    <Divider />
                                    <MenuItem value={'Prod'}>Prod</MenuItem>
                                    <MenuItem value={'Dev'}>Dev</MenuItem>
                                    <Divider />
                                    <MenuItem value={"env-item-add-new"}>Add new</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>
                </Grid>
        </Box>
    )
}

export default TopBar;