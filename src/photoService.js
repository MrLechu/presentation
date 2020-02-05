export default {
  get: async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/photos/1");
      return await response.json()
    } catch (error) {
      console.log(error);
    }
  }
};
