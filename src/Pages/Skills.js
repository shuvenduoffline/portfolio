import React from 'react';
import Logo from '../assets/logo.svg';
import HiSVG from '../assets/hello.svg';
import ComputerSVG from '../assets/computer.svg';
import DownSVG from '../assets/downarrow.svg';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
         minHeight : '100vh',
         backgroundColor: '#000000'
    }
  });

const Skills = () => {
    const classes = useStyles();

    return (
         <div className={classes.root} id="skills">
             Skills
        </div>
    );
}

export default Skills;
