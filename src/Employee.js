import React from "react";
class Employee extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const empCard={
            width:"150px",
            border:"2px solid black",
            borderRadius:"4px",
            marginLeft:"20px",
            padding:"10px"
        }
        return(
            <div style={empCard}>
                <h2>{this.props.name}</h2>
                <p>{this.props.email}</p>
                {/* <h1>{this.props.key}</h1> */}
            </div>

        )
    }
}
export default Employee