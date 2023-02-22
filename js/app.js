// Loading Categories
const loadCategories  = ()=>{
    fetch(`https://openapi.programming-hero.com/api/news/categories`)
    .then(res=>res.json())
    .then(data=>displayCategories(data.data.news_category))
}
// displying categories
const displayCategories = (categories)=>{
    categories.forEach(category => {
        // console.log(category);
        const categoryUl = document.getElementById('categoryUl');
        const li = document.createElement('li');
        li.innerHTML= `<button onclick="loadNews('${category.category_id}')">${category.category_name}</button>`;
        categoryUl.appendChild(li);
    });
}
loadCategories();

// load news from dynamic category id

const loadNews = (id)=>{
    const url = `https://openapi.programming-hero.com/api/news/category/${id}`;

    // console.log(url);
    fetch(url)
    .then(res=>res.json())
    .then(data => displayNews(data.data))
}

loadNews('01')

const newsContainer = document.getElementById('news-container');

const displayNews = (news)=>{
    newsContainer.innerHTML ='';
    // console.log(news);
    news.forEach(data=>{
        console.log(data);
        const div = document.createElement('div');
        div.innerHTML = `
        <div>
        <div class="bg-white p-5 lg:flex gap-x-6 rounded-2xl lg:items-center">
        <div class="flex-initial ">
            <img src="${data.thumbnail_url}" alt="">
        </div>
        <div class="flex-1">
            <h2 class="text-2xl font-bold mt-2">${data.title}</h2>
            <p class="my-6">${data.details}</p>
            <div class="flex justify-between items-center">
                <div>
                    <a href="" class="flex items-center	">
                        <div class="mr-2">
                            <img src="${data.author.img}" alt="" class="w-10 rounded-full">
                        </div>
                        <div>
                            <h6 class="font-bold">${data.author.name}</h6>
                            <p class="text-slate-300">${data.author.published_date}</p>
                        </div>
                    </a>
                </div>
                <div class="flex items-center">
                    <i class="fa-sharp fa-regular fa-eye"></i>
                    <p class="p-2 font-bold">${data.total_view}</p>
                </div>
                <div>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                </div>
                <div>
                    <button><i class="fa-sharp fa-solid fa-arrow-right-long"></i></button>
                </div>
            </div>
        </div>

    </div>
    </div>
    `;
    newsContainer.appendChild(div);

    })
}