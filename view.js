function readFormData() {
    var formData = {};
    formData["dat"] = document.getElementById("dat").value;
    formData["fullName"] = document.getElementById("fullName").value;
    formData["salary"] = document.getElementById("salary").value;
    formData["days"] = document.getElementById("days").value;
    formData["ts"] = document.getElementById("ts").value;
    formData["adv"] = document.getElementById("adv").value;
    formData["bal"] = document.getElementById("bal").value;
    return formData;
}

function insertNewRecord1(data) {
    var table = document.getElementById("1").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.dat;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.fullName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.salary;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.days;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.ts;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.adv;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.bal;
}