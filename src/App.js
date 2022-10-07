const textarea = document.querySelector("textarea");
const fileNameInput = document.querySelector(".file-name input");
const selectType = document.querySelector(".select-menu select");
const btnSave = document.querySelector(".btn-save");


selectType.addEventListener("change", () => {
    const optionIndex = selectType.options[selectType.selectedIndex].text; // Get the text of the selected option
    btnSave.textContent = `Convert File ${optionIndex.split(" ")[0]}`; // Change the text inside the button to the selected index text in select
})


btnSave.addEventListener("click", () => {
    const blob = new Blob([textarea.value], { type: selectType.value }); // Create a file with value and data type
    const fileUrl = URL.createObjectURL(blob); // Create a URL to download the file
    const link = document.createElement("a");  // Create a link to download the file
    link.download = fileNameInput.value; // Select the name of the file to download
    link.href = fileUrl; // Select the file address to download
    link.click(); // file download
});