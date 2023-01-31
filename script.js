const months = [31,28,31,30,31,30,31,31,30,31,30,31];

function ageCalculate() {
    let today = new Date();
    let inputDate = new Date(document.getElementById("date-input").value);
    let birthMonth,birthDate,BirthYear;

    let birthDetails = {
        date:inputDate.getDate(),
        months:inputDate.getMonth()+1,
        year:inputDate.getFullYear()
    }
    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth()+1;
    let currentDate =  today.getDate();

    leapChecker(currentYear);

    if(
        birthDetails.year > currentYear || 
        (birthDetails.months > currentMonth
        && birthDetails.year == currentYear) || 
        (birthDetails.date > currentDate && 
        birthDetails.months == currentMonth
        && birthDetails.year == currentYear
        )
    ){
        alert("Not Born Yet");
        displayResult("-","-","-");
        return;
    }

    BirthYear = currentYear - birthDetails.year;

    if(currentMonth >= birthDetails.months){
        birthMonth = currentMonth - birthDetails.months;
    }
    else{
        BirthYear--;
        birthMonth = 12 + currentMonth - birthDetails.months;
    }

    if(currentDate >= birthDetails.date){
        birthDate = currentDate - birthDetails.date;
    }
    else{
        birthMonth--;
        let days = months[currentMonth - 2];
        birthDate = days + currentDate - birthDetails.date;
        if(birthMonth < 0){
            birthMonth = 11;
            BirthYear--;
        }
    }
    // console.log(BirthYear,birthMonth,birthDate);

    displayResult(birthDate,birthMonth,BirthYear);
    
}

function displayResult(bDate,bMonth,bYear){
    document.getElementById("years").textContent = bYear;
    document.getElementById("months").textContent = bMonth;
    document.getElementById("days").textContent = bDate;
}

function leapChecker(year){
    if(year % 4 == 0){
        months[1] = 29;
    }
    else{
        months[1] = 28;
    }
}