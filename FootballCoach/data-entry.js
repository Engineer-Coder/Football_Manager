function positionChange() {
    const playerPosition = document.getElementById("playerPosition");
    const secondPositionContainer = document.getElementById("secondPositionContainer");
    
    // Show the second position dropdown if a position is selected
    if (playerPosition.value !== "") {
      secondPositionContainer.style.display = "block";
    } else {
      // Hide the second position dropdown if no position is selected
      secondPositionContainer.style.display = "none";
    }

    playerPosition.addEventListener("click", checkTeams);
    }
  
function checkTeams(){
  let team2 = JSON.parse(localStorage.getItem('team2'));
  const dropdown = document.getElementById("playerPosition");
  const dropdown2 = document.getElementById("secondPlayerPosition");
  // Check if team 2 includes each position and disable the dropdown option
  
  team2.forEach(player => {
    const option = dropdown.querySelector(`[value="${player.position}"]`);
    const option2 = dropdown2.querySelector(`[value="${player.position}"]`);
    if (option) {
      option.disabled = true;
    }
    if (option2) {
      option2.disabled = true;
    }
  });
  dropdown.removeEventListener("click", checkTeams);
}

  function submitData() {
    // Get user input
    const playerName = document.getElementById("playerName").value;
    const playerLastName = document.getElementById("playerLastName").value;
    const playerPosition = document.getElementById("playerPosition").value;
    const secondPlayerPosition = document.getElementById("secondPlayerPosition").value;
  
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
      secondPosition: secondPlayerPosition,
    };
  
    // Store data in localStorage (you may want to replace this with server-side storage)
    const storedData = JSON.parse(localStorage.getItem("playerData")) || [];
    storedData.push(playerData);
    localStorage.setItem("playerData", JSON.stringify(storedData));
    
    // Redirect to the football field display page
    window.location.href = "football-field.html";
  }