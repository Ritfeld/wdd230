fetch("./business.json")
    .then((response) => {
        return response.json();
    })
    .then((jsObject) => {
        console.log(jsObject);
        let parent = document.querySelector("div.parent");
        for (let i of Object.keys(jsObject)) {
            let business = document.createElement('div')
            let BName = document.createElement('h2');
            BName.textContent = i ;
            business.appendChild(BName)
            business.classList.add('business');
      console.log(i);

            for (let j of jsObject[i]) {
                let div = document.createElement('div')
                let Name = document.createElement('h2');
                let Address = document.createElement('h2');
                let Phone = document.createElement('h2');
                console.log(Name)

                Name.classList.add("emp-name");
                Address.classList.add('addr');
                Phone.classList.add('phone');
                div.classList.add('employee');
                




                Name.textContent = "Name" + j.FirstName + " " + j.lastName;
                Address.textContent = "Address" + j.address.streetAdrees + " " + j.address.city + " " + j.address.postalCode + " " + j.address.state;;
                for (let p = 0; p < j.phoneNumbers.length; p++) {
                    Phone.innerHTML += `Type: ${j.phoneNumbers[p].type} Number: ${j.phoneNumbers[p].number}<br>`;
                }


                div.appendChild(Name);
                div.appendChild(Address);
                div.appendChild(Phone);

                //address



                business.appendChild(div);
            }
            parent.appendChild(business);
        }
    }
    );
