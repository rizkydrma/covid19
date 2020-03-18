const cards = document.querySelectorAll('.card-body')
fetch('https://covid19.mathdro.id/api/countries/indonesia')
  .then(response => response.json())
  .then(response => {
    const confirmed = response.confirmed
    const recovered = response.recovered
    const deaths = response.deaths
    cards.forEach((card,index) => {
      if(index == 0){
        let title = 'Confirmed'
         card.innerHTML = valueCovid(title,confirmed)
      }else if(index == 1){
        let title = 'Recovered'
        card.innerHTML = valueCovid(title,recovered)

      }else{
        let title = 'Deaths'
        card.innerHTML = valueCovid(title,deaths)
      }
    })

    const footer = document.querySelector('.footer')
    footer.innerHTML = 'Last Update ' + response.lastUpdate
  })
const lists = document.querySelectorAll('.list-group-item')
fetch('https://covid19.mathdro.id/api')
    .then(response => response.json())
    .then(response => {
      const globalConfirmed = response.confirmed
    const globalRecovered = response.recovered
    const globalDeaths = response.deaths
      lists.forEach((list,index) => {
        if(index == 0){
          let title = 'Confirmed'
           list.innerHTML = valueGlobalCovid(title,globalConfirmed)
        }else if(index == 1){
          let title = 'Recovered'
          list.innerHTML = valueGlobalCovid(title,globalRecovered)
  
        }else{
          let title = 'Deaths'
          list.innerHTML = valueGlobalCovid(title,globalDeaths)
        }
    })
  })

function valueCovid(title,covid){
  return `<h5 class="card-title">${title}</h5>
  <p class="card-text">${covid.value}</p>
  <p class="card-text">
  Detail
  <small class="text-muted">${covid.detail}</small></p>`
}
function valueGlobalCovid(title,covid){
  return `<li class="list-group-item"> <p> ${title}: ${covid.value} </p></li>
  `
}