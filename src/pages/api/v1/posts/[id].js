import axios from "axios";

export default async (req, res) => {
  try {
    const axiosRes = await axios.get(`https://jsonplaceholder.typicode.com/posts/${req.query.id}`);
    const post = axiosRes.data;
    res.status(200).json(post);
  } catch (e) {
    console.log(e);
    res.status(e.status || 400).end("Api Error");
  }
};
