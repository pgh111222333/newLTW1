const menuItems = [
    { name: "Dish 1", price: "Giá 1", img: "https://via.placeholder.com/150" },
    { name: "Dish 2", price: "Giá 2", img: "https://via.placeholder.com/150" },
    { name: "Dish 3", price: "Giá 3", img: "https://via.placeholder.com/150" },
    { name: "Dish 4", price: "Giá 4", img: "https://via.placeholder.com/150" },
    { name: "Dish 5", price: "Giá 5", img: "https://via.placeholder.com/150" },
    { name: "Dish 6", price: "Giá 6", img: "https://via.placeholder.com/150" },
    { name: "Dish 7", price: "Giá 7", img: "https://via.placeholder.com/150" },
    { name: "Dish 8", price: "Giá 8", img: "https://via.placeholder.com/150" },
  ];
  
  const menuContainer = document.getElementById("menu-container");
  
  // Lặp qua danh sách và tạo thẻ HTML
  menuItems.forEach((item) => {
    const card = `
      <div class="col-md-4 mb-4">
        <div class="card">
          <img src="${item.img}" class="card-img-top" alt="${item.name}">
          <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">${item.price}</p>
            <a href="#" class="btn btn-order">Order</a>
          </div>
        </div>
      </div>
    `;
    menuContainer.innerHTML += card;
  });
  