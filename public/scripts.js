fetch('https://hot-sauce-api.herokuapp.com/HotSauce/',{
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'hotsauce'
  })
})
.then(res => {
  return res.json()

})

.then(data => {
  return data
})

.catch(error => console.log('error'))
    // const url = "https://hot-sauce-api.herokuapp.com/HotSauce/";
    // async function getSauce(){
    // try{
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     const {name, sauce, web, description, contact, email} = data;
    //     document.getElementById('name').textContent = name;
    //     document.getElementById('sauceN').textContent = sauce;
    //     document.getElementById('web').textContent = web;
    //     document.getElementById('sdescription').textContent = description;
    //     document.getElementById('media').textContent = contact.email;

    //   }
    //   catch (err) {
    //     console.error(err);
    //   }
    // }

  // getSauce();
