document.getElementById("ajax").addEventListener("click", function() {
    const xhr = new XMLHttpRequest();

    xhr.onload = function() {
        let innerList = document.getElementById("employees");

        if (this.status === 200) {
            const employees = JSON.parse(this.responseText);
            let output = ''; // output değişkenini burada tanımlayın

            employees.forEach(employee => {
                output += `
                <tr>
                    <td>${employee.name}</td>
                    <td>${employee.departmant}</td>
                    <td>${employee.salary}</td>
                </tr>
                `;
            });

            innerList.innerHTML = output; // innerHTML'i güncelleyin
        }
    };

    xhr.open("GET", "work.json", true);
    xhr.send();
});
