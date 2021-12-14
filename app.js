const billAmt=document.querySelector("#billamount");
const cashAmt=document.querySelector(".cashamount");
const chkbtn=document.querySelector(".check-button");
var errormsg=document.querySelector("#errorm");
// var returnAmt;
chkbtn.addEventListener("click",function validateReturn() {
    errormsg.style.display ="none";
    if(billAmt.value > 0)
    {
       
        if(cashAmt.value < billAmt.value)
        {
            showmsg("do u want to wash the plates");
        }


    }//if
    else
    {

        showmsg("BillAmt shld be greater than 0");

    }//else
    
    // returnAmt=cashAmt-billAmt;
});

function showmsg(msg)
{
    errormsg.style.display ="block";
    errormsg.innerText=msg;
}