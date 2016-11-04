function myName() //XXX
{
    return "Deep";
}

//Get the calendar graph element
var commitsGraph = document.getElementsByClassName("js-calendar-graph-svg");

/*
var commitsPerMonth = {};
commitsPerMonth["2015-11"] = [];
commitsPerMonth["2015-11"].push(2);
commitsPerMonth["2015-11"].push(3);
commitsPerMonth["2015-12"] = [];
commitsPerMonth["2015-12"].push(21);
commitsPerMonth["2015-12"].push(32);
commitsPerMonth["2015-12"].push(2);
commitsPerMonth["2015-12"].push(3);
commitsPerMonth["2016-01"] = [];
commitsPerMonth["2016-01"].push(3);
console.log("commitsPerMonth: " + commitsPerMonth);

for(var key in commitsPerMonth) {
    //dictionary[key] -> 'value'
    console.log("key: " + key + " and value: " + commitsPerMonth[key]);
    var sum = commitsPerMonth[key].reduce(function(pv, cv) { return pv + cv; }, 0);
    console.log("sum: " + sum);

}
*/
var commitsPerMonth = {};
var reExParent = /data-count=".+" data-date=".+"/g;
var matchParent;
//var a = 30;
do {
    matchParent = reExParent.exec(commitsGraph[0].innerHTML);
    if(matchParent) {
        //var reExChild1 = /(\d{4}\-\d{2}\-\d{2})|(\d+)/g; /* NOTE: May use in future */
        var splittedCountAndDate= matchParent[0].split(" ");
        var reExCommitCountChild = /(\d+)/g;
        var reExDateChild = /(\d{4}\-\d{2})/g;
        commitCountChild = reExCommitCountChild.exec(splittedCountAndDate[0]);
        dateChild = reExDateChild.exec(splittedCountAndDate[1]);

        if(!(dateChild[0] in commitsPerMonth)) {
            commitsPerMonth[dateChild[0]] = [];
        }
        commitsPerMonth[dateChild[0]].push(Number(commitCountChild[0]));
    }
} while (matchParent);
//} while (a > 0);

var summutionOfCommitForEachMonth = [];
for(var key in commitsPerMonth) {
    //console.log("key: " + key + " and value: " + commitsPerMonth[key]);
    var sum = commitsPerMonth[key].reduce(function(pv, cv) { return pv + cv; }, 0);
    summutionOfCommitForEachMonth.push(sum);
    console.log("key: " + key + " || sum: " + sum);
}


commitsGraph[0].innerHTML = commitsGraph[0].innerHTML
    .concat(
        `
        <g transform="translate(16, 20)" class="my-commits">
            <text x="13"  y="-2" class="month">`+summutionOfCommitForEachMonth[0]+`</text>
            <text x="73"  y="-2" class="month">`+summutionOfCommitForEachMonth[1]+`</text>
            <text x="121" y="-2" class="month">`+summutionOfCommitForEachMonth[2]+`</text>
            <text x="181" y="-2" class="month">`+summutionOfCommitForEachMonth[3]+`</text>
            <text x="229" y="-2" class="month">`+summutionOfCommitForEachMonth[4]+`</text>
            <text x="277" y="-2" class="month">`+summutionOfCommitForEachMonth[5]+`</text>
            <text x="325" y="-2" class="month">`+summutionOfCommitForEachMonth[6]+`</text>
            <text x="385" y="-2" class="month">`+summutionOfCommitForEachMonth[7]+`</text>
            <text x="433" y="-2" class="month">`+summutionOfCommitForEachMonth[8]+`</text>
            <text x="493" y="-2" class="month">`+summutionOfCommitForEachMonth[9]+`</text>
            <text x="541" y="-2" class="month">`+summutionOfCommitForEachMonth[10]+`</text>
            <text x="589" y="-2" class="month">`+summutionOfCommitForEachMonth[11]+`</text>
        </g>
        `
    );

//console.log("commitsGraph[0].innerHTML" + commitsGraph[0].innerHTML); //XXX
