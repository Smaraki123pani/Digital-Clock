function updateClock()
{
    var now = new Date();
    var hour = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();
    var pe = "AM";

    if(hour == 0)
    {
        hour = hour - 12;
        }

     if(hour > 12)
     {
        hour = hour - 12;
        pe = "PM";
     }   

     Number.prototype.pad = function(digits){
        for(var n=this.toString(); n.length<digits; n = 0 + n);
        return n;
     }

    var ids = ["hour","minutes","seconds","period"];
    var values = [hour.pad(2),min.pad(2),sec.pad(2),pe];

    for(var i=0;i<ids.length;i++)
    document.getElementById(ids[i]).firstChild.nodeValue = values[i];

}

function initClock()
{
    updateClock();
    window.setInterval("updateClock()", 1);
}