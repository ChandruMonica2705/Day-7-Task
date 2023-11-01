//=>Q1.Get all the countries from Asia continent /region using Filter function
var request2 = new XMLHttpRequest();
request2.open("GET","https://restcountries.com/v3.1/all",true)
request2.send();
request2.onload = function(){
    var data = request2.response;
    var result2 = JSON.parse(data);
    var res2=result2.filter((x)=>x.continents="Asia")
    res2.map((ele)=>console.log(ele.name.common))
}
//=>Q2.Get all the countries with a population of less than 2 lakhs using Filter function
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload = function(){
    var data = request.response;
    var result = JSON.parse(data);
    var res=result.filter((x)=>x.population<200000)
    res.map((ele)=>console.log(ele.name.common))
}
//=>Q3.Print the following details name, capital, flag, using forEach function
var request1 = new XMLHttpRequest();
request1.open("GET","https://restcountries.com/v3.1/all",true)
request1.send();
request1.onload = function(){
    var data = request1.response;
    var result1 = JSON.parse(data);
var res1=result1.forEach((ele)=>console.log(`Name: ${ele.name.common}, Capital: ${ele.capital}, Flags: ${ele.flags.png}`))
}
//=>Q4.Print the total population of countries using reduce function
var request4 = new XMLHttpRequest();
request4.open("GET","https://restcountries.com/v3.1/all",true)
request4.send();
request4.onload = function(){
    var data = request4.response;
    var result4 = JSON.parse(data);
    var res4=result4.reduce((x,y)=>{
        return x+y.population
    },0)
    console.log(res4);
}
//=>Q5.Print the country that uses US dollars as currency.
// var request5 = new XMLHttpRequest();
// request5.open("GET","https://restcountries.com/v3.1/all",true)
// request5.send();
// request5.onload = function(){
//     var data = request5.response;
//     var result5 = JSON.parse(data);
//     var res5=result5.filter((x)=>x.currencies.name)
//     res5.map((ele)=>console.log(ele.name.common))
// }
