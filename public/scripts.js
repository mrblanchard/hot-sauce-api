

    const url = "https://hot-sauce-api.herokuapp.com/HotSauce";
    async function getSauce(){
    try{
        const response = await fetch(url);
        const data = await response.json();
        const {name, SauceName, web, description} = data;
        document.getElementById('name').textContent = name;
        document.getElementById('sauce').textContent = SauceName;
        document.getElementById('web').textContent = web;
        document.getElementById('description').textContent = description;        
      }
      catch (err) {
        console.error(err);
      }
    }

  getSauce();

// normal method
// loadData();
// loadData().then(data => console.log(data));
