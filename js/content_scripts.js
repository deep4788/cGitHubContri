//Months mapping from numerical value to text value
var monthsMapping = {
    "01": "Jan",
    "02": "Feb",
    "03": "Mar",
    "04": "Apr",
    "05": "May",
    "06": "Jun",
    "07": "Jul",
    "08": "Aug",
    "09": "Sep",
    "10": "Oct",
    "11": "Nov",
    "12": "Dec"
};

//Get the calendar graph element
var commitsGraph = document.getElementsByClassName("js-calendar-graph-svg");

//Extract the commits per month from the graph
var commitsPerMonth = {};
var reExParent = /data-count=".+" data-date=".+"/g;
var matchParent;
var monthNumber = [];
do {
    matchParent = reExParent.exec(commitsGraph[0].innerHTML);
    if(matchParent) {
        //var reExChild = /(\d{4}\-\d{2}\-\d{2})|(\d+)/g; /* NOTE: May use in future */
        var splittedCountAndDate = matchParent[0].split(" ");
        var reExCommitCountChild = /(\d+)/g;
        var reExDateChild = /(\d{4}\-\d{2})/g;
        commitCountChild = reExCommitCountChild.exec(splittedCountAndDate[0]);
        dateChild = reExDateChild.exec(splittedCountAndDate[1]);

        if(!(dateChild[0] in commitsPerMonth)) {
            commitsPerMonth[dateChild[0]] = [];
            monthNumber.push(monthsMapping[dateChild[0].substr(dateChild[0].length - 2)]);
        }
        commitsPerMonth[dateChild[0]].push(Number(commitCountChild[0]));
    }
} while(matchParent);

//Add all the commits for each month
var summutionOfCommitForEachMonth = [];
for(var key in commitsPerMonth) {
    var sum = commitsPerMonth[key].reduce(function(a, b) { return a + b; }, 0);
    summutionOfCommitForEachMonth.push(sum);
}

//Remove the original months
var monthsText = document.getElementsByClassName('month');
for(var i = 0; i != monthsText.length; ++i) {
    monthsText[i].style.display = "none";
}

//Inject the number of commits and the corresponding month to the calendar graph
commitsGraph[0].innerHTML = commitsGraph[0].innerHTML
    .concat(
    `
        <g transform="translate(16, 20)">
            <text x="13"  y="-12" class="my-commits">`+summutionOfCommitForEachMonth[0]+`</text>
            <text x="73"  y="-12" class="my-commits">`+summutionOfCommitForEachMonth[1]+`</text>
            <text x="121" y="-12" class="my-commits">`+summutionOfCommitForEachMonth[2]+`</text>
            <text x="181" y="-12" class="my-commits">`+summutionOfCommitForEachMonth[3]+`</text>
            <text x="229" y="-12" class="my-commits">`+summutionOfCommitForEachMonth[4]+`</text>
            <text x="277" y="-12" class="my-commits">`+summutionOfCommitForEachMonth[5]+`</text>
            <text x="325" y="-12" class="my-commits">`+summutionOfCommitForEachMonth[6]+`</text>
            <text x="385" y="-12" class="my-commits">`+summutionOfCommitForEachMonth[7]+`</text>
            <text x="433" y="-12" class="my-commits">`+summutionOfCommitForEachMonth[8]+`</text>
            <text x="493" y="-12" class="my-commits">`+summutionOfCommitForEachMonth[9]+`</text>
            <text x="541" y="-12" class="my-commits">`+summutionOfCommitForEachMonth[10]+`</text>
            <text x="589" y="-12" class="my-commits">`+summutionOfCommitForEachMonth[11]+`</text>
            <text x="13"  y="-3" class="my-commits">`+monthNumber[0]+`</text>
            <text x="73"  y="-3" class="my-commits">`+monthNumber[1]+`</text>
            <text x="121" y="-3" class="my-commits">`+monthNumber[2]+`</text>
            <text x="181" y="-3" class="my-commits">`+monthNumber[3]+`</text>
            <text x="229" y="-3" class="my-commits">`+monthNumber[4]+`</text>
            <text x="277" y="-3" class="my-commits">`+monthNumber[5]+`</text>
            <text x="325" y="-3" class="my-commits">`+monthNumber[6]+`</text>
            <text x="385" y="-3" class="my-commits">`+monthNumber[7]+`</text>
            <text x="433" y="-3" class="my-commits">`+monthNumber[8]+`</text>
            <text x="493" y="-3" class="my-commits">`+monthNumber[9]+`</text>
            <text x="541" y="-3" class="my-commits">`+monthNumber[10]+`</text>
            <text x="589" y="-3" class="my-commits">`+monthNumber[11]+`</text>
        </g>
    `
    );
