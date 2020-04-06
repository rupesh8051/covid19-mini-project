function   liveUpdate(){
    let select_div = document.getElementById('Inffected'); 
    let recovered =  document.getElementById('recovered');
    let activeCases =  document.getElementById('active-cases');
    let Total_Unresolved =  document.getElementById('Total_Unresolved');
    let newCasesToday = document.getElementById('newcasestoday');
    let totalseriouscases = document.getElementById('totalseriouscases');
    // let contries = document.getElementById('countries');
    let newdeathstoday = document.getElementById('newdeathstoday');

        fetch('https://api.thevirustracker.com/free-api?global=stats',).then(function(response){
            return response.json();
        }).then(function (data){
            select_div.innerText = data.results[0].total_cases;
            recovered.innerText = data.results[0].total_recovered;
            activeCases.innerText = data.results[0].total_active_cases;
            Total_Unresolved.innerText = data.results[0].total_unresolved;
            newCasesToday.innerText = data.results[0].total_new_cases_today;
            totalseriouscases.innerText = data.results[0].total_serious_cases;
            // contries.innerText = data.results[0].total_affected_countries;
            newdeathstoday.innerText = data.results[0].total_new_deaths_today;
            console.log(data);

        }).catch(function(error){
            console.log(error);
        });
    }

     

setInterval( ()=>{
    liveUpdate();
},9000)






 
