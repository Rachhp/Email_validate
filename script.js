function validEmail(inputText)
{
    var mailFormat= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;//a format to check using

    if(inputText.value.match(mailFormat))
    {
        alert("you have enterred valid input");
        document.form1.text1.focus();
        return true;
    }
    else
    {
        alert("you have entered invalid input");
        document.form1.text1.focus();
        return false;
    }

}