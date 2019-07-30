import React from 'react';
import { Select, MenuItem, InputLabel, FormHelperText, FormControl } from '@material-ui/core';
import { Colors } from '../../Style-Colors';
import styled from 'styled-components';

const StyledForm = styled.form`
    margin: 0 1rem;

    position: relative;
    top: -.5rem;
`;

function SelectSubreddit ({fake, currentSub, setCurrentSub}) {

    
    const handleChange = (event) => {
        console.log(currentSub);
        setCurrentSub(oldValues => ({
            ...oldValues,
            [event.target.name]: event.target.value,
        }));
    }

    return (
        <StyledForm>
            <FormControl>
                <Select
                    name="name"
                    value={currentSub.name}
                    onChange={handleChange}
                    autoWidth={true}>
                    {fake.map( a => {
                        return (
                        <MenuItem key={a} value={a}>{a}</MenuItem>
                    )})}
                </Select>
                <FormHelperText>Select a subreddit to view its stats.
                </FormHelperText>
            </FormControl>
        </StyledForm>
        

    )
}

export default SelectSubreddit;