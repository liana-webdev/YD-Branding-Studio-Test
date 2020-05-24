let leaveEnq = document.querySelector('.button1');
let enq = document.querySelector('.enq');
let enq1 = document.querySelector('.enq1');
let enq2 = document.querySelector('.enq2');
let enqFields = document.querySelector('.enq-fields');
let close = document.querySelector('.close-btn');

console.log(leaveEnq);
console.log(enq);
console.log(enq1);
console.log(enq2);

leaveEnq.onclick = function () {
  enq1.classList.toggle('enq-1');
  enq2.classList.toggle('enq-2');
  enqFields.classList.toggle('enq-fields-show');
};

close.onclick = function () {
  enq1.classList.toggle('enq-1');
  enq2.classList.toggle('enq-2');
  enqFields.classList.toggle('enq-fields-show');
};

