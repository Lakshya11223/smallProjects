const name  = document.getElementById('nameInput');
const job = document.getElementById('jobInput');
const age = document.getElementById('ageInput');
const bio = document.getElementById('bioInput');
document.addEventListener("DOMContentLoaded", function () {
    const name = document.getElementById('nameInput');

    name.addEventListener('input', function () {
        document.getElementById('nameDisplay').innerText = name.value || "Not provided";
    });
    job.addEventListener('input', function () {
        document.getElementById('jobDisplay').innerText = job.value || "Not provided";
    })
    age.addEventListener('input', function () {
        document.getElementById('ageDisplay').innerText = age.value || "Not provided";
    });
    bio.addEventListener('input', function () {
        document.getElementById('bioDisplay').innerText = bio.value || "Not provided" ;
    })
});
// seekne ki baat DOMContentLoaded ek eveent listner hota he jo jab kam karege jab hamara dom load hochuka ho 
// input bhi ek event he jaha par input khatam hote hi vo   work karega mtlb show hone lag jaayega