import React from "react";
import Header from "./Header";
export default class Contact extends React.component{
    state={
        "name": "test state"
    }
    constructor(){
        super();
        console.log("this is contact constructor..");
    }
    componentDidMount(){
        console.log("page is loaded..");
    }
    componentWillUnmount(){
        console.log("page is exit.");
    }
    static getDerivedStateFromProps(props,state){
        console.log("props",props,state);
    }
    render(){
        return(
            <>
            <header/>
            <h1>this is heading</h1>
            </>
        )
    }
    }
    