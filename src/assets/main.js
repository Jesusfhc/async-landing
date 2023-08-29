const url = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC6pGDc4bFGD1_36IKv3FnYg&part=snippet%2Cid&order=date&maxResults=10';

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0b417bc326mshd0b4005436f77b3p186373jsn86140fe26afc',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};


async function fetchData(url)  {
    const response = await fetch(url, options);
	const result = await response.json();
	return result;
}

(async () => {
    try {
        const videos = await fetchData(url);
        let view = `
        ${videos.items.map(video => ` 
        <div class="group relative">
          <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${video.snippet.thumbnails.medium.url}" alt="${video.snippet.description}" class="w-full">
          </div>
          <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
              <span aria-hidden="true" class="absolute inset-0"></span>
              ${video.snippet.title}
            </h3>
          </div>
        </div>`).join('')}
        `;
        content.innerHTML = view;
    } catch (error) {
      console.log(error);
      alert(error);
    }
})();

