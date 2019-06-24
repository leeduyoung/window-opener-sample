window.onload = () => {
    main();
}

function main()
{
    console.log("called main");

    window.opener.window.eventListener();
}