fetch("./data.json")
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
for(let i = 0; i < data.distance.length; i++){
    var option = document.createElement('option');
    option.textContent = data.distance[i].unit;
    option.value = data.distance[i].value;
selectOne.append(option);
}
for(let i = 0; i < data.distance.length; i++){
    var option = document.createElement('option');
    option.textContent = data.distance[i].unit;
    option.value = data.distance[i].value;
selectTwo.append(option);
}
}); 

var selectOne = document.getElementById('select-one');
var selectTwo = document.getElementById('select-two');
var button = document.querySelector('button');
var input = document.getElementById('input');
var option = document.getElementById('option');
var res = 0;
var output;
var rate = document.getElementById("rate");

if(input.value < 1 || input.value == ""){
    input.value = 1;
};

selectOne.addEventListener('change', function() {
});

selectTwo.addEventListener('change', function() {
});

button.addEventListener('click', function() {
    if(selectOne.value > 1){
        res = 1/selectOne.value*selectTwo.value*input.value;
    }
    else if(selectOne.value < 1){
        res = selectTwo.value/selectOne.value*input.value;
    }
    else 
        res = input.value*(selectOne.value * selectTwo.value);  

output = input.value + " = " + res.toFixed(2);
rate.textContent = output;
});

const icon = document.querySelector(".icon");
icon.addEventListener("click", ()=>{
    let value = selectOne.value;
    selectOne.value = selectTwo.value;
    selectTwo.value = value;
    output = input.value + " = " + res.toFixed(2);
rate.textContent = output;
})

