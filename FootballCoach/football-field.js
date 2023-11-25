// Initialize teams
const team1 = [];
const team2 = [];

document.addEventListener("DOMContentLoaded", function () {
    // Retrieve player data from localStorage (or from your server)
    const playerData = JSON.parse(localStorage.getItem("playerData")) || [];
    
    // Display player icons on the field
    const field = document.getElementById("field");
  
    playerData.forEach((player, index) => {
      const playerIcon = document.createElement("div");
      playerIcon.className = "player-icon";
      playerIcon.innerHTML = player.name.charAt(0) + player.lastName.charAt(0); // Display the first letter of the player's name
      
      const isPositionTakenInTeam1 = team1.some((teamPlayer) => teamPlayer.position === player.position);
      // Check if the position is already taken in team1
      if (!isPositionTakenInTeam1) {
        // Position is available in team1, add player to team1
        team1.push(player);
      } else {
        // Position is taken in team1, add player to team2
        team2.push(player);        
      }

      // Adjust the position of the player icon on the field
      const positionMap = {
        "Goalkeeper": { team1: { x: 10, y: 45 }, team2: { x: 83, y: 45 } },
        "Center back": { team1: { x: 18, y: 45 }, team2: { x: 73, y: 45 } },
        "Right back": { team1: { x: 18, y: 65 }, team2: { x: 73, y: 65 } },
        "Left back": { team1: { x: 18, y: 25 }, team2: { x: 73, y: 25 } },
        "Central Midfielder": { team1: { x: 43, y: 45 }, team2: { x: 50, y: 45 } },
        "Right Midfielder": { team1: { x: 43, y: 65 }, team2: { x: 50, y: 65 } },
        "Left Midfielder": { team1: { x: 43, y: 25 }, team2: { x: 50, y: 25 } },
        "Striker": { team1: { x: 65, y: 45 }, team2: { x: 25, y: 45 } },
        "Right Attacker": { team1: { x: 65, y: 65 }, team2: { x: 25, y: 65 } },
        "Left Attacker": { team1: { x: 65, y: 25 }, team2: { x: 25, y: 25 } }
      };
      
      const positionInfo = positionMap[player.position];
      
      if (positionInfo && team1.includes(player)) {
        const { x, y } = positionInfo.team1;
        insertPlayerIcon(x, y);
      } else if (positionInfo && team2.includes(player)) {
        const { x, y } = positionInfo.team2;
        insertPlayerIcon(x, y);
      }
      
      localStorage.setItem("team2", JSON.stringify(team2));
      

      function insertPlayerIcon(X,Y){
        playerIcon.style.left = `${X}%`;
        playerIcon.style.top = `${Y}%`;
        if(team2.includes(player)){
          playerIcon.style.backgroundColor = "red";
        }
        field.appendChild(playerIcon);
      }
      
    });
    console.log("Team 1:", team1);
    console.log("Team 2:", team2);
  });
  //This example assumes that you have a background image for the football field (replace 'football-field-background.jpg' with the path to your image). The JavaScript file dynamically creates player icons for each player on the field based on the data entered on the data entry page.
  
  //Adjust the styles and positions as needed to fit your design preferences and field dimensions. If you encounter any issues or have further questions, feel free to ask!
  
  
  
  
  
  