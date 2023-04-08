// Создайте в HTML 3 картинки без атрибутов. Используя следующий массив, задайте источник и альтернативный текст для каждой картинки.
  let arrSoutce  = [
{
    alt: "lion",
  src: "https://www.gesser-images.com/wp-content/uploads/2016/08/Lion-046-_DS30374-300x300.jpg"
},
{
    alt: "elephant",
  src: "https://globalelephants.org/wp-content/uploads/2014/05/Guida-Blog-Post-424-300x300.jpg"
},
{
    alt: "dog",
  src: "https://dickmanroadvet.com/wp-content/uploads/2016/07/dvm2-23-300x300.jpg"
},
]
 

const arrTegImg = document.querySelectorAll("img");

for(let i=0; i<arrTegImg.length; i++){

 arrTegImg[i].setAttribute('src', arrSoutce[i].src);
 arrTegImg[i].setAttribute('alt', arrSoutce[i].alt);
}



// Создайте список с 3 пустыми пунктами в HTML.Используя следующий массив измените текст пунктов.
// ['Item 1', 'Item 2', 'Item 3']

//  const text = document.querySelectorAll("li");
//   const newtext = ['Item 1', 'Item 2', 'Item 3'];
//  for(let i=0; i<text.length; i++){
//   text[i].innerText = newtext[i];

//  }
//  console.log(text);