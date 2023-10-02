const container = document.querySelector(".container")
const coffees = [
  { name: "Perspiciatis", image: "https://th.bing.com/th/id/OIP.C1V35F8uDiQA2S0-id9A-QHaEW?pid=ImgDet&rs=1" },
  { name: "Voluptatem", image: "https://th.bing.com/th/id/OIP.qU-gxASamO_HjL5Ythh6SQHaEK?pid=ImgDet&rs=1" },
  { name: "Explicabo", image: "https://th.bing.com/th/id/OIP.C1V35F8uDiQA2S0-id9A-QHaEW?pid=ImgDet&rs=1" },
  { name: "Rchitecto", image: "https://th.bing.com/th/id/OIP.C1V35F8uDiQA2S0-id9A-QHaEW?pid=ImgDet&rs=1" },
  { name: " Beatae", image: "https://th.bing.com/th/id/OIP.8L8Y8b5wkVO-0Sgc2ffygAHaHa?pid=ImgDet&rs=1" },
  { name: " Vitae", image: "https://th.bing.com/th/id/OIF.Vt0cHJZ8iVK2lLhUSfl8fg?pid=ImgDet&rs=1" },
  { name: "Inventore", image: "https://th.bing.com/th/id/OIP.C1V35F8uDiQA2S0-id9A-QHaEW?pid=ImgDet&rs=1" },
  { name: "Veritatis", image: "https://th.bing.com/th/id/OIP.fqJCvqSefHH4BVc5mUJhDgHaEI?pid=ImgDet&rs=1" },
  { name: "Accusantium", image: "https://th.bing.com/th?id=OIF.zby%2bWOieoOmQaFj27SpoyQ&pid=ImgDet&rs=1" },
]
const showCoffees = () => {
    let output = ""
    coffees.forEach(
      ({ name, image }) =>
        (output += `
                <div class="card">
                  <img class="card--avatar" src=${image} />
                  <h1 class="card--title">${name}</h1>
                  <a class="card--link" href="#">Taste</a>
                </div>
                `)
    )
    container.innerHTML = output
  }
  
  document.addEventListener("DOMContentLoaded", showCoffees)

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }