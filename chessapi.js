

const cnt = document.querySelector(".container");
const ngb = document.querySelector("#players");

















document.querySelector("#btnSearch").addEventListener("click", () => {
    
    let text = document.querySelector("#txtSearch").value;
    
    console.log(text);
    displayPlayer(text);
    




  });
  
  
  
  
  
  
  
  
  
  function displayPlayer(player) {
    const api = "https://lichess.org/api/user/"+player;
  
    getData(api);
  }
  
  
  
  
  function getData(api) {
    fetch(api)
      .then((response) => {
        if (!response.ok) throw new Error("Oyuncu Bulunamadı !");
        return response.json();
      })
      .then((data) => {
        console.log(data);
        ngb.innerHTML="";
       setData2(data);
       
      })
      .catch((err) => renderError(err));
  }
  
  
  
  
  function setData2(data) {



    let html = `
  
  <div class="card-header bg-dark px-5 rounded-left text-light" >Arama Sonucu</div>
          <div class="card-body">
            <div class="row">
            <div class="col-4" >
           
            <a href="https://lichess.org/@/${data.username}" target="_blank" > <img src="resimler/taş.jpg" alt="" style="height: 230px;"></a> 
          </div>
                <div class="col-lg-4">
                <hr / class="bg-dark">
                <h3> Hesap Bilgileri  </h3>
                <div class="card-title"> <span class="font-weight-bold">Oyuncu İsmi: </span>${data.username}</div>
                <div class="card-title"><span class="font-weight-bold">Maç Sayısı:</span> ${data.count.all}</div>
                <div class="card-title"><span class="font-weight-bold">Galibiyet:</span> ${data.count.win}</div>
                <div class="card-title"><span class="font-weight-bold">Yenilgi:</span> ${data.count.loss}</div>
                <hr / class="bg-dark">
                </div>
                <div class="col-lg-4">
               
                <h3>   </h3>
                <div class="card-title"> </div>
                <div class="card-title"></div>
              
               
                </div>
                <div class="col-lg-4">
                <hr />
                <h3> Bullet Bilgileri  </h3>
                <div class="card-title"> <span class="font-weight-bold"> Oyun Sayısı: </span>${data.perfs.bullet.games}</div>
                <div class="card-title"><span class="font-weight-bold"> Oyuncu Skoru:</span> ${data.perfs.bullet.rating}</div>
              
                <hr />
                </div>
                <div class="col-lg-4">
                <hr />
                <h3> HESAP BİLGİLERİ  </h3>
                <div class="card-title"> <span class="font-weight-bold"> Oyun Sayısı: </span>${data.perfs.blitz.games}</div>
                <div class="card-title"><span class="font-weight-bold"> Oyuncu Skoru:</span> ${data.perfs.blitz.rating}</div>
              
                <hr />
                </div>
                <div class="col-lg-4">
                <hr />
                <h3> HESAP BİLGİLERİ  </h3>
                <div class="card-title"> <span class="font-weight-bold"> Oyun Sayısı: </span>${data.perfs.puzzle.games}</div>
                <div class="card-title"><span class="font-weight-bold"> Oyuncu Skoru:</span> ${data.perfs.puzzle.rating}</div>
              
                <hr / >
                </div>
            </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
  
  
  
  
  
  
  `;
  
    const row = document.createElement("div");
    row.classList.add("row");
    row.innerHTML = html;
    ngb.appendChild(row);

    



    
  
   
  }
  
  
  
  function renderError(err) {
    const html = `
        <div class="alert alert-danger">
            ${err.message}
        </div>
    `;
    setTimeout(function () {
      document.querySelector("#errors").innerHTML = "";
    }, 3000);
    document.querySelector("#errors").innerHTML = html;
  }
  
  
  


  


 