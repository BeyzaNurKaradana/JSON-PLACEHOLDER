let row = document.querySelector(".row");

async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  data.forEach((user) => {
    createCard(user);
  });
}

function createCard(user) {
  row.innerHTML += `  <div class="wrapper flex--">
  <span class="tilt-orientation--"></span>

  <div class="ui-card-2 ">
<div class="post-yazi-2"> <div class="card p-3 m-5 " style='width:20rem'>
  <div class='card-title '> 
    <div class='user '>
    
       <h2 >  <i class="fa-solid fa-user  pt-1" ></i>${user.id}</h2>
    </div>
    <h2 class='fw-bold'>${user.name} </h2>
    <h2>${user.username} </h2>
    <div class='email '>
     
      <div> <i class="fa-solid fa-square-envelope pe-1"></i>${user.email} </div>
    </div>
  </div>
  <div class="card-body ">
   
   
       <p>   <i class="fa-solid fa-building "></i>Company: ${user.company.name} ${user.company.catchPhrase} ${user.company.bs}</p>
    
  </div>
  <div class="card-body">
    
     <p><i class="fa-solid fa-location-dot "></i>Address: ${user.address.street} ${user.address.suite} ${user.address.city} 
     ${user.address.zipcode}
     ${user.address.geo.lat} ${user.address.geo.lng} 
     </p>
    
  </div>
  <ul class="list-group list-group-flush">
    <div class='phone '>
     
       <li class="list-group-item">  <i class="fa-solid fa-phone ps-2 pt-1"></i>Phone: ${user.phone}</li>
    </div>
    <div class='website '>
      
      <li class="list-group-item"><i class="fa-solid fa-globe ps-2 pt-1"></i>Website: ${user.website}</li>
    </div>
  </ul>
</div>   </div>
</div>
</div>`;
}

getUsers();
