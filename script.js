let getProfile = () => {
    fetch('https://reqres.in/api/users').then((data) => {
        // console.log(data);

        return data.json();

    }).then((fetchData) => {
        // console.log(completeData.data[0].email);
        // document.getElementById('fetch-data').innerHTML=completeData.data[0].email;

        let data = "";
        fetchData.data.map((values) => {
            data += `<div class="card">
        <h2>Profile Card</h2>
        <img src=${values.avatar} alt="">
        <h4 class="title">${values.first_name} ${values.last_name}</h4> 
        <h5 class="title">${values.email}</h5>       
    
    </div>`;

        });
        document.getElementById("main-card").innerHTML = data;
    }).catch((error) => {
        console.log(error);
    })


}