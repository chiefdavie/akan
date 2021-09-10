function submitName(){
    event.preventDefault();

    var dateCount = document.getElementById("date").value;
    
    var maleAkan = [
        'Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'
    ];
    var femaleAkan = [
        'Akosua', 'Adwoa', 'Abeana', 'Akua', 'Yaa', 'Afua', 'Ama'
    ];
    // var date = new Date(dateCount) ;
    var nameIndex = document.getElementById("name").value;
    var genderIndex = document.getElementById("gender").value;
    var datr = new Date(dateCount);
    var d = datr.getDay()
    var indexD = d-1
    if(genderIndex == 'female'){
        alert('Your akan name is '+ femaleAkan[indexD])
    }
    if(genderIndex == 'male'){
        alert('Your akan name is '+ maleAkan[indexD])
    }
    // console.log(d)
    // alert('form has been submitted')
}