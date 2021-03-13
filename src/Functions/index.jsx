export const CopyToClipboard = (str) => {
    //techoverflow.net/2018/03/30/copying-strings-to-the-clipboard-using-pure-javascript/
    // Create new element
    var el = document.createElement("textarea");
    // Set value (string to be copied)
    el.value = str;
    // Set non-editable to avoid focus and move outside of view
    el.setAttribute("readonly", "");
    el.style = { position: "absolute", left: "-9999px" };
    document.body.appendChild(el);
    // Select text inside element
    el.select();
    // Copy text to clipboard
    document.execCommand("copy");
    // Remove temporary element
    document.body.removeChild(el);
}

export const DeleteScheme = ({ setSchemes, schemes, index, uid }) => {

}

export const SaveScheme = () => {

}