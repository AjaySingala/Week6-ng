var listItems = [4,8,10,6,1];
for(var i in listItems) {
    console.log(listItems[i]);
}

enum Status {
    Created = 0,
    InProgress = 1,
    Approved = 2,
    Rejected = 3
};

var approval = Status.Created;
console.log('Printing approval status...');
console.log(approval);
console.log(Status.Created);
console.log(Status[Status.Created]);
console.log(Status[4]);
console.log(Status[3]);

