console.log('123', typeof window);

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

fetch('https://nextnext-teal.vercel.app/api/todo')
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });
