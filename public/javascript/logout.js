async function logout() {
  // add path to users logout
  const response = await fetch("/api/users/logout", {
    method: "post",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
}
// add id from logout from handlebars html
document.querySelector("#logout").addEventListener("click", logout);
