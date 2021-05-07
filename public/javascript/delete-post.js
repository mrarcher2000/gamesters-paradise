async function deleteFormHandler(event) {
  event.preventDefault();

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const response = await fetch(" ", {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.replace(" ");
  } else {
    alert(response.statusText);
  }
}

document.querySelector(" ").addEventListene("click", deleteFormHandler);
