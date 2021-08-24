function addLink() {
    //Get the selected text and append the extra info
    var selection = window.getSelection(),
        pagelink = '<br /><br />Read more at: ' + document.location.href + "<br /><br />Socials:<br />Instagram: https://instagram.com/red78massive1573/<br />Scratch: https://scratch.mit.edu/users/rich_gamer/<br />YouTube: https://youtube.com/channel/UCCAIwAMI4ws5sNoKuSG0D1Q<br />GitHub: https://github.com/red78massive1573<br />Krunker: https://krunker.io/social.html?p=profile&q=rich_gamer<br />Discord: rich_gamer2#0571<br />Don't you delete this!",
        copytext = selection + pagelink,
        newdiv = document.createElement('div');

    //hide the newly created container
    newdiv.style.position = 'absolute';
    newdiv.style.left = '-99999px';

    //insert the container, fill it with the extended text, and define the new selection
    document.body.appendChild(newdiv);
    newdiv.innerHTML = copytext;
    selection.selectAllChildren(newdiv);

    window.setTimeout(function () {
        document.body.removeChild(newdiv);
    }, 100);
}

document.addEventListener('copy', addLink);
