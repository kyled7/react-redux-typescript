export const testRequest = (): Promise<string> => {
  console.log("fetch API");
  return new Promise((resolve, reject) => {
    let rand = Math.floor(Math.random() * 10 + 1);
    setInterval(() => {
      if (rand < 7) {
        resolve("Hello, I'm a demo item from API");
      } else {
        reject("Failed");
      }
    }, 1000);
  });
};
