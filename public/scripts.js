

    const url = "https://hot-sauce-api.herokuapp.com/HotSauce/0";
    async function getSauce(){
    try{
        const response = await fetch(url);
        const data = await response.json();
        const {name, sauce, web, description, contact, email} = data;
        document.getElementById('name').textContent = name;
        document.getElementById('sauceN').textContent = sauce;
        document.getElementById('web').textContent = web;
        document.getElementById('sdescription').textContent = description;
        document.getElementById('media').textContent = contact.email;

      }
      catch (err) {
        console.error(err);
      }
    }

  getSauce();
