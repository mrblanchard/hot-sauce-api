document.getElementById('btn').addEventListener('click', getHotSauce);
document.getElementById('addSauce').addEventListener('submit', addSauce);

function getHotSauce() {
  fetch('https://hot-sauce-api.herokuapp.com/HotSauce/')
    .then((res) => res.json())
    .then((data) => {
      let output = `<h2>Hot Sauce API</h2>`;

      data.forEach(function (hotsauce) {
        output += `
        
        <ul class="list-group bg-light mt-4">
        <li class="list-group-item bg-danger text-light">Company: ${hotsauce.name}</li>
        <li class="list-group-item">Sauce: ${hotsauce.sauce}</li>
        <li class="list-group-item">Description: ${hotsauce.description}</li>
        <li class="list-group-item">Ingredients: ${hotsauce.ingredients}</li>
        <li class="list-group-item">Heat Level: ${hotsauce.heatlevel}</li>
        <li class="list-group-item ">Website: ${hotsauce.web}</li>
        </ul>
        
      `;
      });
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

  fetch('https://hot-sauce-api.herokuapp.com/HotSauce/', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-type': 'application/json'
    },
    body:JSON.stringify({name: name, description: description, sauce: sauce, web:web, heatLevel:heatLevel, ingredients:ingredients
    })
    
  })
  .then((res) => res.json())
  .then((data) => console.log(data))
    .catch(error => console.log(error));

}