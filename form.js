document.getElementById("submit").disabled = true;

 function check(){

if(
  document.getElementById("first").value.length>0
  &&
  document.getElementById("last").value.length>0
  &&
  document.getElementById("grade").value.length>0
  &&
  document.getElementById("marks").value.length>0
)
{
  console.log("enabled");
  document.getElementById("submit").disabled = false;
}
else{
  console.log("disabled");
  document.getElementById("submit").disabled = true;
}
}
