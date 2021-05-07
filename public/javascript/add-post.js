async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector(" ").nodeValue;

  const response = await fetch(" ", {
    method: "POST",
    body: JSON.stringify.stringify({
      title,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace(" ");
  } else {
    alert(response.statusText);
  }
}

document.querySelector(" ").addEventListener("submit", newFormHandler);
