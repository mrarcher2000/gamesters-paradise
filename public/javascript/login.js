// function for login
async function loginFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector().value.trim();
  //  add id for email log in from html handlebars within parenths after querySelector
  const password = document.querySelector().value.trim();
  //  add id for password log in html handlebars within parenths after querySelector

  if (email && password) {
    const response = await fetch(" ", {
      // fetch quotes should contain route to api user logins
      method: "post",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
}

// function for sign up form

async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector().value.trim();
  //  add id for username sign up from html handlebars within parenths after querySelector
  const email = document.querySelector().value.trim();
  //  add id for email sign up from html handlebars within parenths after querySelector
  const password = document.querySelector().value.trim();
  //  add id for password sign up html handlebars within parenths after querySelector

  if (username && email && password) {
    const response = await fetch(" ", {
      method: "post",
      body: JSON.stringify({
        username,
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
}

// add in class from the log in form from handlebars html to parenths after querySelector
document.querySelector(" ").addEventListener("submit", loginFormHandler);

//  add in class from the log in form from handlebars html to parenths after querySelector
document.querySelector(" ").addEventListener("submit", signupFormHandler);
