var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
           insertNewRecord(formData);
        else
           updateRecord(formData);
        resetForm();   
    }
}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").Value;
    formData["email"] = document.getElementById("email").Value;
    formData["salary"] = document.getElementById("salary").Value;
    formData["city"] = document.getElementById("city").Value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.email;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.salary;
    cell4 = newRow.insertCell(3);
    cell14.innerHTML = data.city;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = '<a onClick="onEdit(this)">Edit</a><a onclick ="onDelete(this)">Delete</a>';
}

function resetForm() {
    document.getElementById("fullname").Value = "";
    document.getElementById("email").Value = "";
    document.getElementById("salary").Value = "";
    document.getElementById("city").Value = "";
    selectedRow = null;
    
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").Value = selectedRow.cells[0].innerHTML;
    document.getElementById("email").Value = selectedRow.cells[1].innerHTML;
    document.getElementById("salary").Value = selectedRow.cells[2].innerHTML;
    document.getElementById("city").Value = selectedRow.cells[3].innerHTML;

}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.email;
    selectedRow.cells[2].innerHTML = formData.salary;
    selectedRow.cells[3].innerHTML = formData.city;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("fullName").Value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if(!document.getElementById("fullNameValidationError").classList.contains("hide"))
           document.getElementById("fullNameValidationError").classList.add("hide");

    }
    return isValid;
}