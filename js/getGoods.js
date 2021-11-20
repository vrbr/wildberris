const getGoods = () => {
    const links = document.querySelectorAll('.navigation-link');

    const getData = () => {
        fetch('/db/db.json')
        .then((response) => response.json())
        .then((data) => {
            localStorage.setItem('goods', JSON.stringify(data));
            // console.log(data);
        });
    }

    links.forEach((link) =>  {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            getData();
        })
    });
}

getGoods();