
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

  const errorMessageDay = window.document.getElementById("errorMessageDay");
  const errorMessageMonth = window.document.getElementById("errorMessageMonth");
  const errorMessageYear = window.document.getElementById("errorMessageYear");

  //logic  
  // date really exist?
  if(
    dayBirth > getDaysInMonth(monthBirth, yearBirthe) || haveNoValue ||
    haveInvalidDate) {

    errorMessageDay.style.display = "block";
    errorMessageMonth.style.display = "block";
    errorMessageYear.style.display = "block";
  
  } // date  
  else {
    errorMessageDay.style.display = "none";
    errorMessageMonth.style.display = "none";
    errorMessageYear.style.display = "none";
  };


  // Is the field not filled in?
  // Is the date less than 0?


  if(haveWrongYear || 
    haveInvalidMonth
    ){
  
    //must be a valid day
    //must be a valid month
    //must be a valid year
  
  } else {

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
}
