document.getElementById('btn').addEventListener('click', getHotSauce);
document.getElementById('addSauce').addEventListener('submit', addSauce);

function getHotSauce() {
  fetch('https://hot-sauce-api.herokuapp.com/HotSauce/')
    .then((res) => res.json())
    .then((data) => {
      let output = `<h2>Hot Sauce API</h2>`;

      data.forEach(function (hotsauce) {
        output += `
        <ul>
        <li>Company: ${hotsauce.name}</li>
        <li>Sauce: ${hotsauce.sauce}</li>
        <li>Description: ${hotsauce.description}</li>
        <li>Ingredients: ${hotsauce.ingredients}</li>
        <li>Heat Level: ${hotsauce.heatlevel}</li>
        <li>Website: ${hotsauce.web}</li>
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