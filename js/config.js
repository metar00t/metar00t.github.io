// changes the class from the corresponding label
function changeDropdownIcon_Language()
{
    var element = document.querySelector("#icon_languages")

    if(element.classList == "icon_before")
    {
        element.classList.replace("icon_before","icon_after")
    }
    else if(element.classList == "icon_after")
    {
        element.classList.replace("icon_after","icon_before")
    }
}

function changeDropdownIcon_Tools()
{
    var element = document.querySelector("#icon_tools")

    if(element.classList == "icon_before")
    {
        element.classList.replace("icon_before","icon_after")
    }
    else if(element.classList == "icon_after")
    {
        element.classList.replace("icon_after","icon_before")
    }
}

function changeDropdownIcon_Dlc()
{
    var element = document.querySelector("#icon_dlc")

    if(element.classList == "icon_before")
    {
        element.classList.replace("icon_before","icon_after")
    }
    else if(element.classList == "icon_after")
    {
        element.classList.replace("icon_after","icon_before")
    }
}

