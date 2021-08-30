import Button from "@material-ui/core/Button";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import emailjs, { init } from "emailjs-com";
import React, { useState } from "react";
import BackToTop from "../assets/backtotop.svg";
import Call from "../assets/call.svg";
import Email from "../assets/email.svg";
import Github from "../assets/github.svg";
import LeetCode from "../assets/leetcode.svg";
import Location from "../assets/location.svg";
import Medium from "../assets/medium.svg";
import StackOverFlow from "../assets/stack_overflow.svg";

init("user_oJu8mkQAC3J1yE8xKoZAf");

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
    height: "100%",
    background: "#000000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    paddingTop: 20,
  },
  container: {
    margin: "0px 120px 0px 120px",
    width: "100%",
    height: "wrap-content",
    display: "flex",
    flexDirection: "row",
    flex: 3,
  },
  left: {
    flex: 1.3,
    textAlign: "left",
    height: 500,
  },
  right: {
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
    marginTop: 5,
    height: 80,
  },
  inputElementBox: {
    color: "white",
    fontFamily: "Poppins",
    width: "68ch",
    height: "10ch",
  },
  inputRowBox: {
    width: "100%",
    marginTop: 4,
    height: 160,
  },
  hiremeButton: {
    minWidth: 128,
    minHeight: 50,
    background: "#FF4900",

    marginLeft: 10,
    marginTop: -8,
  },
  copyRight: {
    color: "white",
    fontFamily: "Poppins",
    position: "absolute",
    marginTop: "40%",
  },
  backToTop: {
    position: "absolute",

    // left: 0,
    right: 40,
    // top: 2,
    marginTop: 30,
    // bottom: 50,
  },
  BTicons: {
    width: 40,
    height: 35,
    cursor: "pointer",
    transition: "all 0.2s ease",
    "&:hover": {
      scale: 1.1,
    },
  },
});

const re =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const validateEmail = (email) => {
  return re.test(String(email).toLowerCase());
};

const openStakOverFlow = () =>
  window.open(
    "https://stackoverflow.com/users/10884670/shuvendu-dhal",
    "_blank"
  );
const openGithub = () =>
  window.open("https://github.com/shuvenduoffline", "_blank");

const openLinkDin = () =>
  window.open("https://leetcode.com/shuvenduoffline/", "_blank");

const openMedium = () =>
  window.open("https://medium.com/@shuvenduoffline", "_blank");

const openCall = () => (window.href = "tel:+918240478563");
const openMail = () => (window.href = "mailto: shuvenduoffline@gmail.com");

const Contact = ({ handlePageChange }) => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [btnText, setBtnText] = useState("Send");

  const isPhoneValid = phone && !isNaN(phone) && phone.length === 10;
  const isNameValid = name && isNaN(name) && name.length >= 2;

  const sendMessage = (email, phone, name, subject, message) => {
    console.log(email, phone, name, subject, message);

    var templateParams = {
      from_name: name,
      to_name: subject + phone,
      message: message,
      reply_to: email,
    };

    emailjs.send("service_sy2xce8", "template_s97j4mh", templateParams).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        setBtnText("Sent!");
        setTimeout(() => {
          setName("");
          setPhone("");
          setEmail("");
          setMessage("");
          setSubject("");
          setBtnText("Send");
        }, 1500);
      },
      function (error) {
        console.log("FAILED...", error);
        setBtnText("Something went wrong!");
        setTimeout(() => {
          setBtnText("Send");
        }, 1500);
      }
    );
  };

  return (
    <div className={classes.root} id="contact">
      <div className={classes.container}>
        <div className={classes.left}>
          <h1 className={classes.contactMe}>Contact Me</h1>
          <p className={classes.letsMake}>
            Let's make something new, different and more meaningful or make
            thing more visual or conceptual?
          </p>

          <div className={classes.medium} onClick={() => openCall()}>
            <div className={classes.logo}>
              <img src={Call} />
            </div>
            <div className={classes.details}>
              <p className={classes.passive}>Call Me</p>
              <p className={classes.contactInfo}>+91 8258090295</p>
            </div>
          </div>

          <div className={classes.medium} onClick={() => openMail()}>
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
            <img
              src={Medium}
              className={classes.icons}
              onClick={() => openMedium()}
            />
            <img
              src={StackOverFlow}
              className={classes.icons}
              onClick={() => openStakOverFlow()}
            />
            <img
              src={LeetCode}
              className={classes.icons}
              onClick={() => openLinkDin()}
            />
            <img
              src={Github}
              className={classes.icons}
              onClick={() => openGithub()}
            />
          </div>
        </div>
        <div className={classes.right}>
          <h1 className={classes.contactMe}>Drop a Line</h1>
          <div className={classes.myForm}>
            <div className={classes.inputRow}>
              <CssTextField
                error={!isNameValid && name}
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
                helperText={!isNameValid && name && "Enter Valid Name!"}
              />

              <CssTextField
                error={!isPhoneValid && phone}
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
                helperText={!isPhoneValid && phone && "Phone Number Not Valid!"}
              />
            </div>
            <div className={classes.inputRow}>
              <CssTextField
                error={!validateEmail(email) && email}
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
                helperText={!validateEmail(email) && email && "Invalid Email!"}
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
                error={email && validateEmail(email) && !message}
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
                helperText={
                  email &&
                  validateEmail(email) &&
                  !message &&
                  "Please write some massage!"
                }
              />
            </div>
          </div>

          <Button
            variant="contained"
            color="primary"
            className={classes.hiremeButton}
            onClick={() => {
              if (!email) {
                setEmail("You forgot to write ur email");
              } else if (
                validateEmail(email) &&
                isNameValid &&
                (!phone || isPhoneValid) &&
                message &&
                btnText === "Send"
              ) {
                setBtnText("Sending...");
                sendMessage(email, phone, name, subject, message);
              }
            }}
          >
            {btnText}
          </Button>
          <div className={classes.backToTop}>
            <img
              src={BackToTop}
              className={classes.BTicons}
              onClick={() => handlePageChange(0)}
            />
          </div>
        </div>
      </div>
      <p className={classes.copyRight}>
        Copyright ©2021Offline. All Rights Reserved.
      </p>
    </div>
  );
};

export default Contact;
