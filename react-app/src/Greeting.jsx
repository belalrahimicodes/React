import PropTypes from "prop-types";

function Greeting(props){

    const welcomeMsg = `Welcome ${props.user}`;
    const notLogedin = `Please log in first`;

    return(props.loggedIn ? welcomeMsg : notLogedin);
}

Greeting.prototypes ={
    user: PropTypes.string,
    loggedIn: PropTypes.bool,
}

Greeting.defaultProps ={
    user: "guest",
    loggedIn: false,
}

export default Greeting