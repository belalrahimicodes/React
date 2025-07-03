import PropTypes from 'prop-types'

function Teachers(props){
    return(
        <div className="teachers">
            <p>Name: {props.name}</p>
            <p>Last Name: {props.lastName}</p>
            <p>Age: {props.age}</p>
        </div>
    );
}

Teachers.propTypes ={
    name: PropTypes.string,
    lastName: PropTypes.string,
    age: PropTypes.number,
}

Teachers.defaultProps ={
    name: "guest",
    lastName: "-",
    age: 0,
}

export default Teachers