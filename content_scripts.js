function myName()
{
    return "Deep";
}

var commitsGraph = document.getElementsByClassName("js-calendar-graph-svg");
//console.log("commitsGraph[0].innerHTML" + commitsGraph[0].innerHTML);
//var match = /data-date=".+"/g.exec(commitsGraph[0].innerHTML);
//console.log("match: " + match);

var re = /data-count=".+" data-date=".+"/g;
var match;

do {
    match = re.exec(commitsGraph[0].innerHTML);
    if(match) {
        console.log(match[0]);
    }
} while (match);


commitsGraph[0].innerHTML = commitsGraph[0].innerHTML
    .concat(
        `
        <g transform="translate(16, 20)" class="my-commits">
            <text x="13" y="-2" class="month">`+myName()+`</text>
            <text x="73" y="-2" class="month">Dec</text>
            <text x="121" y="-2" class="month">Jan</text>
            <text x="181" y="-2" class="month">Feb</text>
            <text x="229" y="-2" class="month">Mar</text>
            <text x="277" y="-2" class="month">Apr</text>
            <text x="325" y="-2" class="month">May</text>
            <text x="385" y="-2" class="month">Jun</text>
            <text x="433" y="-2" class="month">Jul</text>
            <text x="493" y="-2" class="month">Aug</text>
            <text x="541" y="-2" class="month">Sep</text>
            <text x="589" y="-2" class="month">Oct</text>
        </g>
        `
    );

//console.log("commitsGraph[0].innerHTML" + commitsGraph[0].innerHTML); //XXX
