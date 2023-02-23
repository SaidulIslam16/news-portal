
const mainModal = document.getElementById('defaultModal');
const loadModal = (id)=>{
    mainModal.classList.remove('hidden')
    const url = `https://openapi.programming-hero.com/api/news/${id}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayModal(data.data[0]))
}

const displayModal =(post)=>{
    console.log(post);
    mainModal.innerHTML = `
    <div class="bg-black bg-opacity-50 flex justify-center absolute inset-0 w-full p-4 overflow-x-hidden">
    <div class=" max-w-3xl">
        <!-- Modal content -->
        <div class=" bg-white rounded-lg shadow">
            <!-- Modal header -->
            <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900">
                    ${post.title}
                </h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                    <svg onclick = "closeModal()" aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <!-- Modal body -->
            <div class="p-6 space-y-6">
                <!-- Author Info -->
                <div class="flex justify-between items-center">
                    <div>
                        <a href="" class="flex items-center	">
                            <div class="mr-2">
                                <img src="${post.author.img}" alt="" class="w-10 rounded-full">
                            </div>
                            <div>
                                <h6 class="font-bold">${post.author.name}</h6>
                                <p class="text-slate-300">${post.author.published_date}</p>
                            </div>
                        </a>
                    </div>
                </div>
                <!-- post image -->
                <div><img src="${post.image_url}" alt=""></div>
                <!-- post detials -->
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">${post.details}</p>
            </div>
            <!-- Modal footer -->
        </div>
    </div>
</div>
    `
}


const closeModal = ()=>{
    mainModal.classList.add('hidden')
}