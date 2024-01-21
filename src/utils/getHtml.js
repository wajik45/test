import axios from "axios";

export default async function getHtml(url) {
  const { data } = await axios.get(url);

  return data;
}
