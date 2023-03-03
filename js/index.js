const loadData = () => {
   fetch("https://openapi.programming-hero.com/api/ai/tools")
   .then(res => res.json())
   .then(data =>displayData(data.data.tools.slice(0, 6)))
}

const displayData = cards => {
    const dataContainer = document.getElementById('data-container');
     dataContainer.innerHTML='';
    cards.forEach(card => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('col');
        cardDiv.innerHTML = `
        <div class="card mt-5">
                    <img src="${card.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">Features</h5>
                      <ol>
                      <li class="card-text">${card.features[0]}</li>
                      <li class="card-text">${card.features[1]}</li>
                      <li class="card-text">${card.features[2]}</li>
                      </ol>
                      <p><hr/></p>

                      <div class="d-flex justify-content-between">
                      <div>
                      <h5 class="font-bold">${card.name}</h5>
                      <p><i class="fa-regular fa-calendar-days"></i> ${card.published_in}</p>
                      </div>
                      <div>
                      <button onclick="singleCardDetails('${card.id}')" class="bg-danger-subtle text-danger p-3 rounded-circle border border-0" data-bs-toggle="modal" data-bs-target="#cardDetailModal"><i class="fa-solid fa-arrow-right"></i></button>
                      </div>
                      </div>
                    </div>
                  </div>
        `;
        dataContainer.appendChild(cardDiv);
    })

   
}

const showAllCards = () =>{

    fetch("https://openapi.programming-hero.com/api/ai/tools")
    .then(res => res.json())
    .then(data => {
        document.getElementById('spinner').classList.add('d-none')
        displayData(data.data.tools)
    })
}

document.getElementById('btn-show-all').addEventListener('click',function(){
    const showAll = document.getElementById('show-all')
    showAll.classList.add('d-none')
    document.getElementById('spinner').classList.remove('d-none')
})

const singleCardDetails = async id =>{
   
const url =`https://openapi.programming-hero.com/api/ai/tool/${id}`
    fetch(url)
   const res = await fetch(url);
   const data = await res.json();
   displayDataDetails(data.data);
}

const displayDataDetails = modal =>{
  const modalTitle = document.getElementById('cardDetailModalLabel')
   modalTitle.innerHTML =`
  <section class="d-flex p-2 rounded-3 gap-3">
  <div class="fw-bold p-4 bg-danger-subtle border border-dark">
  <p>${modal.description}</p>

  <div class="d-flex justify-content-around gap-3">
  <p class="fw-bold p-4 bg-white rounded text-success">${modal.pricing[0].price}</br>
  ${modal.pricing[0].plan}
  <p class="fw-bold p-3 bg-white rounded text-primary">${modal.pricing[1].price}</br>
  ${modal.pricing[1].plan}
  <p class="fw-bold p-3 bg-white rounded text-danger">${modal.pricing[2].price}</br>
  ${modal.pricing[2].plan}
  </p>
  </div>
  


  <div class="d-flex gap-4">

  <div>
  <h1 class="fw-bold">Features<h1>
  <ul class="fs-5 text">
  <li>${modal.features[1].feature_name}</li>
  <li>${modal.features[2].feature_name}</li>
  <li>${modal.features[3].feature_name}</li>
  </ul>
  </div>


  <div>
  <h1 class="fw-bold">Integrations</h1>
  <ul class="fs-5 text">
  <li>${modal.integrations[0]}</li>
  <li>${modal.integrations[1]}</li>
  <li>${modal.integrations[2]}</li>
  </ul>
  </div>

  </div>

  </div>




  

  </section>
   ` 
   ;

}
loadData();



