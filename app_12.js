const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '04a7b63742mshe31a0e0ebbb49f8p1cd7ebjsn812e3735989f',
		'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com'
	}
};

const userInput = document.querySelector('input');
const btn = document.querySelector('button');

let params = ''
const callParams = () => {
    params = userInput.value
    fetch(`https://youtube-search-results.p.rapidapi.com/youtube-search/?q=${params}`, options)
        .then(response => response.json())
        .then(data => {
            let output = '';
            data.items.map(item => {
                if(item.type== "channel"){
                    output += `
                    <h1 style="padding-top:10px">頻道名稱:${item.name}</h1>                    
                    <ul>                    
                        <li> 
                            <p>類型:${item.type}</p>
                        </li>
                        </li>
                            <p>影片數:${item.videos}</p>
                        </li>
                        <li>    
                            <a href="${item.url}">前往Youtube</a>                    
                        </li>
                    </ul>
                    `;  
                }else if(item.type== "video"){
                    output += `
                    <h1 style="padding-top:10px">頻道名稱:${item.author.name}</h1>
                    <h1 >影片名稱:${item.title}</h1>
                    <ul>                    
                        <li> 
                            <p>類型:${item.type}</p>
                        </li>
                        <li> 
                            <p>觀看次數:${item.views}</p>
                        <li> 
                        <li>    
                            <a href="${item.url}">前往Youtube</a>                    
                        </li>
                    </ul>
                    `;      
                }else{
                    output += `
                    <h1 style="padding-top:10px">播放清單名稱:${item.title}</h1>
                    <ul>                    
                        <li> 
                            <p>類型:${item.type}</p>
                        </li>
                        <li>    
                            <a href="${item.url}">前往Youtube</a>                    
                        </li>
                    </ul>
                    `;   
                }
                // output += `
                //     <h1 style="padding-top:10px">頻道名稱:${item.name}</h1>
                //     <h1 >影片名稱:${item.title}</h1>
                //     <ul>                    
                //         <li> 
                //             <p>類型:${item.type}</p>
                //         </li>
                //         <li> 
                //             <p>觀看次數:${item.views}</p>
                //         <li> 
                //         </li>
                //             <p>影片數:${item.videos}</p>
                //         </li>
                //         <li>    
                //             <a href="${item.url}">前往Youtube</a>                    
                //         </li>
                //     </ul>
                //     `;                  
            })
            document.querySelector('.result').innerHTML = output;
        })
        .catch(err => console.error(err));
    userInput.value = '';
}


btn.addEventListener('click', callParams)
