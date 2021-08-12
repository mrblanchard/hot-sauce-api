document.getElementById('btn').addEventListener('click', getHotSauce);
document.getElementById('addSauce').addEventListener('submit', addSauce);
function getHotSauce(arr) {
  fetch('http://localhost:3000/db')
    .then((res) => res.json())
    .then((data) => {
      let output = `<h2>Hot Sauce API</h2>`;

      data.HotSauce.forEach(function (hotsauce) {
        output += `
        <ul class="list-group bg-light mt-4">
        <li class="list-group-item bg-danger text-light">Company: ${hotsauce.name}</li>
        <li class="list-group-item">Sauce: ${hotsauce.sauce}</li>
        <li class="list-group-item">Description: ${hotsauce.description}</li>
        <li class="list-group-item">Ingredients: ${hotsauce.ingredients}</li>
        <li class="list-group-item">Heat Level: ${hotsauce.heatlevel}</li>
        <li class="list-group-item ">Website: ${hotsauce.web}</li>

        <li class="list-group-item ">E-mail: ${hotsauce.contact[0].email}</li>
        <li class="list-group-item ">Contact: ${hotsauce.contact[0].Facebook}</li>
        <li class="list-group-item ">Facebook: ${hotsauce.contact[0].Instagram}</li>
        <li class="list-group-item ">Instagram: ${hotsauce.contact[0].Twitter}</li>
      
        </ul>
        
      `;
      
      }
      
      );


      document.getElementById('output').innerHTML = output;
      
    })
    
    .catch(error => console.log(error));
    
}

function addSauce(e) {
  e.preventDefault();
  let name = document.getElementById('name').value;
  let description = document.getElementById('description').value;
  let sauce = document.getElementById('sauce').value;
  let web = document.getElementById('web').value;
  let heatLevel = document.getElementById('heatLevel').value;
  let ingredients = document.getElementById('ingredients').value;
  let email = document.getElementById('email').value;
  let twitter = document.getElementById('twitter').value;
  let facebook = document.getElementById('facebook').value;
  let instagram = document.getElementById('instagram').value;
  
  fetch('https://hot-sauce-api.herokuapp.com/HotSauce/', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-type': 'application/json'
    },
    body:JSON.stringify({name: name, description: description, sauce: sauce, web:web, heatLevel:heatLevel, ingredients:ingredients, contact:email, contact:twitter, contact:facebook, contact:instagram
    })
    
  })
  .then((res) => res.json())
  .then((data) => console.log(data))
  
    .catch(error => console.log(error));
    
}

