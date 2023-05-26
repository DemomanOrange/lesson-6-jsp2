const url = "https://jsonplaceholder.typicode.com/posts"
const resultElement = document.getElementById("result")

fetch(url)
  .then(response => response.json())
  .then(data => {
    
    const filteredUsers = data.filter(user => user.userId === 1)

    
    let resultHTML = ''

    filteredUsers.forEach(user => {
      resultHTML += generateUserBox(user)
    })

    
    resultHTML = `<div class="users-container">${resultHTML}</div>`

    
    resultElement.innerHTML = resultHTML
  })
  


function generateUserBox(user) {
  const userHTML = `
    <div class="user-box">
      <h3>User ${user.userId}</h3>
      <p>Post ID: ${user.id}</p>
      <p>Title: ${user.title}</p>
      <p>Body: ${user.body}</p>
    </div>`

  return userHTML;
}






//dop-dz


const getPostsButton = document.getElementById("getPostsButton");
getPostsButton.addEventListener("click", getPostsByUserId);

function getPostsByUserId() {
  const userIdInput = document.getElementById("userIdInput");
  const userId = userIdInput.value;

  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then(response => response.json())
    .then(posts => {
      const resultElement = document.getElementById("result");
      resultElement.innerHTML = ""; 

      if (posts.length > 0) {
        const usersContainer = document.getElementById("usersContainer");
        usersContainer.innerHTML = ""; 

        posts.forEach(post => {
          const userBox = document.createElement("div");
          userBox.classList.add("user-box");

          const userIdElement = document.createElement("h3");
          userIdElement.textContent = `User ${post.userId}`;

          const postIdElement = document.createElement("p");
          postIdElement.textContent = `Post ID: ${post.id}`;

          const titleElement = document.createElement("p");
          titleElement.textContent = `Title: ${post.title}`;

          const bodyElement = document.createElement("p");
          bodyElement.textContent = `Body: ${post.body}`;

          userBox.appendChild(userIdElement);
          userBox.appendChild(postIdElement);
          userBox.appendChild(titleElement);
          userBox.appendChild(bodyElement);

          usersContainer.appendChild(userBox);
        });
      
      }
    })
   
}
