try{
    var request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.eu/rest/v2/all', true)

request.send();

request.onload = function () {
    var data = JSON.parse(this.response);
    console.log(data);

    //All asian countries
    const asia=data.filter(element=>element.region==='Asia')
    console.log('Array of all asian countries======================================')
    console.log(asia)

    //countries with populatio<2lakh
    const lesspopu=data.filter(element=>element.population<200000)
    console.log('=====>Countriews with population less than 2 lakh')
    console.log(lesspopu)

    //print:name,capital,flag
    console.log('=======>name,capital&Flag of all countries')
    data.forEach(element => {
        console.log(element.name)
        console.log(element.capital)
        console.log(element.flag)
    });

    //total population of countries
    const totalpopulation=data.reduce((accumulator,total)=>{
        return total.population+accumulator;
    },0)
    console.log('========>Total population of all countries')
    console.log(totalpopulation)

    //total population asia
    const asiapopulation=asia.reduce((total,element)=>{
        return total+element.population;
    },0)
    console.log('=============>Total population of asia')
    console.log(asiapopulation);

    //print the country that uses us dollars as currency
    const usdcountry=data.filter(country=>country.currencies[0].code==='USD')
    console.log('=========>countryies that uses USD as currency')
    usdcountry.forEach(country=>{
        console.log(country.name)
    })
}
}
catch(e){
    console.log('Error occured')
}