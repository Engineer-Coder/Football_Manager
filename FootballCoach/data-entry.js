function positionChange() {
    const playerPosition = document.getElementById("playerPosition");
    const secondPositionContainer = document.getElementById("secondPositionContainer");
    
    // Show the second position dropdown if the user selects a position
    if (){
      
    }
    if (playerPosition.value !== "") {
      secondPositionContainer.style.display = "block";
    } else {
      // Hide the second position dropdown if no position is selected
      secondPositionContainer.style.display = "none";
    }
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