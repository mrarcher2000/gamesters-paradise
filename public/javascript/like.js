
async function upvoteClickHandler(event) {
    event.preventDefault();

    
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    

    
    const apiRoute1 = '/api/posts/like/';
    const apiUrl1 = apiRoute1.concat(id);


      const response = await fetch(apiUrl1, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        console.log(response);
        // document.location.reload();
      } else {
        alert(response.statusText);
      }
  }

  
  document.querySelector('.upvote-btn').addEventListener('click', upvoteClickHandler);