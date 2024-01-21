export default async function getHtml(url) {
  const response = await fetch(url);
  const data = await response.text();

  return data;
}
