const productList = [
  {
    id: 1,
    name: "Fresh and Healthy Mixed Mayonnaise Salad",
    img: "./img/image 26 (3).png",
    time: 30,
    type: "Add To Cart",
  },
  {
    id: 2,
    name: "Fruity Pancake with Orange & Blueberry",
    img: "img/image 26 (2).png",
    time: 30,
    type: "Add To Cart",
  },
  {
    id: 3,
    name: "Fruity Pancake with Orange & Blueberry",
    img: "img/image 26 (3).png",
    time: 30,
    type: "Add To Cart",
  },
  {
    id: 4,
    name: "Fresh and Healthy Mixed Mayonnaise Salad",
    img: "./img/image 26 (3).png",
    time: 30,
    type: "Add To Cart",
  },
  {
    id: 5,
    name: "Fruity Pancake with Orange & Blueberry",
    img: "img/image 26 (2).png",
    time: 30,
    type: "Add To Cart",
  },
  {
    id: 6,
    name: "Fruity Pancake with Orange & Blueberry",
    img: "img/image 26 (3).png",
    time: 30,
    type: "Add To Cart",
  },

];

function showProducts(products) {
  if (!Array.isArray(products) || products.length == 0) return false;

  let result = "";
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    result += `
       <div class="shadow transition hover:shadow-xl group">
            <a href=""><img src="${product.img}" alt="" class="rounded-2xl"></a>
                <p class="pt-2 font-bold text-sm"><a href="">${product.name}</a></p>
                <p class="text-red-600 pt-2">${product.time}</p>
                <button class="w-full bg-black text-white p-1 rounded mt-2 ">${product.type}</button>
            </div>
        `;
  }
  return result;
}

document.getElementById("products").innerHTML = showProducts(productList);