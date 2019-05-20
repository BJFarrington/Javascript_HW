// from data.js
var tableData = data;

// YOUR CODE HERE!
additional_data = {
  datetime: "1/28/1996",
  city: "dallas",
  state: "tx",
  country: "us",
  shape: "star",
  durationMinutes: "5 mins.",
  comments: "Cowboys win a superbowl, that's alien!."
  };

  
tableData.push(additional_data);

console.log(tableData)

function printTable(my_table){

  var tbody = d3.select("#Alien_row").text("");

    my_table.forEach((a_data) => {
      var row = tbody.append("tr");
      Object.entries(a_data).forEach(([_, value]) => {
        var cell = row.append("td").text(value);
    });
  });
}

printTable(tableData);


var fil_btn = d3.select ("#filter-btn");

fil_btn.on("click", function (){

  d3.event.preventDefault();

  var fil_arr = tableData.filter(user_date); 

 printTable(fil_arr)

});

function user_date (row) {
  return  row.datetime === document.getElementById("datetime").value;
};