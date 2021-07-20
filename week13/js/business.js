

fetch("./js/business.json")
.then((response) => {
    return response.json()
})
.then((jsObject) => {
    console.log(jsObject)
    let business=document.querySelector('.business');

    for (let j of jsObject["Business Goup A"]){
        const div = document.createElement('div');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const p2 = document.createElement('p');
        

        h3.textContent =j.FirstName + ' ' + j.address.streetAddress ;
        p.textContent = j.lastName + ' ' + j;
        p2.textContent = j.phoneNumbers[0].number;
        

        div.appendChild(h3);
        div.appendChild(p);
        div.appendChild(p2);
        business.appendChild(div);
     console.log(j)
    }

    for (let j of jsObject["Business Goup B"]){
        const div = document.createElement('div');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const p2 = document.createElement('p');
        

        h3.textContent =j.FirstName + ' ' + j.address.streetAddress ;
        p.textContent = j.lastName + ' ' + j;
        p2.textContent = j.phoneNumbers[0].number;

        div.appendChild(h3);
        div.appendChild(p);
        div.appendChild(p2);
        business.appendChild(div);
     console.log(j)
    }

    for (let j of jsObject["Business Goup C"]){
        const div = document.createElement('div');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const p2 = document.createElement('p');
        

        h3.textContent =j.FirstName + ' ' + j.address.streetAddress ;
        p.textContent = j.lastName + ' ' + j;
        p2.textContent = j.phoneNumbers[0].number;

        div.appendChild(h3);
        div.appendChild(p);
        div.appendChild(p2);
        business.appendChild(div);
     console.log(j)
    }

    for (let j of jsObject["Business Goup D"]){
        const div = document.createElement('div');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const p2 = document.createElement('p');
        

        h3.textContent =j.FirstName + ' ' + j.address.streetAddress ;
        p.textContent = j.lastName + ' ' + j;
        p2.textContent = j.phoneNumbers[0].number;

        div.appendChild(h3);
        div.appendChild(p);
        div.appendChild(p2);
        business.appendChild(div);
     console.log(j)
    }

    for (let j of jsObject["Business Goup E"]){
        const div = document.createElement('div');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const p2 = document.createElement('p');
        

        h3.textContent =j.FirstName + ' ' + j.address.streetAddress ;
        p.textContent = j.lastName + ' ' + j;
        p2.textContent = j.phoneNumbers[0].number;

        div.appendChild(h3);
        div.appendChild(p);
        div.appendChild(p2);
        business.appendChild(div);
     console.log(j)
    }

    for (let j of jsObject["Business Goup F"]){
        const div = document.createElement('div');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const p2 = document.createElement('p');
        

        h3.textContent =j.FirstName + ' ' + j.address.streetAddress ;
        p.textContent = j.lastName + ' ' + j;
        p2.textContent = j.phoneNumbers[0].number;

        div.appendChild(h3);
        div.appendChild(p);
        div.appendChild(p2);
        business.appendChild(div);
     console.log(j)
    }

    for (let j of jsObject["Business Goup G"]){
        const div = document.createElement('div');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const p2 = document.createElement('p');
        

        h3.textContent =j.FirstName + ' ' + j.address.streetAddress ;
        p.textContent = j.lastName + ' ' + j;
        p2.textContent = j.phoneNumbers[0].number;

        div.appendChild(h3);
        div.appendChild(p);
        div.appendChild(p2);
        business.appendChild(div);
     console.log(j)


    }
} 
);