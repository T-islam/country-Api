async function getApi(){
    const getLink = await fetch('https://restcountries.com/v3.1/all')
    const data = await getLink.json()
    datas (data)
}
getApi()

    const container = document.getElementById('container');
    
 function datas (data){
    const getObject = data.map( data => data)
    getObject.map( data => {
         const div = document.createElement('div')
    
       const name = data.name;
       const CountryName = name.common;
       const officialName = name.official;
       const population = data.population;
       const Capital = data.capital;
       
       const dataInfo = `<div class="country">
        <h3>Country Name : ${CountryName} </h3>
        <h4>Capital Name : ${Capital} </h4>
        <p>Population : ${population} </p>
        <button onclick="countryDetails('${CountryName}') "> Details </button>
        </div>
       
       
       `
       div.innerHTML = dataInfo;
       container.appendChild(div)

    })
 }
 const countryDetails = name => {
    let url = `https://restcountries.com/v3.1/name/${name}`
  async  function details(){ 
    const load = await fetch(url)
    const response = await load.json()
    displayData(response)
    document.getElementById('details').style.display = 'block';
    }
    details()
 }
 const details = document.getElementById('details')
 

 const displayData = data =>{
   const flag = data[0].flags.png;
   const startOfWeek =data[0].startOfWeek;
   const subregion =data[0].subregion
   const area =data[0].area;
   
   const detailsInfo = `
   <img src="${flag}" alt="" srcset="">
   <p>subregion : ${subregion}</p>
   <p>startOfWeek : ${startOfWeek}</p>
   <p>Total Area : ${area}</p>
   <button onclick="back()">Back</button>
   `
   details.innerHTML ='';
   details.innerHTML = detailsInfo;
 }
 const back = () =>{
   document.getElementById('details').style.display = 'none';
   
 }