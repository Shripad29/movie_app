let APIKey = "954635e8";
let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");

const getData = async (movie) => {
  try {
    let fetchData = await fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=${APIKey}&t=${movie}`
    );
    let jsonData = await fetchData.json();
    console.log(jsonData);

    document.querySelector(".card").innerHTML = "";
    searchInput.value = "";
    let div = document.createElement("div");
    div.classList.add("movieCard");
    div.innerHTML = `
  <img src="${jsonData.Poster}" alt="">
  <div class="cardText">
      <h1>${jsonData.Title}</h1>
      <p class='rating'> Rating : <span>${jsonData.Ratings[0].Value}</span> </p>
      <a href="">${jsonData.Genre}</a>
      <p> Release : <span>${jsonData.Released}</span> </p>
      <p> Duration : <span>${jsonData.Runtime}</span> </p>
      <p> Discription : <span>${jsonData.Plot}</span> </p>
      <p> <span></span> </p>
  </div>
  `;
    document.querySelector(".card").appendChild(div);
  } catch (error) {
       document.querySelector('.card').innerHTML = "<h2>Enter Valid Movie Name</h2>"
  }
};

searchBtn.addEventListener("click", function () {
  let movieName = searchInput.value;
  if (movieName != "") {
    getData(movieName);
  } else {
    document.querySelector(".card").innerHTML =
      "<h2>Hey!! Search Movie Name</h2>";
  }
});
