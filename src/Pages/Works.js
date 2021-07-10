import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TentCafeImg from '../assets/tent_cafe.PNG';
import BloodBankImg from '../assets/blood_bank.png';
import WorkUnit from '../Component/WorkUnit';
import WorkUnitLeft from '../Component/WorkUnitLeft';




const useStyles = makeStyles({
    root: {
        // border: '1px solid red',
        height : 'wrap-content',
        backgroundColor: '#000000',
        paddingTop: 20
    },
    heading: {
        fontFamily: 'Poppins',
        color: 'white',
        fontWeight: 1000,
        fontSize: 35,
    }

  });

const Works = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
             <h2 className={classes.heading}>My Works</h2>
             <p className={classes.description}>If something has to be designed and invented, and you have to figure out how to ensure that the value of the thing you create is greater than the cost of the inputs, then that is probably my core skill.</p>

             {/* <div className={classes.container}>
                 
                     <img src={TentCafeImg} className={classes.showCase}/>
                 
                    <div className={classes.right}>
                      <h4 className={classes.projectName}> The Tent Cafe </h4>
                      <p className={classes.techs}>React JS, CSS</p>
                      <p className={classes.projectDec}>Lorem ipsum dolor sit amet,Stet clita kasd lorem ipsum dolor sit amet. sed diam  eirmod tempor dolore.</p>
                      <img src={RightArrowSVG} className={classes.rightArrow}/>
                    </div>
             </div> */}

                <WorkUnit 
                ImgSVG={TentCafeImg}
                project={'The Tent Cafe'}
                technology={'ReactJS, CSS, Firebase, Twillio, NodeJS'}
                details={'Lorem ipsum dolor sit amet,Stet clita kasd lorem ipsum dolor sit amet. sed diam  eirmod tempor dolore.'}
                />
                <WorkUnitLeft 
                ImgSVG={BloodBankImg}
                project={'Blood Bank'}
                technology={'ReactJS, CSS, Firebase, Twillio, NodeJS'}
                details={'Lorem ipsum dolor sit amet,Stet clita kasd lorem ipsum dolor sit amet. sed diam  eirmod tempor dolore.'}
                />
                <WorkUnit 
                ImgSVG={TentCafeImg}
                project={'The Tent Cafe'}
                technology={'ReactJS, CSS, Firebase, Twillio, NodeJS'}
                details={'Lorem ipsum dolor sit amet,Stet clita kasd lorem ipsum dolor sit amet. sed diam  eirmod tempor dolore.'}
                />
        </div>
    );
}

export default Works;
