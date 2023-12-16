let row = document.querySelector(".row");

async function userPrompt() {
  let userInput = prompt("Lütfen 1 ile 10 arasında bir sayı yazınız");
  try {
    let userId = parseInt(userInput);
    if (userId <= 0 || userId > 10 || isNaN(userId)) {
      throw new Error(
        "Geçersiz userId. Lütfen 1 ile 10 arasında bir sayı girin."
      );
    }

    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("userId", userId);
    window.history.replaceState(null, null, `?${urlParams.toString()}`);

    await getUsers(userId);
  } catch (error) {
    alert(error);
  }
}

async function getUsers(userId) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    const data = await response.json();
    data.forEach((post) => {
      createCard(post);
    });
  } catch (error) {
    console.error(error);
  }
}

function createCard(post) {
  row.innerHTML += `   <div class="wrapper-div flex--">
  <span class="tilt-orientation--"></span>

  <div class="ui-card ">
<div class="post-yazi">
   <h1 class="title-head--"></i>
   ${post.id}</h1>
   <h3 class='fw-bold'>${post.userId} </h3> 
   <i class="fa-solid fa-building "></i>
       <h3>${post.title} </h3>
       

  <p> ${post.body} 
  </p>
  </div>
  </div>
</div>`;
}

userPrompt();


