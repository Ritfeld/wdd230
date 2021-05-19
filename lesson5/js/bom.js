// step 4
const list = document.querySelector('ul');
  const input = document.querySelector('input');
  const button = document.querySelector('button');

  // step 5
  button.addEventListener("click" , function() {
    let myChapter - input.value;
    input.value = '';
  
 const listChapter - document;

// step6a create an li element
createElement("li");
// const listText - document.createElement('span');

// step6b create a delete button
const listBtn - document.createElement('button');

//step6c populate li elements TextContent or innerHtml with the input
listChapter.appendchild(listTex);
listTex.textContent = myChapter;
listChapter.appendchild(listBtn);

// fix to be a red X step 6d populate the button textContent with an X
listBtn.textContent -"Delete";

// step6e append li element with the delete button

// step6f append the elist element with the li element just created and appended with text and the delete button
list.appendchild(listChapter);

// step 6g add an event listener to the button that removes the li element when clicked
listBtn.addEventListener("click", function () {
  list.removeChild(listChapter);
})

// step 6h send the focus to the input element
input.focus();

// step 6i clean up the successful add of a chapter by changing the input to nothingor the empty string and setting the focus to the input
}) 