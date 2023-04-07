let url= "https://kontests.net/api/v1/all";
let response=fetch(url);
response.then((v)=>{
    return v.json();
}).then((v)=>{
    ihtml=""
    let images=['img1.jpg','img2.jpg','img3.jpg','img4.jpg','img5.jpg']
    for(item in v)
    {
        console.log(v[item])
        let n=Math.floor(Math.random() *5);
        
        ihtml+=`
        <div class="card m-2" style="width: 22rem;">
                <img src="${images[n]}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${v[item].name}</h5>
                    <p class="card-text">Start time:${v[item].start_time}</p>
                    <p class="card-text">End time:${v[item].end_time}</p>
                    <p class="card-text">Site:${v[item].site}</p>
                    <p class="card-text">Status:${v[item].status}</p>
                    <a href="${v[item].url}" target="_blank" class="btn btn-primary">Go to contest</a>
                </div>
        </div>
        `
    }
    cardConatiner.innerHTML=ihtml;

})