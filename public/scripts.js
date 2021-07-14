const loadData = async () => {
  const url = 'https://hot-sauce-api.herokuapp.com/HotSauce';
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
}

loadData();