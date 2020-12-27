const express = require("express");
const app = express();
const port = 3001;
const cors = require('cors')

app.use(express.json());
app.use(cors())
let posts = [
  {
      id: 0,
      text: "Текст поста1",
      lk: false,
      lv: true,
      
  }
]

app.get("/posts", (req, res) => {
  console.log("req", req);
  res.json({
    posts,
  });
});

app.delete('/posts/:postId', function (req, res) {
  const PID=req.params.postId
 posts.pop(PID, 1);
 res.json({
  success: true
})
console.log('PID',PID)
});
/*app.delete('/posts/:postId', (req, res) => {
  const body = req.body;
  posts = posts.filter(el => el.id != req.params.postId)

  res.json({
      success: true
  })
  console.log("req", req);
});*/


app.get("/posts/:postId", (req, res) => {
  const retPost = posts.find((posts) => {
    return posts.id == req.params.postId;
  });
  console.log("req", req);
  res.json({ retPost });
});

app.post("/posts", (req, res) => {
  console.log("req", req);
  const { body } = req;
  posts.push({
    id: posts.length + 1,
    lk: false,
    lv : false,
    text: body.text,
    
  });
  console.log("body", body);

  res.send("reserved");
});

/*let newPost = {
  title: "pppp",
  description: "rrrrrr",
};

fetch("http://localhost:3000/posts", {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify(newPost),
});
*/
app.put('/posts/:postId', (req, res) => {
  const { thoughtId } = req.params;
  const body = req.body;
  posts.map(thought => {
console.log(thought.id);
console.log(body.text);
      if(thought.id == body.id){
          if(body.lk != null) thought.lk = body.lk === true ? true : false
          if(body.lv != null) thought.lv = body.lv === true ? true : false
          if(body.text != null) {
             // thought.lastEditted = Date.now()
              thought.text = body.text
          }
          return thought
      }
  })

  res.json({
      success: true,
      data: body
  })
});
app.listen;
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);