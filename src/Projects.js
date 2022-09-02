import React from "react";

import PopcornPic from './popcorn.jpg'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import ComboBox from "./Autocomplete";

 // REMEMBER TO MAKE A SONG OF THE DAY SECTION

function Projects(){

    return (

        <div class="sidebar">
            <div class="one-word-per-line">
                movie recommendation algorithm
            </div>
            <img src={PopcornPic} alt="popcorn"/>
        </div>

    );

}

export default Projects;