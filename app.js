const url = 'https://restcountries.eu/rest/v2/name/Brazil'
fetch(url)
    .then(data => data.json()) 
    .then(data => {
        let body = document.getElementsByTagName('body')[0]
        let = img = document.createElement('img')
        img.setAttribute('src', data[0]. flag)
        body.appendChild(img)
    })