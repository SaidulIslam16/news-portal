// Loading Categories
const loadCategories = () => {
    fetch(`https://openapi.programming-hero.com/api/news/categories`)
        .then(res => res.json())
        .then(data => displayCategories(data.data.news_category))
}
// displying categories
const displayCategories = (categories) => {
    categories.forEach(category => {
        // console.log(category);
        const categoryUl = document.getElementById('categoryUl');
        const li = document.createElement('li');
        li.innerHTML = `<button onclick="loadNews('${category.category_id}')">${category.category_name}</button>`;
        categoryUl.appendChild(li);
    });
}
loadCategories();

// load news from dynamic category id

const loadNews = (id) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${id}`;

    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayNews(data.data))
}

loadNews('08')

const newsContainer = document.getElementById('news-container');

const displayNews = (news) => {
    newsContainer.innerHTML = '';
    // console.log(news);
    // showing the items number with filter
    if (news.length > 0) {
        const itemsNumber = document.getElementById('items-number');
        itemsNumber.innerHTML = `
            <h4 class="font-medium text-red-400">${news.length} News Found</h4>
            `;
    }
    else{
        const itemsNumber = document.getElementById('items-number');
        itemsNumber.innerHTML = `
            <h4 class="font-medium text-red-400">No News Found</h4>
            `;
    }
    news.forEach(data => {
        // console.log(data);
        let newsDetials = data.details;
        const div = document.createElement('div');
        div.classList.add('my-4')
        div.innerHTML = `
        <div>
        <div class="bg-white p-5 lg:flex gap-x-6 rounded-2xl lg:items-center">
        <div class="flex-initial ">
            <img src="${data.thumbnail_url}" alt="">
        </div>
        <div class="flex-1">
            <h2 class="text-2xl font-bold mt-2">${data.title}</h2>
            <p class="my-6 h-24 text-ellipsis overflow-hidden ">${newsDetials}</p>
            <div class="flex justify-between items-center">
                <div>
                    <a href="" class="flex items-center	">
                        <div class="mr-2">
                            <img src="${data.author.img}" alt="" class="w-10 rounded-full">
                        </div>
                        <div>
                            <h6 class="font-bold">${data.author.name ? data.author.name : "No Name"}</h6>
                            <p class="text-slate-300">${data.author.published_date}</p>
                        </div>
                    </a>
                </div>
                <div class="flex items-center">
                    <i class="fa-sharp fa-regular fa-eye"></i>
                    <p class="p-2 font-bold">${data.total_view ? data.total_view : "No View"}</p>
                </div>
                <div>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                </div>
                <div>
                    <button onclick = "loadModal('${data._id}')"><i class="fa-sharp fa-solid fa-arrow-right-long"></i></button>
                </div>
            </div>
        </div>

    </div>
    </div>
    `;
        newsContainer.appendChild(div);

    })
}