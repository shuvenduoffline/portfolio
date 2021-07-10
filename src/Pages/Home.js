import React from 'react';
import Logo from '../assets/logo.svg';
import HiSVG from '../assets/hello.svg';
import ComputerSVG from '../assets/computer.svg';
import DownSVG from '../assets/downarrow.svg';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typical from 'react-typical'



const useStyles = makeStyles({
    root: {
       
        height : '100vh',
        backgroundColor: '#000000'
    },
    logoImage : {
        width: 220,
        height: 84,
        flex: 2,
        display: 'flex',
        alignItems: 'flex-start',
        paddingRight: 0
    },
    navigations : {
       
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: 80,
        paddingRight: 80,
        paddingTop: 20,
        flex: 6
    },
    navItem : {
       
        fontFamily: 'Poppins',
        color: 'white',
        fontSize: 20,
        cursor: 'pointer'
    },
    menus : {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flex: 3
    },
    hireme : {
       
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    hiremeButton : {
        minWidth: 128,
        minHeight: 47,
        background:'#FF4900',
    },
    highLighted : {
        background:'#FF4900',
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: -20,
        paddingTop: 20
    },
    bodyDIV:{
       
        display: 'flex',
        flexDirection: 'row',
        flex: 2,
        maxHeight: '70%'
    },
    myname :{
       
        flex:1,
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        marginLeft: 80,
        marginRight: -100,
        marginTop: 80,
        marginBottom: 80
    },
    homeImage : {
       
       flex: 1
    },
    imageCompter : {
       
        maxWidth: 900,
        maxHeight: 500
    },
    myNameWr: {
       
        textAlign: 'left',
        fontFamily: 'Poppins',
        color: 'white',
        fontWeight: 1000,
        fontSize: 80,
        margin: 0
    },
    hisvg : {
        maxHeight: 60,
        maxWidth: 140
    },
    intro : {
       
        fontFamily: 'Poppins',
        color: 'white',
        fontWeight: 400,
        fontSize: 20,
        marginBottom: 30,
        textAlign: 'left',
        marginTop: 5,
        height: 40
    },
    homeButtons : {
       
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            maxWidth: 250
    },
    downloadCV :{
       
        minWidth: 128,
        minHeight: 47,
        background:'#FF4900',
    },
    mywork : {
       
        fontFamily: 'Poppins',
        color: 'white',
        fontWeight: 600
    },
    downLogo : {
        cursor: 'pointer',
        maxHeight: 80,
        marginTop: 10
    },
    downLogoSVG : {
       
        maxHeight : 60,
        maxWidth: 50
    },
    mLogoImg : {
       
    }
  });

const Home = () => {

    const classes = useStyles();

    return (
        <div className={classes.root} id="home">
            <div className={classes.navigations}>
                <div  className={classes.logoImage}>
                    <img src={Logo} className={classes.mLogoImg}/>
                </div>
               

                <div className={classes.menus}>
                    <div className={classes.highLighted}>
                        <p className={classes.navItem}>.aboutMe()</p>
                    </div>
                    
                    <p className={classes.navItem}>.skills()</p>
                    <p className={classes.navItem}>.works()</p>
                    <p className={classes.navItem}>.contactMe()</p>
                </div>

                <div className={classes.hireme}>
                    <Button variant="contained" color="primary" className={classes.hiremeButton}>
                        Hire Me!
                    </Button>
                </div>
            </div>

            <div className={classes.bodyDIV}>

                <div className={classes.myname}>
                    <img src={HiSVG} className={classes.hisvg}></img>
                    <h1 className={classes.myNameWr}>Shuvendu Dhal</h1>
                    {/* <h3 className={classes.intro}>
                        A Professional Java Developer and UI/UX Designer!
                    </h3> */}
                    {/* <Typical
                        className={classes.intro}
                        steps={['A Professional Java Developer!', 2000, 'A Professional ReactJS Developer!', 2000, `I build new projects just to tickle my brain and love teaching others how they're made.`,3000,
                        `While I keep busy teaching courses, I still take interviews in search of a great team & projects that interest me.`
                        ,3000]}
                        loop={Infinity}
                        wrapper="p"
                    /> */}
                    <div className={classes.homeButtons}>
                        <Button variant="contained" color="primary"   className={classes.downloadCV}>
                            Download CV
                        </Button>
                        <Button variant="outlined" color="primary" className={classes.mywork}>
                            My Work
                        </Button>
                    </div>
                </div>

                <div className={classes.homeImage}>
                    <img className={classes.imageCompter} src={ComputerSVG}/>
                </div>
            </div>

            <div className={classes.downLogo}>
                    <img src={DownSVG} className={classes.downLogoSVG}/>
                </div>
        </div>
    );
}

export default Home;
