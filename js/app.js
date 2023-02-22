// Loading Categories
const loadCategories  = ()=>{
    fetch(`https://openapi.programming-hero.com/api/news/categories`)
    .then(res=>res.json())
    .then(data=>displayCategories(data.data.news_category))
}
// displying categories
const displayCategories = (categories)=>{
    categories.forEach(category => {
        console.log(category);
        const categoryUl = document.getElementById('categoryUl');
        const li = document.createElement('li');
        li.innerHTML= `<button onclick="loadNews(${category.category_id})">${category.category_name}</button>`;
        categoryUl.appendChild(li);
    });
}
loadCategories();

// load news from dynamic category id

const loadNews = (id)=>{
    const url = `https://openapi.programming-hero.com/api/news/category/${id}`

    console.log(url);
}