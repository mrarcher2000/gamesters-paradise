async function logout() {
  // add path to users logout
  const response = await fetch(" ", {
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
document.querySelector(" ").addEventListener("click", logout);
