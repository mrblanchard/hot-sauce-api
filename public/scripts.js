const loadData = async () => {
  try {
    const url1 = 'https://hot-sauce-api.herokuapp.com/HotSauce/0';
    const url2 = 'https://hot-sauce-api.herokuapp.com/HotSauce/1';

    const results = await Promise.all([
      fetch(url1),
      fetch(url2)
    ]);
    const dataPromises = results.map(result => result.json());
    const finalData = await Promise.all(dataPromises);
    return finalData;
  } catch (err) {
    console.error(err);
  }
};

// top level IIFE method
(async () => {
  const data = await loadData();
  console.log(data);
})();

// normal method
// loadData();
// loadData().then(data => console.log(data));
