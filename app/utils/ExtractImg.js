export const extractImage = (html) => {
  const div = document.createElement("div");

  div.innerHTML = html;

  const img = div.querySelector("img");

  if (img) {
    const src = img.src;

    const updatedSrc = src.replace(
      "http://localhost:3000/api/uploads",
      "https://admin.avexim.com/api/uploads"
    );
    console.log("🚀 ~ extractImage ~ updatedSrc:", updatedSrc);
    return updatedSrc;
  }

  return null;
};
