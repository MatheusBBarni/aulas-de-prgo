    var campos = [
        document.querySelector("#nome"),
        document.querySelector("#idade"),
        document.querySelector("#altura"),
        document.querySelector("#peso")
    ]

    var tbody = document.querySelector('table tbody')

    document.querySelector(".form").addEventListener('submit', (event) => {
        event.preventDefault();
        var tr = document.createElement('tr');
        campos.forEach((campo) => {
            var td = document.createElement('td')
            td.textContent = campo.value
            tr.appendChild(td)
        })

        tbody.appendChild(tr)

        campos[0].value = ''
        campos[1].value = 0
        campos[2].value = 0
        campos[3].value = 0

    })
