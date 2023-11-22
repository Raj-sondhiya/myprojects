var empList = [];

$("#submit").click(a => {
    let name = $("#name").val();
    let age = $("#age").val();
    let email = $("#email").val();
    let pass = $("#pass").val();
    let mob = $("#mob").val();

    if (name === "" || age === "" || email === "" || pass === "" || mob === "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Fields cannot be empty!",
        });
        return;
    }

    if (age <= 18) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Age must be greater than 18!",
        });
        return;
    }

    if (!/^\d{10}$/.test(mob)) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Mobile number must contain 10 digits!",
        });
        return;
    }

    var emp = { name: name, age: age, email: email, pass: pass, mob: mob };

    if (name !== "" && age !== "" && email !== "" && pass !== "" && mob !== "") {
        if (empList.some((element) => element.email === emp.email)) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: emp.email + " is already added!",
                footer: '<a href="#">Do not add duplicate email</a>'
            });
        } else {
            empList.push(emp);
            Swal.fire({
                title: "Good job",
                text: "Employee details added successfully",
                icon: "success"
            });
            $("#name").val('');
            $("#age").val('');
            $("#email").val('');
            $("#pass").val('');
            $("#mob").val('');
        }
        console.log(empList);
        renderTable();
    } else {
        Swal.fire({
            title: "Cannot be empty",
            text: "Fill the input fields",
            icon: "warning",
        });
        return;
    }
});

$('body').on('click', '.delete', function () {
    Swal.fire({
        title: "Are you sure?",
        text: "Do you want to delete this user?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
            var id = $(this).attr('id');
            empList = empList.filter(a => a.email !== id);
            console.log(empList);
            renderTable();
        }
    });
});

function renderTable() {
    if (empList.length != 0) {
        var table = `<table class="table table-secondary table-hover">
        <thead>
          <tr>
            <th scope="col">NAME</th>
            <th scope="col">AGE</th>
            <th scope="col">EMAIL</th>
            <th scope="col">PASSWORD</th>
            <th scope="col">PHONE NO.</th>
            <th scope="col">ACTION</th>
          </tr>
        </thead>
        <tbody>`;
        empList.forEach(e => {
            table += `<tr>
          <td>${e.name}</td>
          <td>${e.age}</td>
          <td>${e.email}</td>
          <td>${e.pass}</td>
          <td>${e.mob}</td>
          <td><div class="fa fa-trash delete" id="${e.email}"></div></td>
        </tr>`;
        });

        table += '</tbody></table>';
        $(".empData").html(table);
    } else {
        $(".empData").html("");
    }
}