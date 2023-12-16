// Initialize teams
const team1 = [];
const team2 = [];

// Assuming dataEntrydiv is the correct target div
var targetDiv = document.getElementById('dataEntrydiv');

// Create label element
var label = document.createElement('label');
label.setAttribute('for', 'playerPosition');
label.textContent = 'Position:';

// Create select element
var select = document.createElement('select');
select.id = 'playerPosition';
select.name = 'playerPosition';
select.addEventListener('click', checkTeams);

// Create default option
var defaultOption = document.createElement('option');
defaultOption.value = '';
defaultOption.text = 'Select Position';
defaultOption.disabled = true;
defaultOption.selected = true;
select.appendChild(defaultOption);

// Create option elements
var positions = [
    'Goalkeeper',
    'Center back',
    'Right back',
    'Left back',
    'Central Midfielder',
    'Right Midfielder',
    'Left Midfielder',
    'Striker',
    'Right Attacker',
    'Left Attacker'
];

positions.forEach(function(position) {
    var option = document.createElement('option');
    option.value = position;
    option.text = position;
    select.appendChild(option);
});

// Append elements to the target div
document.addEventListener("DOMContentLoaded", function () {
  console.log("targetDiv:", targetDiv);
  if (targetDiv) {
      targetDiv.appendChild(label);
      targetDiv.appendChild(select);
  } else {
      console.error("Element with ID 'dataEntrydiv' not found.");
  }
});
 
function checkTeams() {
  let team2 = JSON.parse(localStorage.getItem('team2'));
  const dropdown = document.getElementById("playerPosition");

  // Check if team 2 includes each position and disable the dropdown option
  try {
      team2.forEach(player => {
          const option = dropdown.querySelector(`[value="${player.position}"]`);

          if (option) {
              option.disabled = true;
          }
      });
  } catch (error) {
      console.error(error);
  }

  // Remove the event listener outside the try...catch block
  dropdown.removeEventListener("click", checkTeams);
}

function submitData() {
    // Get user input
    const playerName = document.getElementById("playerName").value;
    const playerLastName = document.getElementById("playerLastName").value;
    const playerPosition = document.getElementById("playerPosition").value;
  
    // Check if the input is not empty
    if (playerName.trim() === "") {
      alert("Please fill in your name.");
      return;
    }

    if (playerLastName.trim() === "") {
        alert("Please fill in your last name.");
        return;
    }

    if (playerPosition === "") {
        alert("Please fill in the player position.");
        return;
    }
    
    // Save data to localStorage or send it to the server, depending on your needs
    // For simplicity, this example uses localStorage
    const playerData = {
      name: playerName,
      lastName: playerLastName,
      position: playerPosition,
    };
  
    // Store data in localStorage (you may want to replace this with server-side storage)
    const storedData = JSON.parse(localStorage.getItem("playerData")) || [];
    storedData.push(playerData);
    localStorage.setItem("playerData", JSON.stringify(storedData));
    
    // Redirect to the football field display page
    //window.location.href = "football-field.html";
    window.location.reload();
}



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
        "Goalkeeper": { team1: { x: 7, y: 48 }, team2: { x: 87, y: 48 } },
        "Center back": { team1: { x: 28, y: 48 }, team2: { x: 70, y: 48 } },
        "Right back": { team1: { x: 28, y: 70 }, team2: { x: 70, y: 70 } },
        "Left back": { team1: { x: 28, y: 25 }, team2: { x: 70, y: 25 } },
        "Central Midfielder": { team1: { x: 45, y: 48 }, team2: { x: 50, y: 48 } },
        "Right Midfielder": { team1: { x: 45, y: 70 }, team2: { x: 50, y: 70 } },
        "Left Midfielder": { team1: { x: 45, y: 25 }, team2: { x: 50, y: 25 } },
        "Striker": { team1: { x: 65, y: 48 }, team2: { x: 23, y: 48 } },
        "Right Attacker": { team1: { x: 65, y: 70 }, team2: { x: 23, y: 70 } },
        "Left Attacker": { team1: { x: 65, y: 25 }, team2: { x: 23, y: 25 } }
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