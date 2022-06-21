let q = document.getElementById('q')
let q_click = document.getElementById('q_click')
let result = document.getElementById('result')

q_click.onclick = () => handleClick(q.value)

function handleClick(input) {
    if ( input.length>0 ){
        getRepo(input)
    }
    else{
        alert('Empty!')
    }
}

function getRepo(repoName) {
    console.log('get results for: "', repoName, '"')
    const API_LINK = `https://api.github.com/users/${repoName}/repos`
    let request = new XMLHttpRequest();
    request.open("GET", API_LINK)
    request.send();
    console.log(request);
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            let data = JSON.parse(request.responseText);
            console.log(data);
            data.map((repo)=>(
                result.innerHTML += `
                <div key=${repo.id} class="flex between item">
                    <div class="info">
                        <a href="${repo.url}">
                            <h3 class="repo-name">${repo.name}</h3>
                        </a>
                        <p class="repo-description">${repo.created_at}</p>
                    </div>
                    <div class="actions">
                        <a href='${repo.downloads_url}' class="link">Download Repo</a>
                    </div>
                </div>
                `
            ))

        }
    }
}