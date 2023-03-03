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
   modalTitle.innerText = modal.description
   ;

}
loadData();



