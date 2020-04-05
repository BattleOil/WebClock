function $(id){
    return document.getElementById(id);
}
function format_fixer(val,fixer){
    var fixed=val.toString();
    if(fixed.length<fixer){
        fixed="0"+fixed;
    }
    return fixed;
}
function Clock_1(){
    var systemtime=new Date();
    var tiemzonefix=systemtime.getTimezoneOffset();
    var uhh=systemtime.getUTCHours();
    var umm=systemtime.getUTCMinutes();
    var uss=systemtime.getUTCSeconds();
    var ums=systemtime.getUTCMilliseconds();
    
    hh=uhh+8;//timezonefixto UTC+8
    //fix_format
    hh=format_fixer(hh,2);
    mm=format_fixer(umm,2);
    ss=format_fixer(uss,2);
    ms=format_fixer(ums,3);
    //draw
    $("hh").innerHTML = hh;
    $("mm").innerHTML = mm;
    $("ss").innerHTML = ss;
    $("nm").innerHTML = ms;  
}
function Clock_UTC(){
    var systemtime=new Date();
    var tiemzonefix=systemtime.getTimezoneOffset();
    var uhh=systemtime.getUTCHours();
    var umm=systemtime.getUTCMinutes();
    var uss=systemtime.getUTCSeconds();
    var ums=systemtime.getUTCMilliseconds();

    hh=format_fixer(uhh,2);
    mm=format_fixer(umm,2);
    ss=format_fixer(uss,2);
    ms=format_fixer(ums,3);
    //draw
    $("uh").innerHTML = hh;
    $("um").innerHTML = mm;
    $("us").innerHTML = ss;
    $("ums").innerHTML = ms;  
}
setInterval( function clock(){
    Clock_1();
    Clock_UTC();
},10);