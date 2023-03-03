const loadData = async () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url);
    const data = await res.json();
    displayData(data.data.tools);
}

const displayData = cards => {
    const dataContainer = document.getElementById('data-container');
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
                      <button class="bg-danger-subtle text-danger p-3 rounded-circle border border-0"><i class="fa-solid fa-arrow-right"></i></button>
                      </div>
                      </div>
                    </div>
                  </div>
        `;
        dataContainer.appendChild(cardDiv);
    })
}

loadData();
