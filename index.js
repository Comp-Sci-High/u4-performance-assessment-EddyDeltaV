const express = require('express')
const app = express()

const inventory = [
  {
    category: "Exotic Fruits",
    items: [
      {
        name: "Apples",
        cost: 127.00,
        imageUrls: ["https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRN0nJl9UCN9tR3ACRFPcayj-Q8gGE4lSxwVwNI6EcA9f2sfs97W4ipELkf6bGdOPpSi9LDRWxTxU2gOe0_XdSzdcfG-bMjOOKruOG8Fj-r"],
        path: "/item/0",
        quantity: 120,
      },
      {
        name: "Ruby Roman Grapes",
        cost: 120.00,
        imageUrls: ["https://www.google.com/url?sa=i&url=https%3A%2F%2Fsakura.co%2Fblog%2Fjapan-ruby-roman-grapes-the-most-luxurious-grapes&psig=AOvVaw01wIKd2RZ7YbGCtUIVsafB&ust=1738682367556000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIDYx9nmp4sDFQAAAAAdAAAAABAI"],
        path: "/item/1",
        quantity: 75,
      },
      {
        name: "Densuke Watermelon",
        cost: 9.99,
        imageUrls: ["https://dks.scene7.com/is/image/GolfGalaxy/22FHQMBND8BLCKWHTMNS_Outerspace?wid=1025&qlt=70&fmt=webp&op_sharpen=1", "https://dks.scene7.com/is/image/GolfGalaxy/22FHQMBND8BLCKWHTMNS_Alabaster?wid=1025&qlt=70&fmt=webp&op_sharpen=1", "https://dks.scene7.com/is/image/GolfGalaxy/22FHQMBND8BLCKWHTMNS_Sharkskin_Grey?wid=1025&qlt=70&fmt=webp&op_sharpen=1"],
        path: "/item/2",
        quantity: 50,
      }
    ]
  },
  {
    category: "Dishes",
    items: [
      {
        name: "Summer Dress",
        cost: 29.99,
        imageUrl: "https://ullajohnson.com/cdn/shop/files/ULLA_JOHNSON_BlaireDress__BLANC_01_MAIN.jpg?v=1714067305&width=960",
        path: "/item/3",
        quantity: 100,
        colors: ["pink", "yellow", "white"]
      },
      {
        name: "Leather Handbag",
        cost: 99.99,
        imageUrl: "https://www.letanneur.us/cdn/shop/files/TEMI1014G05-d_c4c045a7-8a31-4b47-943a-85913ad5c3df.jpg?v=1736851853",
        path: "/item/4",
        quantity: 40,
        colors: ["brown", "black"]
      },
      {
        name: "Running Shoes",
        cost: 89.99,
        imageUrl: "https://fullscopesports.com/wp-content/uploads/2022/07/Topo-Athletic-Women-Ultrafly-4-Comfortable-Lightweight-5MM-Drop-Road-Running-Shoes-Profile.jpg",
        path: "/item/5",
        quantity: 60,
        colors: ["blue", "pink", "white"]
      }
      {
        category: "Desserts",
        items: [
          {
            name: "Summer Dress",
            cost: 29.99,
            imageUrl: "https://ullajohnson.com/cdn/shop/files/ULLA_JOHNSON_BlaireDress__BLANC_01_MAIN.jpg?v=1714067305&width=960",
            path: "/item/3",
            quantity: 100,
            colors: ["pink", "yellow", "white"]
          },
          {
            name: "Leather Handbag",
            cost: 99.99,
            imageUrl: "https://www.letanneur.us/cdn/shop/files/TEMI1014G05-d_c4c045a7-8a31-4b47-943a-85913ad5c3df.jpg?v=1736851853",
            path: "/item/4",
            quantity: 40,
            colors: ["brown", "black"]
          },
          {
            name: "Running Shoes",
            cost: 89.99,
            imageUrl: "https://fullscopesports.com/wp-content/uploads/2022/07/Topo-Athletic-Women-Ultrafly-4-Comfortable-Lightweight-5MM-Drop-Road-Running-Shoes-Profile.jpg",
            path: "/item/5",
            quantity: 60,
            colors: ["blue", "pink", "white"]
          }
    ]
  }
]







app.listen(3000, () => {
    console.log("Server running")
  })