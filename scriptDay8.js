/*
Remove Element Javascript ทำ Function การลบ ใส่แยกปุ่ม
การ เพิ่ม ลบ เปลี่ยน
API คือ Application Programing Interface
Rapidapi.com
jsonplaceholder


*/


console.log(document.getElementById("textInput").value);

function addContent()
    {
    console.log("Ok")
    const text = document.getElementById("textInput").value
    const result = document.getElementById("result")
    result.innerHTML +=`<h1>${text}</h1>`
    }
/*
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
*/

async function fetchData()
    {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos');
    console.log(data);
    const json = await data.json();
    console.log(json);

    const titleList = document.getElementById("titleList");
    for(let i=0; i<json.length; i++)
        {titleList.innerHTML +=`<h3>${json[i].title}</h3>`}
    };
fetchData()