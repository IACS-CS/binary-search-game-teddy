import "./style.css";
import { TextInterface } from "text-interface";


let binary = 0;


// Get the element with id="app"
let app = document.querySelector("#app");



let ti = new TextInterface(app, "NFL Team Guesser");
let playAgain = true
while(playAgain) {
  ti.clear();
  ti.output("Think of a NFL team and I will try to guess it.");
  ti.output("Is it in the AFC?");
  let userAnswer = await ti.readYesOrNo();
  if(userAnswer) {
    ti.clear();
    ti.output("Has your team won a Super Bowl?");
    userAnswer = await ti.readYesOrNo();
    if(userAnswer) {
      ti.clear();
      ti.output("Does your team have a 5,000 yard passer?");
      userAnswer = await ti.readYesOrNo();
      if(userAnswer) {
        ti.clear();
        ti.output("Is your team in the AFC East?");
        userAnswer = await ti.readYesOrNo();
        if(userAnswer) {
          ti.clear();
          ti.output("Does your team have six super bowl wins?");
          userAnswer = await ti.readYesOrNo();
          if(userAnswer) {
            ti.clear();
            ti.output("Your team is the New England Patriots!!");
          } else {
            ti.clear();
            ti.output("Your team is the Miami Dolphins!!");
          }
        } else {
          ti.clear();
          ti.output("Does your starting QB's dad have 3 DUIs?");
          userAnswer = await ti.readYesOrNo();
          if(userAnswer){
            ti.clear();
            ti.output("Your team is the Kansas City Cheifs!! Happy Driving!!");
          } else {
            ti.clear();
            ti.output("Your team is the Denver Broncos");
          }
        }
      } else {
        ti.clear();
        ti.output("Has your team won a super bowl since man landed on the moon?");
        userAnswer = await ti.readYesOrNo();
        if(!userAnswer) {
          ti.clear();
          ti.output("Your team is the New York Jets!")
        } else {
          ti.clear();
          ti.output("Is your team in the AFC North???");
          userAnswer = await ti.readYesOrNo();
          if(userAnswer) {
            ti.clear();
            ti.output("Did the greatest linebacker ever play for your team??");
            userAnswer = await  ti.readYesOrNo();
            if (userAnswer) {
              ti.clear();
              ti.output("Your team is the Baltimore Ravens");
            } else {
              ti.clear();
              ti.output("Your team is the Pittsburgh Steelers");
            }
          } else {
            ti.clear();
            ti.output("Your team is the Las Vegas Raiders");
          }
        }
      }
    } else {
      ti.clear();
      ti.output("Does your team's QB make over $45 million annually as of 2024?");
      userAnswer = await ti.readYesOrNo();
      if (!userAnswer) {
        ti.clear();
        ti.output("Has your team been to four superbowls in a row (and lost them all????????)");
        userAnswer = await ti.readYesOrNo();
        if (userAnswer) {
          ti.clear();
          ti.output("Your team is the Buffalo Bills");
        } else {
          ti.clear();
          ti.output("Does your team have multiple players in the hall of fame??");
          userAnswer = await ti.readYesOrNo();
          if (userAnswer) {
            ti.clear();
           ti.output("Your team is Tennessee Titans");
          } else {
            ti.clear();
            ti.output("Your team is the Houston Texans");
          }
        } 
      } else {
        ti.clear();
        ti.output("Is your team's starting QB a former first overall pick?");
        userAnswer = await ti.readYesOrNo();
        if(userAnswer) {
          ti.clear();
          ti.output("Has your team's starting QB beat the Kansas City Cheifs in the playoffs as of 2024?")
          userAnswer = await ti.readYesOrNo();
          if(userAnswer) {
            ti.clear();
            ti.output("Your team is the Cincinnati Bengals")
          } else {
            ti.clear();
            ti.output("Your team is the Jacksonville Jaguars")
          }
        } else {
          ti.clear();
          ti.output("Did your team formerly play in San Diego?");
          userAnswer = await ti.readYesOrNo();
          if(userAnswer) {
            ti.clear();
            ti.output("Your team is the Los Angeles Chargers")
          } else {
            ti.clear();
            ti.output("Your team is the Cleveland Browns")
          }
        }
      }
    }
  } else {
    ti.clear();
    ti.output("Does you logo or name contain an animal????");
    userAnswer = await ti.readYesOrNo();
    if (userAnswer) {
      ti.clear();
      ti.output("Does your team have blue in their team color??? ");
      userAnswer = await ti.readYesOrNo();
      if (userAnswer) {
        ti.clear();
        ti.output("Is your team located East of the Mississippi River??");
        userAnswer = await ti.readYesOrNo();
        if (userAnswer) {
          ti.clear();
          ti.output("Is your team trash this year???");
          userAnswer = await ti.readYesOrNo();
          if (userAnswer) {
            ti.clear();
            ti.output("Your team is the Carolina Panthers");
          } else {
            ti.clear();
            ti.output("Your team is the Detroit Lions!!!!!!");
          }
        } else {
          ti.clear();
          ti.output("Has your team lost to the New England Patriots twice in the superbowl");
          userAnswer = await ti.readYesOrNo();
          if (userAnswer) {
            ti.clear();
            ti.output("Your team is the Los Angeles Rams");
          } else {
            ti.clear();
            ti.output("Your team is the Seattle Seahawks")
          }
        }
      } else {
        ti.clear();
        ti.output("Has Mike Vick played for your team?");
        userAnswer = await ti.readYesOrNo();
        if(userAnswer) {
          ti.clear();
          ti.output("Is Jalen Hurts your teams starting quarterback this year(2024)?");
          userAnswer = await ti.readYesOrNo();
          if(userAnswer) {
            ti.clear();
            ti.output("Your team is the Philadelphia Eagles");
          } else {
            ti.clear();
            ti.output("Your team is the Atlanta Falcons")
          }
        } else {
          ti.clear();
          ti.output("Did your team pick #1 overall in 2024?");
          userAnswer = await ti.readYesOrNo();
          if(userAnswer) {
            ti.clear();
            ti.output("Your team is the Chicago Bears!!");
          } else {
            ti.clear();
            ti.output("Your team is the Arizona Cardinals");
          }
        }
      }
    } else {
      ti.clear();
      ti.output("Was your team founded before 1950??????");
      userAnswer = await ti.readYesOrNo();
      if(userAnswer) {
        ti.clear();
        ti.output("Does your team have a qb with 700 rushing yards in a season????????????????");
        userAnswer = await ti.readYesOrNo();
        if(userAnswer) {
          ti.clear();
          ti.output("Did your team lose the NFC east in 2023");
          userAnswer = await ti.readYesOrNo();
          if(userAnswer) {
            ti.clear();
            ti.output("Your team is the Washington Commanders");
          } else {
            ti.clear();
            ti.output("Your team is the NY Giants");
          }
        } else {
          ti.clear();
          ti.output("Was your teams starting quarterback the last pick in the draft?")
          userAnswer = await ti.readYesOrNo();
          if(userAnswer) {
            ti.clear();
            ti.output("Your team is the San Francisco 49ers");
          } else {
            ti.clear();
            ti.output("Your team is the Green Bay Packers!");
          }
        }
      } else {
        ti.clear();
        ti.output("Has your team won a super bowl since 2000?");
        userAnswer = await ti.readYesOrNo();
        if(userAnswer) {
          ti.clear();
          ti.output("Did the GOAT play for your team?");
          userAnswer = await ti.readYesOrNo();
          if(userAnswer) {
            ti.clear();
            ti.output("Your team is the Tampa Bay Buccaneers");
          } else {
            ti.clear();
            ti.output("Your team is the New Orleans Saints");
          }
        } else {
          ti.clear();
          ti.output("Has your team won a Super Bowl before 2000?");
          userAnswer = await ti.readYesOrN
          if (userAnswer) {
            ti.clear();
            ti.output("Your team is the Dallas Cowboys");
          } else {
            ti.clear();
            ti.output("Your team is the Minnesota Vikings");
          }
        }
      }
    }
  }
  ti.output("Would you like to play again?");
  playAgain = await ti.readYesOrNo();
}