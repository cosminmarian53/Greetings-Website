import React from "react";

const Greeting = () => {
    const date=new Date();
    const currentHour=date.getHours();
    const customStyle={
      color:""
    }
    let greeting="";
    if(currentHour<12){
      greeting="Good Morning!";
      customStyle.color="red";
    }else if(currentHour<18){
      greeting="Good Afternoon!";
      customStyle.color="green";
    }else{
      greeting="Good Night!";
      customStyle.color="blue";
    }
    return (
      <>
          <h1 style={customStyle} className="heading">{greeting}</h1>
      </>
    );
}
export default Greeting;