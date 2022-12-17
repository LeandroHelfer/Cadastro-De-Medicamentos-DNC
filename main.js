var med=[];

function addMed(){
    event.preventDefault();
    let newMed = {
        "medName":document.getElementById("fname").value,
        "medQtd":document.getElementById("fqtd").value,
        "medclass":document.getElementById("fclass").value,
    }

    document.getElementById("fname").value="";
    document.getElementById("fqtd").value="";
    document.getElementById("fclass").value="";
    console.log(newMed);

    window.location.href = `submit.html?medName=${newMed.medName}&medQtd=${newMed.medQtd}&medclass=${newMed.medclass}`
}

function getMed(){
    let params = (new URL(document.location)).searchParams;
    let medName = params.get('medName')
    let medQtd = params.get('medQtd')
    let medClass = params.get('medclass')

    console.log(medName);
    console.log(medQtd);
    console.log(medClass);

    document.getElementById("info").innerHTML = 
    `<h2>${medName}</h2>
    <h2>${medQtd}</h2>
    <h2>${medClass}</h2>`
}

getMed();