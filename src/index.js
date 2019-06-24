window.onload = () => {
    setEventHandler();
    main();    
}

function setEventHandler()
{
    // 윈도우 B 열기 버튼
    document.getElementById("window-open-button").onclick = () => 
    {
        window.open("window-b.html", "_blank", 'width=425, height=550, resizable=0, scrollbars=no, status=0, titlebar=0, toolbar=0, left=435, top=250');
    }
}

function main()
{
    console.log("called main");
}

function eventListener()
{
    alert('called event listener');
}