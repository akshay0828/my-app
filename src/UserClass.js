import React from "react";
import Employee from "./Employee";
import axios from "axios";

class UserClass extends React.Component{
    // userName="Santhosh";
    state={
        // Users:[
        //     {name:"user1"},
        //     {name:"user2"}
        // ]
        // Employees:[
        //     {id:101,name:"Emp1", email:"emp1@company.net"},
        //     {id:102,name:"Emp2", email:"emp2@company.net"},
        //     {id:103,name:"Emp3", email:"emp3@company.net"}
        // ]

        post:''
    }
    constructor(props){
        super(props)
    }
    clickHandler=(e)=>{
        // alert(e.currentTarget);
        // alert(e.type);
        // alert(e.nativeEvent);

        // alert("Button Clicked");

        // this.state.Users[0].name="Valtech User1";

        // this.setState({Users:[
        //     {name:"Santhu"},
        //     {name:"googly"}
        // ]})
        axios.get("http://jsonplaceholder.typicode.com/posts/2")
        .then(resp =>{
            this.setState({Post:resp.data.title})
        })

    }
    render(){
        return(
            <div>
                
                <p>User:{this.state.Users[0].name}</p>
                <p>User:{this.state.Users[1].name}</p>
                <button onClick={this.clickHandler}>Click Me</button> 
                
                {this.state.Employees.map(emp=>{
                    return (<Employee name={emp.name} email={emp.email} key={emp.id}></Employee>)
                })}
                
                {/* <p>{this.state.Post}</p>
                <form>
                    <input type="button" onClick={this.clickHandler} value="Get Data"/>
                </form> */}
            </div>
        )
    }
}
export default UserClass;