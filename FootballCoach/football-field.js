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
      if(player.position === "Goalkeeper" && team1.includes(player)){
      const positionX = 10;
      const positionY = 45;
      insertPlayerIcon(positionX,positionY);
      };
      if(player.position === "Goalkeeper" && team2.includes(player)){
        const positionX = 83;
        const positionY = 45;
        insertPlayerIcon(positionX,positionY);
      };    
      if(player.position === "Center back" && team1.includes(player)){
        const positionX = 18;
        const positionY = 45;
        insertPlayerIcon(positionX,positionY);
      };
      if(player.position === "Center back" && team2.includes(player)){
        const positionX = 73;
        const positionY = 45;
        insertPlayerIcon(positionX,positionY);
      };
      if(player.position === "Right back" && team1.includes(player)){
        const positionX = 18;
        const positionY = 65;
        insertPlayerIcon(positionX,positionY);
      };
      if(player.position === "Right back" && team2.includes(player)){
        const positionX = 73;
        const positionY = 65;
        insertPlayerIcon(positionX,positionY);
      };
      if(player.position === "Left back" && team1.includes(player)){
        const positionX = 18;
        const positionY = 25;
        insertPlayerIcon(positionX,positionY);
      };
      if(player.position === "Left back" && team2.includes(player)){
        const positionX = 73;
        const positionY = 25;
        insertPlayerIcon(positionX,positionY);
      };
      if(player.position === "Central Midfielder" && team1.includes(player)){
        const positionX = 43;
        const positionY = 45;
        insertPlayerIcon(positionX,positionY);
      };
      if(player.position === "Central Midfielder" && team2.includes(player)){
        const positionX = 50;
        const positionY = 45;
        insertPlayerIcon(positionX,positionY);
      };
      if(player.position === "Right Midfielder" && team1.includes(player)){
        const positionX = 43;
        const positionY = 65;
        insertPlayerIcon(positionX,positionY);
      };
      if(player.position === "Right Midfielder" && team2.includes(player)){
        const positionX = 50;
        const positionY = 65;
        insertPlayerIcon(positionX,positionY);
      };
      if(player.position === "Left Midfielder" && team1.includes(player)){
        const positionX = 43;
        const positionY = 25;
        insertPlayerIcon(positionX,positionY);
      };
      if(player.position === "Left Midfielder" && team2.includes(player)){
        const positionX = 50;
        const positionY = 25;
        insertPlayerIcon(positionX,positionY);
      };
      if(player.position === "Striker" && team1.includes(player)){
        const positionX = 65;
        const positionY = 45;
        insertPlayerIcon(positionX,positionY);
      };
      if(player.position === "Striker" && team2.includes(player)){
        const positionX = 25;
        const positionY = 45;
        insertPlayerIcon(positionX,positionY);
      };
      if(player.position === "Right Attacker" && team1.includes(player)){
        const positionX = 65;
        const positionY = 65;
        insertPlayerIcon(positionX,positionY);
      };
      if(player.position === "Right Attacker" && team2.includes(player)){
        const positionX = 25;
        const positionY = 65;
        insertPlayerIcon(positionX,positionY);
      };
      if(player.position === "Left Attacker" && team1.includes(player)){
        const positionX = 65;
        const positionY = 25;
        insertPlayerIcon(positionX,positionY);
      };
      if(player.position === "Left Attacker" && team2.includes(player)){
        const positionX = 25;
        const positionY = 25;
        insertPlayerIcon(positionX,positionY);
      };
      
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
  
  
  
  
  
  