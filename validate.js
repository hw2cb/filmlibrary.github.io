function checkedValidationRate()
{
    if(!document.getElementById("rate").value.match(/^\d+$/))
    {
        document.getElementById("validate-rate").style.display = "block";
        return false;
    }
    else
    {
        document.getElementById("validate-rate").style.display = "none";
        return true;
    }
}
function checkedValidationMoney()
{
    if(!document.getElementById("money").value.match(/^\d+$/))
    {
        document.getElementById("validate-money").style.display = "block";
        return false;
    }
    else
    {
        document.getElementById("validate-money").style.display = "none";
        return true;
    }
}
function checkedValidationLength()
{
    if(!document.getElementById("length").value.match(/^\d+$/))
    {
        document.getElementById("validate-length").style.display = "block";
        return false;
    }
    else
    {
        document.getElementById("validate-length").style.display = "none";
        return true;
    }
}
function checkedValidationBudget()
{
    if(!document.getElementById("budget").value.match(/^\d+$/))
    {
        document.getElementById("validate-budget").style.display = "block";
        return false;
    }
    else
    {
        document.getElementById("validate-budget").style.display = "none";
        return true;
    }
}
function checkedValidationEmpty()
{
    let arrayForm = document.getElementsByClassName("form");
    console.log(arrayForm);
    let fl = false;
    for(let m=0; m<arrayForm.length; m++)
    {
        if(arrayForm[m].value.length == 0)
        {
            fl = true;
        }
    }
    if(fl)
    {
        document.getElementById("empty-valid").style.display = "block";
        return false;
    }
    else
    {
        document.getElementById("empty-valid").style.display = "none";
        return true;
    }
}