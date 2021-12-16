const billAmt=document.querySelector("#billamount");
const cashAmt=document.querySelector(".cashamount");
const chkbtn=document.querySelector(".check-button");
var errormsg=document.querySelector("#errorm");

var noteCount=document.querySelectorALL(".note-count");

var availableNotes=[2000,500,100,20,10,5,1];
// var returnAmt;
chkbtn.addEventListener("click",function validateReturn() {
    errormsg.style.display ="none";
    if(billAmt.value > 0){
        if(cashAmt.value > billAmt.value){
            const returnAmt=cashAmt.value-billAmt.value;
            calculateNotes(returnAmt);
        } else{
            showmsg("do u want to wash the plates");
        }

    } else{
        showmsg("BillAmt shld be greater than 0");
    }//else
});

function calculateNotes(returnAmt){
    console.log("data came here");
for(let i = 0; i < availableNotes.length; i++){
const note= Math.trunc(
    returnAmt/availableNotes[i]
    );
returnAmt=returnAmt%availableNotes[i];
noteCount[i].innerText=12;

}
}



function showmsg(msg)
{
    errormsg.style.display ="block";
    errormsg.innerText=msg;
}
