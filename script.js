let url = "https://kontests.net/api/v1/all";
let response = fetch(url);

response
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Network response was not ok");
    }
  })
  .then((data) => {
    let cardContainer = document.getElementById("cardContainer");
    let ihtml = "";
    let images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];
    for (item in data) {
      console.log(data[item]);
      let n = Math.floor(Math.random() * 5);

      ihtml += `
        <div class="card m-2" style="width: 22rem;">
                <img src="${images[n]}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${data[item].name}</h5>
                    <p class="card-text">Start time: ${data[item].start_time}</p>
                    <p class="card-text">End time: ${data[item].end_time}</p>
                    <p class="card-text">Site: ${data[item].site}</p>
                    <p class="card-text">Status: ${data[item].status}</p>
                    <a href="${data[item].url}" target="_blank" class="btn btn-primary">Go to contest</a>
                </div>
        </div>
        `;
    }
    cardContainer.innerHTML = ihtml;
  })
  .catch((error) => {
    // Handle the error, you can display a message to the user
    console.log("There was a problem with the fetch operation:", error);
    let errormsg = document.querySelector(".error-container");
    console.log(errormsg);
    setTimeout(()=> errormsg.style.display = "flex",5000);
    document.body.appendChild(errorMessage);
  });
