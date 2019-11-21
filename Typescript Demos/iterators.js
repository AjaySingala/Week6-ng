var listItems = [4, 8, 10, 6, 1];
for (var i in listItems) {
    console.log(listItems[i]);
}
var Status;
(function (Status) {
    Status[Status["Created"] = 0] = "Created";
    Status[Status["InProgress"] = 1] = "InProgress";
    Status[Status["Approved"] = 2] = "Approved";
    Status[Status["Rejected"] = 3] = "Rejected";
})(Status || (Status = {}));
;
var approval = Status.Created;
console.log('Printing approval status...');
console.log(approval);
console.log(Status.Created);
console.log(Status[Status.Created]);
console.log(Status[4]);
console.log(Status[3]);
