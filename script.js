
function check(){
  const date = new Date();

  const yearNow = date.getFullYear();
  const monthNow = date.getMonth() + 1;
  const dayNow = date.getDate();
  
  //catch fill elements

  let yearBirth = Number(window.document.getElementById('year').value);
  let monthBirth = Number(window.document.getElementById('month').value);
  let dayBirth = Number(window.document.getElementById('day').value);

  // Result

  let yearsRes = window.document.getElementById('result-y');
  let monthsRes = window.document.getElementById('result-m');
  let daysRes = window.document.getElementById('result-d');
  
  //errors

  let haveNoValue = (yearBirth || monthBirth || dayBirth).length == 0;

  let haveInvalidDate = (yearBirth || monthBirth || dayBirth) <= 0;

  let haveWrongYear = yearBirth > yearNow;

  let haveInvalidMonth = monthBirth > 12;
  
  function getDaysInMonth(month,year){
    return new Date(year, month, 0).getDate();
  }
  console.log(getDaysInMonth(monthBirth, yearBirth));

  const fillDay = window.document.getElementById("fill-day");

  const fillMonth = window.document.getElementById("fill-month");

  const fillYear = window.document.getElementById("fill-year");


  const errorMessageDay = window.document.getElementById("errorMessageDay");

  const errorMessageMonth = window.document.getElementById("errorMessageMonth");

  const errorMessageYear = window.document.getElementById("errorMessageYear");

  //logic  
  // date really exist?
  if(
    dayBirth > getDaysInMonth(monthBirth, yearBirth) || haveNoValue ||
    haveInvalidDate) {

    fillDay.style.color = "#ff5757";
    fillMonth.style.color = "#ff5757";
    fillYear.style.color = "#ff5757";

    errorMessageDay.style.display = "block";
    errorMessageMonth.style.display = "block";
    errorMessageYear.style.display = "block";
  
  } else {

    fillDay.style.color = "#716f6f";
    fillMonth.style.color = "#716f6f";
    fillYear.style.color = "#716f6f";

    errorMessageDay.style.display = "none";
    errorMessageMonth.style.display = "none";
    errorMessageYear.style.display = "none";

  };

  if(haveWrongYear){
  
    fillYear.style.color = "#716f6f";
    errorMessageYear.style.display = "block";
  
  } else {

    fillYear.style.color = "#716f6f";
    errorMessageYear.style.display = "none";
  }

  if(haveInvalidMonth){

    fillMonth.style.color = "#ff5757";
    errorMessageMonth.style.display = "block";
  
  } else {

    fillMonth.style.color = "#716f6f";
    errorMessageMonth.style.display = "none";
  }

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

    yearsRes.innerHTML = `${yearAge}`;
    monthsRes.innerHTML = `${monthAge} `;
    daysRes.innerHTML = `${dayAge} `;
}
