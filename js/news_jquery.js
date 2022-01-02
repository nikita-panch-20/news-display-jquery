var newsList;
(function getNews(){
    $.get('http://localhost:3000/articles',function(response){
        newsList=response;
        console.log(response);
        displayNews();
    })
    /*$.ajax('http://localhost:3000/articles',{
        type:'GET',
        sucess: function(response){
            newsList=response;
            displayNews();
        }
    })*/
})();

function displayNews(){
    let newsDispCont = newsList.map((articles)=>
    `<br>
    <div class="card">
        <img src=${articles.urlToImage}><br>
        <h4>${articles.title}</h4>
        - ${articles.author}<br>
        <div class="card-body">
            <p>${articles.description}<br>${articles.content}</p>
        </div>
        <a href="${articles.url}" target="_blank">To Know More</a>
    </div>`);
    console.log(newsDispCont);
   let element = document.getElementById('newsList');
   let innerHTML = "";
   for(let index = 0; index<newsDispCont.length; index++){
       innerHTML = innerHTML.concat(newsDispCont[index]);
   }
   element.innerHTML=innerHTML;
 }
 /*$(document).ready(function(){
     $.getJSON("db.json",function(data){
         var news_data='';
         $.each(data,function(key,value){
             news_data +='<br>';
             news_data += '<div class="card">';
             news_data += '<img src='+value.urlToImage+'><br>';
             news_data += '<h4>'+value.title+'</h4>';
             news_data += ''+value.author+'<br>';
             news_data +='<div class="card-body">';
             news_data +='<p>'+value.description+'<br>'+value.content+'</p>';
             news_data +='</div>';
             news_data +='</div>';

         });
         $('#newsList').append(news_data);
     });
 });*/