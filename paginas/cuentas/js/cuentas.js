function calcular1()
{
  var num=Number(document.getElementById('num').value);
  var num1=Number(document.getElementById('num1').value);
  var num2=Number(document.getElementById('num2').value);
  var num3=Number(document.getElementById('num3').value);
  var num4=Number(document.getElementById('num4').value);
  var num5=Number(document.getElementById('num5').value);
  var res=(num)+(num1)+(num2)+(num3)+(num4)+(num5);
  document.getElementById('res').value=res;
}

function calcular2()
{
  var nem=Number(document.getElementById('nem').value);
  var nem1=Number(document.getElementById('nem1').value);
  var nem2=Number(document.getElementById('nem2').value);
  var nem3=Number(document.getElementById('nem3').value);
  var ris=(nem)+(nem1)+(nem2)+(nem3);
  document.getElementById('ris').value=ris;
}
