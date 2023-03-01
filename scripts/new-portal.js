const fetchCategories = () => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
    .then(res => res.json())
    .then(data => showCategories(data.data))
};

const showCategories = data => {
    // console.log(data);
    // capture categories container to append all the category links 
    const categoriesContainer = document.getElementById("categories-container");
    data.news_category.forEach(singleCategory =>{
        // console.log(singleCategory);

        // if it seems difficult, we can skip it. step: 1(advanced)
        // categoriesContainer.innerHTML += `
        // <a class="nav-link" href="#">${singleCategory?.category_name}</a>
        // `;

        // step: 2 (recommended for all us)
        let linkContainer = document.createElement("p");
        linkContainer.innerHTML = `<a class="nav-link" href="#" onclick="fetchCategoryNews('${singleCategory.category_id}', '${singleCategory?.category_name}')">${singleCategory?.category_name}</a>`;
        categoriesContainer.appendChild(linkContainer);
    })
};

// fetch all newses available in a category 
const fetchCategoryNews = (category_id , category_name) =>{
    // console.log(category_id);
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => showAllNews(data.data, category_name))
};

const showAllNews = (data , category_name) =>{
    console.log(data, category_name);

    document.getElementById("news-count").innerText = data.length;
    document.getElementById("category-name").innerText =  category_name;

    const newsContainer = document.getElementById("all-news");

    newsContainer.innerHTML = "";

    data.forEach(singleNews => {
        // console.log(singleNews);
        // newsContainer.innerHTML += ``;
        const card = document.createElement("div");
        card.classList.add("card", "mb-3");
        card.innerHTML = `
        <div class="row g-0">
            <div class="col-md-4">
            <img src="..." class="img-fluid rounded-start" alt="...">
            </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
            </div>
        </div>
        `;
        newsContainer.appendChild(card);
    })
};