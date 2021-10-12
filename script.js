const countries = [
    {
      image: "https://flagpedia.net/data/flags/w580/de.png",
      country: "Germany",
      population: "81,770,900",
      region: "Europe",
      capital: "Berlin"
    },
    {
      image: "https://flagpedia.net/data/flags/w580/au.png",
      country: "Australia",
      population: "91,657,312",
      region: "Aus",
      capital: "Canberra"
    },
    {
      image: "https://flagpedia.net/data/flags/w580/in.png",
      country: "India",
      population: "1,3179,984,812",
      region: "Asia",
      capital: "New Delhi"
    },
    {
      image: "https://flagpedia.net/data/flags/w580/kr.png",
      country: "South Korea",
      population: "40,400,000",
      region: "Asia",
      capital: "Seoul"
    },
    {
      image: "https://flagpedia.net/data/flags/w580/us.png",
      country: "United States of America",
      population: "323,947,000",
      region: "North America",
      capital: "Washington,D.C"
    },
    {
      image: "https://flagpedia.net/data/flags/w580/tr.png",
      country: "Republic of Turkey",
      population: "83 154 997",
      region: "Asia",
      capital: "Ankara"
    },
    {
      image: "https://flagpedia.net/data/flags/w580/ge.png",
      country: "Georgia",
      population: "3 723 464",
      region: "Asia",
      capital: "Tiblisi"
    },
    {
      image: "https://flagpedia.net/data/flags/w580/ru.png",
      country: "Russian Federation",
      population: "146 780 720",
      region: "Europe",
      capital: "Moscow"
    }
  ];
  
  const mainContainer = document.createElement('div')
  mainContainer.setAttribute('class','container')
  
  document.body.append(mainContainer)
  
  const row1 = document.createElement('div')
  row1.setAttribute('class','row')
  row1.style.marginTop = '45px'
  
  mainContainer.append(row1)
  
  countries.forEach((country)=>{
  
      
      const column = document.createElement('div')
      column.setAttribute('class','col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3')
  
      row1.append(column)
  
      const card = document.createElement('div')
      card.setAttribute('class','card card-black-bg mb-5')
  
      column.append(card)
  
      const image = document.createElement('img')
      image.setAttribute('src',`${country.image}`)
      image.setAttribute('class','card-img-top')
  
      const cardBody = document.createElement('div')
      cardBody.setAttribute('class','card-body card-body-ht')
  
      const cardHead = document.createElement('h5')
      cardHead.setAttribute('class','card-title mb-4')
      cardHead.innerText = country.country
  
      const cardPara1 = document.createElement('p')
      cardPara1.setAttribute('class','card-text')
  
      const cardBold1 = document.createElement('b')
      cardBold1.innerText = 'Population'
      cardBold1.style.marginRight = '15px'
  
      const countryPara1 = document.createElement('p')
      countryPara1.innerText = country.population
  
      cardPara1.append(cardBold1,countryPara1)
  
      const cardPara2 = document.createElement('p')
      cardPara2.setAttribute('class','card-text')
  
      const cardBold2 = document.createElement('b')
      cardBold2.innerText = 'Region'
      cardBold2.style.marginRight = '15px'
  
      const countryPara2 = document.createElement('p')
      countryPara2.innerText = country.region
  
      cardPara2.append(cardBold2,countryPara2)
  
      const cardPara3 = document.createElement('p')
      cardPara3.setAttribute('class','card-text')
  
      const cardBold3 = document.createElement('b')
      cardBold3.innerText = 'Capital'
      cardBold3.style.marginRight = '15px'
  
      const countryPara3 = document.createElement('p')
      countryPara3.innerText = country.capital
  
      cardPara3.append(cardBold3,countryPara3)
  
      cardBody.append(cardHead,cardPara1,cardPara2,cardPara3)
  
      card.append(image,cardBody)
  
  
  })
  
  