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

async function getRepo(repoName) {
    console.log('get results for: "', repoName, '"')
    const API_LINK = `https://api.github.com/users/${repoName}/repos`
    
    try {
        // await fetch(API_LINK).then(r => r.json()).then(data=>console.log(data))
        let data = await fetch(API_LINK)
        data = await data.json()
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

    } catch (error) {
        console.log('error: ', error)
    }
}