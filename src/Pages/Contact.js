import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Call from "../assets/call.svg";
import Email from "../assets/email.svg";
import Location from "../assets/location.svg";
import StackOverFlow from "../assets/stack_overflow.svg";
import Linkdin from "../assets/linkdin.svg";
import Github from "../assets/github.svg";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {
  alpha,
  ThemeProvider,
  withStyles,
  createTheme,
} from "@material-ui/core/styles";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#666666",
      fontFamily: "Poppins",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#555555",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#333333",
        fontFamily: "Poppins",
      },
      "&:hover fieldset": {
        borderColor: "#555555",
        fontFamily: "Poppins",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#555555",
      },
    },
    "& label": {
      color: "#666666",
      fontFamily: "Poppins",
    },
  },
})(TextField);

const useStyles = makeStyles({
  root: {
    border: "1px solid red",
    height: "100%",
    background: "#000000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    paddingTop: 20,
  },
  container: {
    border: "1px solid red",
    margin: "0px 120px 0px 120px",
    width: "100%",
    height: "wrap-content",
    display: "flex",
    flexDirection: "row",
    flex: 3,
  },
  left: {
    border: "1px solid red",
    flex: 1.3,
    textAlign: "left",
    height: 500,
  },
  right: {
    border: "1px solid red",
    flex: 1.7,
    textAlign: "left",
    marginLeft: 20,
    height: 500,
  },
  contactMe: {
    fontFamily: "Poppins",
    color: "white",
  },
  letsMake: {
    fontFamily: "Poppins",
    color: "white",
    fontWeight: 600,
  },
  medium: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  logo: {
    cursor: "pointer",
    "&:hover": {
      "box-shadow":
        "0 14px 28px rgba(25,25,25,0.25), 0 10px 10px rgba(25,25,25,0.22)",
      scale: 1.01,
    },
  },
  details: {
    fontFamily: "Poppins",
    color: "white",
    marginLeft: 20,
    cursor: "pointer",
    "&:hover": {
      "box-shadow":
        "0 14px 28px rgba(25,25,25,0.25), 0 10px 10px rgba(25,25,25,0.22)",
      scale: 1.01,
    },
  },
  passive: {
    margin: 0,
    color: "#6B6B6B",
    fontFamily: "Poppins",
    fontWeight: 600,
  },
  contactInfo: {
    margin: 0,
    fontFamily: "Poppins",
    color: "white",
    fontWeight: 600,
    fontSize: 16,
  },
  findMeOn: {
    fontFamily: "Poppins",
    color: "white",
  },
  socialLinkBox: {
    height: 30,
    width: "85%",
    background: "#FF4900",
    marginLeft: -130,
    borderRadius: 10,
    alignItems: "center",
    padding: 10,
    textAlign: "right",
    paddingRight: 60,
  },
  icons: {
    width: 30,
    height: 30,
    marginLeft: 20,
    cursor: "pointer",
    transition: "all 0.2s ease",
    "&:hover": {
      width: 35,
    },
  },
  inputElement: {
    color: "white",
    fontFamily: "Poppins",
  },
  myForm: {
    padding: 10,
  },
  inputRow: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 20,
  },
  inputElementBox: {
    color: "white",
    fontFamily: "Poppins",
    width: "68ch",
    height: "10ch",
  },
  inputRowBox: {
    width: "100%",
    marginTop: 20,
  },
  hiremeButton: {
    minWidth: 128,
    minHeight: 50,
    background: "#FF4900",
    border: "1px solid red",
    marginLeft: 10,
    marginTop: 17,
  },
  copyRight: {
    color: "white",
    fontFamily: "Poppins",
    position: "absolute",
    marginTop: "40%",
  },
});

const Contact = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  return (
    <div className={classes.root} id="contact">
      <div className={classes.container}>
        <div className={classes.left}>
          <h1 className={classes.contactMe}>Contact Me</h1>
          <p className={classes.letsMake}>
            Let's make something new, different and more meaningful or make
            thing more visual or conceptual?
          </p>

          <div className={classes.medium}>
            <div className={classes.logo}>
              <img src={Call} />
            </div>
            <div className={classes.details}>
              <p className={classes.passive}>Call Me</p>
              <p className={classes.contactInfo}>+91 8258090295</p>
            </div>
          </div>

          <div className={classes.medium}>
            <div className={classes.logo}>
              <img src={Email} />
            </div>
            <div className={classes.details}>
              <p className={classes.passive}>Email Me</p>
              <p className={classes.contactInfo}>shuvenduoffline@gmail.com</p>
            </div>
          </div>

          <div className={classes.medium}>
            <div className={classes.logo}>
              <img src={Location} />
            </div>
            <div className={classes.details}>
              <p className={classes.passive}>Address</p>
              <p className={classes.contactInfo}>
                70009, Kolkata, West Bengal, India
              </p>
            </div>
          </div>

          <h2 className={classes.findMeOn}>Find Me on</h2>

          <div className={classes.socialLinkBox}>
            <img src={StackOverFlow} className={classes.icons} />
            <img src={Linkdin} className={classes.icons} />
            <img src={Github} className={classes.icons} />
          </div>
        </div>
        <div className={classes.right}>
          <h1 className={classes.contactMe}>Drop a Line</h1>
          <div className={classes.myForm}>
            <div className={classes.inputRow}>
              <CssTextField
                label="Name"
                variant="outlined"
                id="custom-css-outlined-input"
                InputProps={{
                  classes: {
                    input: classes.inputElement,
                  },
                }}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <CssTextField
                label="Phone"
                variant="outlined"
                id="custom-css-outlined-input"
                InputProps={{
                  classes: {
                    input: classes.inputElement,
                  },
                }}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className={classes.inputRow}>
              <CssTextField
                label="Email"
                variant="outlined"
                id="custom-css-outlined-input"
                InputProps={{
                  classes: {
                    input: classes.inputElement,
                  },
                }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <CssTextField
                label="Subject"
                variant="outlined"
                id="custom-css-outlined-input"
                InputProps={{
                  classes: {
                    input: classes.inputElement,
                  },
                }}
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className={classes.inputRowBox}>
              <CssTextField
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                id="custom-css-outlined-input"
                InputProps={{
                  classes: {
                    input: classes.inputElementBox,
                  },
                }}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>

          <Button
            variant="contained"
            color="primary"
            className={classes.hiremeButton}
          >
            Hire Me!
          </Button>
        </div>
      </div>
      <p className={classes.copyRight}>
        {" "}
        Copyright ©2021Offline. All Rights Reserved.
      </p>
    </div>
  );
};

export default Contact;
