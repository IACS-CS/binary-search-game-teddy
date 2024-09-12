import "./style.css";
import { TextInterface } from "text-interface";


let binary = 0;


// Get the element with id="app"
let app = document.querySelector("#app");

// Create a new "Text Interface"

let ti = new TextInterface(app, "NFL Team Guesser");
ti.output("Think of a NFL team and I will try to guess it.");
ti.output("Is it in the AFC?");
let userAnswer = await ti.readYesOrNo();
if(userAnswer) {
  ti.output("Has your team won a Super Bowl?");
  userAnswer = await ti.readYesOrNo();
  if(userAnswer) {
    ti.output("Does your team have a 5,000 yard passer?");
    userAnswer = await ti.readYesOrNo();
    if(userAnswer) {
      ti.output("Is your team in the AFC East?");
      userAnswer = await ti.readYesOrNo();
      if(userAnswer) {
        ti.output("Does your team have over four super bowl wins?");
        userAnswer = await ti.readYesOrNo();
        if(userAnswer) {
          ti.output("Your team is the New England Patriots!!");
        } else {
          ti.output("Your team is the Miami Dolphins!!");
        }
      } else {
        ti.output("Does your starting QB's dad have 3 DUIs?");
        userAnswer = await ti.readYesOrNo();
        if(userAnswer){
          ti.output("Your team is the Kansas City Cheifs!! Happy Driving!!");
        } else {
          ti.output("Your team is the Denver Broncos");
        }
      }
    }
  }
} else {
  ti.output("Does your logo or name contain an animal????");
  userAnswer = await ti.readYesOrNo();
  if (userAnswer) {
    ti.output("Does your team have blue in their team color??? ");
    userAnswer = await ti.readYesOrNo();
    if (userAnswer) {
      ti.output("Is your team located East of the Mississippi River??");
      userAnswer = await ti.readYesOrNo();
      if (userAnswer) {
        ti.output("Is your team trash this year???");
        userAnswer = await ti.readYesOrNo();
        if (userAnswer) {
          ti.output("Your team is the Carolina Panthers");
          ti.output("Happy Driving!!");
        } else {
          ti.output("your team is the Detroit Lions!!!!!!")
        }
      } else {
        ti.output("Has your team lost to the New England Patriots twice in the superbowl")
        
      }
    }
  }

  
}

