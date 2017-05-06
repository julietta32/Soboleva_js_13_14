'use strict;'

var test=[
    
    {
        question: 'Вопрос № 1',
        answer1: 'Ответ № 1',
        answer2: 'Ответ № 2',
        answer3: 'Ответ № 3', 
        answerCorrect: 'Ответ № 1',
    },
    
    {
        question: 'Вопрос № 2',
        answer1: 'Ответ № 1',
        answer2: 'Ответ № 2',
        answer3: 'Ответ № 3',
        answerCorrect: 'Ответ № 2',
    },
    {
        question: 'Вопрос № 3',
        answer1: 'Ответ № 1',
        answer2: 'Ответ № 2',
        answer3: 'Ответ № 3',
        answerCorrect: 'Ответ № 3',
    }
    ];


localStorage.setItem('anketa',JSON.stringify(test));
localStorage.getItem('anketa');
 


$(function(){
    var html=$('#test').html();
    
     var answer= tmpl(html,{
      data:test
});
   
        $('body').append(answer);
});




var arrCorrect = [];

for(var i=0; i<test.length; i++)
{
    arrCorrect.push(test[i].answerCorrect);
};



var CorrectJoin='';
CorrectJoin=arrCorrect.join();




var arrUser=[];

var UserJoin='';

$(document).ready(function(){

$("input:submit").click(function() {

      $("input:checkbox:checked").each(function() {
       arrUser.push($(this).next('label').text());        
});
   
  UserJoin= arrUser.join();
             
    if(UserJoin!=CorrectJoin) {
        alert ("Вы ошиблись")}
        
        else{ alert("Тест пройден")}
    
  $(":checkbox").attr("checked","checked");      
      });    
    
 });
localStorage.clear();
                  

     
           
    

 

      





