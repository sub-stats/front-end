import React from 'react';
import { Select, MenuItem, FormHelperText, FormControl } from '@material-ui/core';
import styled from 'styled-components';

const StyledForm = styled.form`
    margin: -1rem 1rem;
    position: relative;
    top: -.5rem;
`;

function SelectSubreddit ({fake, currentSub, setCurrentSub}) {

    const handleChange = (event) => {
        // console.log(currentSub);
        let desc = fake.find((b) => {return b.name === event.target.value})
        setCurrentSub(oldValues => ({
            ...oldValues,
            [event.target.name]: event.target.value,
            description: desc.description,
            topics: desc.topics
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
                        <MenuItem key={a.name} value={a.name}>{a.name}</MenuItem>
                    )})}
                </Select>
                <FormHelperText>Select a subreddit to view its stats.
                </FormHelperText>
            </FormControl>
        </StyledForm>
        

    )
}

export default SelectSubreddit;