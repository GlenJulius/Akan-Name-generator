document.getElementById('akanForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const dateInput = document.getElementById('birthdate').value;
    const gender = document.getElementById('gender').value;
  
    if (!dateInput || !gender) {
      alert("Please fill out all fields.");
      return;
    }
  
    const date = new Date(dateInput);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
  
    if (day < 1 || day > 31 || month < 1 || month > 12) {
      alert("Please enter a valid date.");
      return;
    }
  
    // Formula to calculate day of week
    const CC = Math.floor(year / 100);
    const YY = year % 100;
    const MM = month;
    const DD = day;
    const d = Math.floor((((CC / 4) - 2 * CC - 1) + (5 * YY / 4) + (26 * (MM + 1) / 10) + DD) % 7);
  
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  
    const dayOfWeek = (date.getDay() + 7) % 7; // To make sure it's 0-6
  
    let akanName = gender === "male" ? maleNames[dayOfWeek] : femaleNames[dayOfWeek];
    let resultMessage = `You were born on a ${daysOfWeek[dayOfWeek]}. Your Akan name is <strong>${akanName}</strong>!`;
  
    document.getElementById("result").innerHTML = resultMessage;
  });
  