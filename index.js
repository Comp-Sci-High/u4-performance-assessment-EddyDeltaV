// https://chatgpt.com/share/679cec68-fb24-8006-bbb7-df611e1af80e
const express = require('express')
const app = express()

const inventory = [
  {
    category: "Exotic Fruits",
    items: [
      {
        name: "Rose Apples",
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
        name: "Sushi with cavier ",
        cost: 29.99,
        imageUrl: "https://media.post.rvohealth.io/wp-content/uploads/sites/3/2020/02/325225_2200-732x549.jpg",
        path: "/item/3",
        quantity: 100,
      },
      {
        name: "Fugu",
        cost: 99.99,
        imageUrl: "https://d1o84luq0jqpf6.cloudfront.net/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbGlwIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--4387c345eb6bbe0a6f379db316ce02a023849be5/26318224_m.jpg",
        path: "/item/4",
        quantity: 40,
      },
      {
        name: "Grilled Dog",
        cost: 89.99,
        imageUrl: "https://www.rover.com/blog/wp-content/uploads/iStock-610774614-e1652301832537.jpg",
        path: "/item/5",
        quantity: 60,
      }]
  },
  {
    category: "Desserts",
    items: [
      {
        name: "Creme Puff",
        cost: 29.99,
        imageUrl: "https://sugarspunrun.com/wp-content/uploads/2023/01/Cream-Puffs-Recipe-1-of-1.jpg",
        path: "/item/3",
        quantity: 100,
      },
      {
        name: "Candy Apple",
        cost: 99.99,
        imageUrl: "https://sugargeekshow.com/wp-content/uploads/2021/09/candy_apple_recipe_fb.jpg",
        path: "/item/4",
        quantity: 40,
      },
      {
        name: "Cloud Cake",
        cost: 89.99,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTauYLrjNmHiiGTWUq-SVw_pXgT1ffhZpJTGQ&s",
        path: "/item/5",
        quantity: 60,
      }
        
]
  }
]


app.set("view engine", "ejs")

app.use((req, res, next) => {
  console.log(req.method + " " + req.path)
  next()
})

app.use(express.static(__dirname + "/public"))

app.get("/fruits", (req, res)=>{
  res.render("category.ejs", inventory[0])
})
app.get("/dishes", (req, res)=>{
  res.render("category.ejs", inventory[1])
})
app.get("/desserts", (req, res)=>{
  res.render("category.ejs", inventory[2])
})
app.listen(3000, () => {
  console.log("Server running")
})