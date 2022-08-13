import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

const test_movies = [{ label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 }];

export default function ComboBox() {
    
    return (

    <Stack spacing ={2} width='250px'>
        <Autocomplete
        options={test_movies}
        renderInput={(params) => <TextField {...params} label="Movie" />}
      />
    </Stack>
    );
  }
