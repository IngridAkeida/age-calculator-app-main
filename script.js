function check(){
  const date = new Date();

  const yearNow = date.getFullYear();
  const monthNow = date.getMonth();
  const dayNow = date.getDate();
  
  //catch fill elements

  var yearBirth = Number(window.document.getElementById('year').value);
  var monthBirth = Number(window.document.getElementById('month').value);
  var dayBirth = Number(window.document.getElementById('day').value);

  // Result

  var yearsRes = window.document.getElementById('res-years');
  var monthsRes = window.document.getElementById('res-months');
  var daysRes = window.document.getElementById('res-days');
  
  //errors

  var haveNoValue = (yearBirth || monthBirth || dayBirth).length == 0;
  var haveInvalidDate = (yearBirth || monthBirth || dayBirth) <= 0;
  var haveWrongAge = yearBirth > yearNow;
  
  if(haveNoValue || haveInvalidDate || haveWrongAge) {
    window.alert('Please, check the data and try again!');
  } else {

    var yearAge = yearNow - yearBirth;
    
    if(monthBirth < monthNow ){
      var monthAge = (monthNow + 1) - monthBirth;

    } else if(monthBirth > monthNow ){
      yearAge -= 1;
      monthAge = (monthNow + 1) - monthBirth % 12;
    }

    if(dayBirth < dayNow ){
      var dayAge = dayNow - dayBirth;

    } else if(dayBirth > dayNow ){
      monthAge -= 1;
      dayAge = dayNow - dayBirth % 31;
    }

    alert('Hey, You have ' +yearAge+ 'years,'+monthAge+ ' months, and ' +dayAge+ ' days. ');

    yearsRes.innerHTML = `${yearAge} years`;
    monthsRes.innerHTML = `${monthAge} months`;
    daysRes.innerHTML = `${dayAge} days`;
  }
}
