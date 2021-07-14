const loadData = async () => {
  const url = 'http://localhost:3000/HotSauce/0';
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
}

loadData();