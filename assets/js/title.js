var text = ["$", " $", "r $", "er $", "der $", "ader $", "oader $", "loader $", " loader $","t loader $","et loader $","fet loader $", "fet loade $", "fet load $", "fet loa $", "fet lo $", "fet l $", "fet $", "fe $", "f $"];
var counter = 0
var inst = setInterval(change, 300);

function change() {
    document.title = text[counter];
    counter++;
    if (counter >= text.length) {
        counter = 0;
    }
}