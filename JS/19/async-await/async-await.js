//*=================================================
//*               ASYNC-AWAIT
//*=================================================
//? Async-Await ECMAScript 2017 ile Javascript diline eklenmistir.
//? Aslinda Promise yapisinin syntax olarak basitlestirilmis halidir.
//? Bu baglamda sentetik seker benzetmesi yapilabilir.

//* Bir fonskiyonu asenkron hale getirmek icin fonksiyon keyword'nun onune
//* async keyword'u eklenir.

//* Bir async fonksiyon icerisinde await keyword'u ile yapilan istegin cevabinin
//* beklenmesi saglanir.

//* Aslinda dizilis olarak senkron mantiga benzeyen kod yazarak Asenkron
//* kod yazmayi mumkun kilar.

//* Await, promise-temelli herhangi bir fonksiyonun onune getirilerek getirildigi
//* satirdaki kodun durdurulmasini saglar.
//* Yapilan istek yerine getirilip sonuc degerlerinin dondurulmesi ile kodun calismasi devam eder.

// https://newsapi.org/v2/top-headlines?country=us&apiKey=211917e0fcc04a5bbfff6d916a0413ad

const getNews = async () => {
  const API_KEY = "211917e0fcc04a5bbfff6d916a0413ad";
  const URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
  try {
    const res = await fetch(URL);
    if (!res.ok) {
      throw new Error("Somthing went wrong");
    }
    const data = await res.json();
    renderNews(data.articles);
  } catch (error) {
    renderErorr(error);
  }
};
const renderNews = (news) => {
  console.log(news);
  const newsDiv = document.getElementById("news");

  news.forEach((item) => {
    const { title, description, urlToImage, url } = item; //? dest
    newsDiv.innerHTML += `
    <div class="col-md-6 col-lg-4 col-xl-3">
      <div class="card">
         <img src="${urlToImage}" class="card-img-top" alt="...">
         <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${description}</p>
            <a href="${url}" target="_blank" class="btn btn-warning">Detail</a>
         </div>
      </div>
   </div>
  
  `;
  });
};

const renderErorr = (err) => {
  console.log(err);
  const newsDiv = document.getElementById("news");
  newsDiv.innerHTML = `
    <h2 class="text-danger">News cannot be fetched </h2>
    <img src =" ./img/404.png" alt="" </img>`;
};

getNews();
