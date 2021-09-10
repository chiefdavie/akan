function submitName(){
    event.preventDefault();

    alert('form has been submitted')
    var dateCount = document.getElementById("date").value;
    // console.log(dateCount);
    // var D = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7
    var maleAkan = [
        'Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'
    ];
    var femaleAkan = [
        'Akosua', 'Adwoa', 'Abeana', 'Akua', 'Yaa', 'Afua', 'Ama'
    ];
    var date = new Date(dateCount) ;
    var nameIndex = document.getElementById("name").value;
    var genderIndex = document.getElementById("gender").value;
    var birthdateIndex = document.getElementById("birthdate").value;
}