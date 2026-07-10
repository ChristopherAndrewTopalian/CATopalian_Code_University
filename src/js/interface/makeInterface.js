// makeInterface.js

function makeInterface(whichArray, whichEntry)
{
    let theTitle = ce('a');
    theTitle.id = 'theTitle';
    theTitle.href = 'https://github.com/ChristopherAndrewTopalian/CATopalian_Code_University';
    theTitle.target = '_blank';
    theTitle.textContent = 'CATopalian Code University';
    theTitle.style.fontSize = '15px';
    theTitle.style.fontWeight = 'bold';
    theTitle.style.lineHeight = 15 + 'px';
    theTitle.style.fontFamily = 'Arial';
    theTitle.style.textDecoration = 'none';
    theTitle.className = 'center';
    ba(theTitle);

    let mainDiv = ce('div');
    mainDiv.id = 'mainDiv';
    mainDiv.style.display = 'flex';
    mainDiv.style.flexDirection = 'row';
    ba(mainDiv);

    //-//

    let buttonContainer = ce('div');
    buttonContainer.style.display = 'flex';
    buttonContainer.style.flexDirection = 'column';
    buttonContainer.style.zIndex = 2;
    buttonContainer.style.width = '120px';
    buttonContainer.style.height = '320px';
    buttonContainer.style.overflow = 'scroll';
    buttonContainer.style.whiteSpace = 'nowrap';
    buttonContainer.style.gap = '1px';
    buttonContainer.style.fontSize = '15px';
    buttonContainer.style.resize = 'both';
    mainDiv.append(buttonContainer);

    //-//

    let theFrame = ce("iframe");
    theFrame.src = whichArray[whichEntry].urlOffline;
    theFrame.id = "thePdfId";
    theFrame.style.width = '620px';
    theFrame.style.height = '315px';
    theFrame.style.overflowX = 'scroll';
    mainDiv.append(theFrame);

    //-//

    let collapseExpandContainer = ce('div');
    collapseExpandContainer.style.display = 'flex';
    collapseExpandContainer.style.flexDirection = 'row';
    buttonContainer.append(collapseExpandContainer);

    //-//

    let collapseAllDetailsBtn = ce('button');
    collapseAllDetailsBtn.textContent = '_';
    collapseAllDetailsBtn.onmouseover = function()
    {
        hoverSound();
    };
    collapseAllDetailsBtn.onclick = function()
    {
        clickSound();
        collapseAllDetails();
    };
    collapseExpandContainer.append(collapseAllDetailsBtn);

    //-//

    let exapandAllDetailsBtn = ce('button');
    exapandAllDetailsBtn.textContent = 'O';
    exapandAllDetailsBtn.onmouseover = function()
    {
        hoverSound();
    };
    exapandAllDetailsBtn.onclick = function()
    {
        clickSound();
        expandAllDetails();
    };
    collapseExpandContainer.append(exapandAllDetailsBtn);

    //----//

    let beginnerDetails = ce('details');
    beginnerDetails.onmouseover = function()
    {
        //hoverSound();
    };
    beginnerDetails.onclick = function()
    {
        //clickSound();
    };
    buttonContainer.append(beginnerDetails);

    //-//

    let beginnerSummary = ce('summary');
    beginnerSummary.textContent = 'Beginner';
    beginnerDetails.append(beginnerSummary);

    for (let x = 0; x < whichArray.length; x++)
    {

        let theButton = ce("button");
        theButton.textContent = whichArray[x].name;
        theButton.oncontextmenu = function()
        {
            window.open(whichArray[x].urlOffline);
        };
        theButton.onmouseover = function()
        {
            hoverSound();
        };
        theButton.onclick = function()
        {
            clickSound();
            theFrame.src = whichArray[x].urlOffline;
        };
        beginnerDetails.append(theButton);
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

