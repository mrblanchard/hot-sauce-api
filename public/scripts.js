document.getElementById('btn').addEventListener('click', getHotSauce);

function getHotSauce() {

  fetch('https://hot-sauce-api.herokuapp.com/HotSauce/')
    .then((res) => res.json()) 
    .then((data) => {
      let output = `<h2>Hot Sauce API</h2>`;

    data.forEach(function(hotsauce){
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
