// no api link is given
//so used data from data.json file which was attached to the email
const data=[
    {
        "name":"rajiv",
        "marks":{
            "Maths":"18",
            "English":"21",
            "Science":"45"
        },
        "rollNumber":"KV2017-5A2"
    },
    {
        "name":"abhishek",
        "marks":{
            "Maths":"43",
            "English":"30",
            "Science":"37"
        },
        "rollNumber":"KV2017-5A1"
    },
    {
        "name":"zoya",
        "marks":{
            "Maths":"42",
            "English":"31",
            "Science":"50"
        },
        "rollNumber":"KV2017-5A3"
    }
];

function compare(a, b) {
  const studentA = a.name.toUpperCase();
  const studentB = b.name.toUpperCase();

  let comparison = 0;
  if (studentA > studentB) {
    comparison = 1;
  } else if (studentA < studentB) {
    comparison = -1;
  }
  return comparison;
}

data.sort(compare);


let marksList=[]
function maxMarks(){
  let topper=-1;
  let topperMarks=-1;
  for(let j=0;j<data.length;j++){
    let totalMarks=Number(data[j].marks.Maths)+Number(data[j].marks.English)+Number(data[j].marks.Science);
    marksList.push(totalMarks);
    if(topperMarks<totalMarks){
      topperMarks=totalMarks;
      topper=j;
  }}
  return topper;
}


//adding the name and roll no, total marks and status of students in the table "Students Information"
const table=document.querySelector("table");
name();
function name(){
  for(let i=0;i<data.length;i++){
      let tr = document.createElement("tr");
      let td = document.createElement("td");
      let td2 = document.createElement("td");
      let td3 = document.createElement("td");
      let td4 = document.createElement("td");
      let flag=0;
      //adds the name of the student to the table by turning the strings first letter to uppercase
      let capsName =data[i].name[0].toUpperCase() +  data[i].name.slice(1);
  	  td.appendChild(document.createTextNode(capsName));
      tr.appendChild(td);
      // add the roll no of the student to the table
      td2.appendChild(document.createTextNode(data[i].rollNumber));
  	  tr.appendChild(td2);
      //calculates the total marks of a student
      let totalMarks=Number(data[i].marks.Maths)+Number(data[i].marks.English)+Number(data[i].marks.Science);
      td3.appendChild(document.createTextNode(totalMarks));
  	  tr.appendChild(td3);

      if(Number(data[i].marks.Maths)<20 || Number(data[i].marks.English)<20 || Number(data[i].marks.Science)<20){
        td4.appendChild(document.createTextNode("Fail"));
    	  tr.appendChild(td4);
        flag=1;
        tr.className='red';
      }

      let max=maxMarks();
      if(i==max){
        td4.appendChild(document.createTextNode("Topper"));
    	  tr.appendChild(td4);
        tr.className='green';
      }
      else if(flag==0){
        td4.appendChild(document.createTextNode("Pass"));
    	  tr.appendChild(td4);
      }



      table.appendChild(tr);
  }
}
