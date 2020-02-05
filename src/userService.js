import axios from 'axios'

export default {
  get: async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      return await response.data
    } catch (error) {
      console.log(error);
    }
  }
};
