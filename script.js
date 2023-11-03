
function check(){
  const date = new Date();

  const yearNow = date.getFullYear();
  const monthNow = date.getMonth() + 1;
  const dayNow = date.getDate();
  
  //catch fill elements

  let yearBirth = Number(window.document.getElementById('year').value);
  let monthBirth = Number(window.document.getElementById('month').value);
  let dayBirth = Number(window.document.getElementById('day').value);

  //show errors

  let fillDay = window.document.getElementById('fill-day');
  let fillMonth = window.document.getElementById('fill-month');
  let fillYear = window.document.getElementById('fill-year');

  let errorMessageDay = window.document.getElementById("errorMessageDay");
  let errorMessageMonth = window.document.getElementById("errorMessageMonth");
  let errorMessageYear = window.document.getElementById("errorMessageYear");

  // Result

  let yearsRes = window.document.getElementById('result-y');
  let monthsRes = window.document.getElementById('result-m');
  let daysRes = window.document.getElementById('result-d');

  // check if is future
/*
  let isFutureYear = yearBirth > yearNow;
  let isFutureMonth = monthBirth > monthNow;
  let isFutureDay = dayBirth > dayNow;

  console.log({
    isFutureYear,
    isFutureMonth,
    isFutureDay
  })*/
  
  //errors

  let haveNoValue = yearBirth == ""
  || monthBirth == ""
  || dayBirth == "";

  let haveInvalidDate = yearBirth < 1 
  || monthBirth < 1 
  || dayBirth < 1 ;

  let haveYearInTheFuture = yearBirth > yearNow;

  let haveInvalidMonth = monthBirth > 12;

  let haveYearBiggerthanNow = yearNow === yearBirth && monthBirth > monthNow;
  
  function getDaysInMonth(month,year){
    return new Date(year, month, 0).getDate();
  }
  console.log(getDaysInMonth(monthBirth,yearBirth))

  

  let hasErrors = (dayBirth > getDaysInMonth(monthBirth, yearBirth)) 
  || haveNoValue 
  || haveInvalidDate;

  //logic  
  // date really exist?
  if(hasErrors){

    fillDay.style.color = "#ff5757";
    fillMonth.style.color = "#ff5757";
    fillYear.style.color = "#ff5757";

    errorMessageDay.style.visibility = "visible";
    errorMessageMonth.style.visibility = "visible";
    errorMessageYear.style.visibility = "visible";
  
  } else {
    fillDay.style.color = "#716f6f";
    fillMonth.style.color = "#716f6f";
    fillYear.style.color = "#716f6f";

    errorMessageDay.style.visibility = "hidden";
    errorMessageMonth.style.visibility = "hidden";
    errorMessageYear.style.visibility = "hidden";

  };

  if (!haveNoValue || !haveInvalidDate) {
    if(haveYearInTheFuture || haveYearBiggerthanNow){
    
      fillYear.style.color = "#716f6f";
      errorMessageYear.style.visibility = "visible";
    
    } else {
  
      fillYear.style.color = "#716f6f";
      errorMessageYear.style.visibility = "hidden";
    }
  
    if(haveInvalidMonth){
  
      fillMonth.style.color = "#ff5757";
      errorMessageMonth.style.visibility = "visible";
    
    } else {
  
      fillMonth.style.color = "#716f6f";
      errorMessageMonth.style.visibility = "hidden";
    }

  }
  

  if (!hasErrors || !haveYearBiggerthanNow || !haveYearInTheFuture || !haveInvalidMonth) {
    let yearAge = yearNow - yearBirth;

    if(monthBirth < monthNow ){
      monthAge = monthNow - monthBirth;

    } else if(monthBirth > monthNow ){
      yearAge -= 1;
      monthAge = monthNow - monthBirth % 12;
    }

    if(dayBirth < dayNow ){
      dayAge = dayNow - dayBirth;

    } else if(dayBirth > dayNow ){
      monthAge -= 1;
      dayAge = dayNow - dayBirth % 31;
    }

    if(yearAge < 0 || monthAge < 0 || dayAge < 0 || haveNoValue){
      yearsRes.innerHTML = "--";
      monthsRes.innerHTML = "--";
      daysRes.innerHTML = "--";
    } else {
      yearsRes.innerHTML = `${yearAge}`;
      monthsRes.innerHTML = `${monthAge}`;
      daysRes.innerHTML = `${dayAge}`;
    }
    
  } else {
    yearsRes.innerHTML = "--";
    monthsRes.innerHTML = "--";
    daysRes.innerHTML = "--";
  }
  
}
