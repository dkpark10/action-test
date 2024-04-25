console.log('123', typeof window);

fetch('http://localhost:8080/api/contents')
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.err(err);
  });
