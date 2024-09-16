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
    } else {
      ti.output("Has your team won a super bowl since man landed on the moon?");
      userAnswer = await ti.readYesOrNo();
      if(userAnswer) {
        ti.output("Your team is the New York Jets");
        ti.output("Your team also sucks the Patriots own your team");
      } else {
        ti.output("Is your team in the AFC North???");
        userAnswer = await ti.readYesOrNo();
        if(userAnswer) {
          ti.output("Did the greatest linebacker ever play for your team??");
          userAnswer = await  ti.readYesOrNo();
          if (userAnswer) {
            ti.output("Your team is the Baltimore Ravens");
          } else {
            ti.output("Your team is the Pittsburgh Steelers")
          }
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
        } else {
          ti.output("Your team is the Detroit Lions!!!!!!");
        }
      } else {
        ti.output("Has your team lost to the New England Patriots twice in the superbowl");
        userAnswer = await ti.readYesOrNo();
        if (userAnswer) {
          ti.output("Your team is the Los Angeles Rams");
        } else {
          ti.output("Your team is the Seattle Seahawks")
        }
      }
    } else {
      ti.output("Has Mike Vick played for your team?");
      userAnswer = await ti.readYesOrNo();
      if(userAnswer) {
        ti.output("Is Jalen Hurts your teams starting quarterback this year?");
        userAnswer = await ti.readYesOrNo();
        if(userAnswer) {
          ti.output("Your team is the Philadelphia Eagles");
        } else {
          ti.output("Your team is the Atlanta Falcons")
        }
      } else {
        ti.output("Did your team pick #1 overall in 2024?");
        userAnswer = await ti.readYesOrNo();
        if(userAnswer) {
          ti.output("Your team is the Chicago Bears!!");
        } else {
          ti.output("Your team is the Arizona Cardinals");
        }
      }
    }
  } else {
    ti.output("Was your team founded before 1950??????");
    userAnswer = await ti.readYesOrNo();
    if(userAnswer) {
      ti.output("Does your team have a qb with 700 rushing yards in a season????????????????");
      userAnswer = await ti.readYesOrNo();
      if(userAnswer) {
        ti.output("Did your team lose the NFC east in 2023");
        userAnswer = await ti.readYesOrNo();
        if(userAnswer) {
          ti.output("Your team is the Washington Commanders");
        } else {
          ti.output("Your team is the NY Giants");
        }
      } else {
        ti.output("Was your teams starting quarterback the last pick in the draft?")
        userAnswer = await ti.readYesOrNo();
        if(userAnswer) {
          ti.output("Your team is the San Francisco 49ers");
        } else {
          ti.output("Your team is the Green Bay Packers!");
        }
      }
    } else {
      ti.output("Has your team won a super bowl since 2000?");
      userAnswer = await ti.readYesOrNo();
      if(userAnswer) {
        ti.output("Did the GOAT play for your team?");
        userAnswer = await ti.readYesOrNo();
        if(userAnswer) {
          ti.output("Your team is the Tampa Bay Buccaneers");
        } else {
          ti.output("Your team is the New Orleans Saints");
        }
      } else {
        ti.output("Has your team won a super bowl before 2000?");
        userAnswer = await ti.readYesOrNo();
        if (userAnswer) {
          ti.output("Your team is the Dallas Cowboys");
        } else {
          ti.output("Your team is the Minnesota Vikings");
        }
      }
    }
  }
}

