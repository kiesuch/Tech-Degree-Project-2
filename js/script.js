/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


// The Global Variables are declared for use in the script's functions.
// The total number of list items are found and stored.
// The maximum items to be shown on the page is set at 10 in the code.

const listItems = document.querySelectorAll('li');
const itemsPerPage = 10;


// This function will only show the first set of students based on the itemsPerPage variable.
 
function showPage(list, pageNum){
	
	// The start and end indexes are determined based of the total number of list items and the maximum items that will be displayed.
	
	const startIndex = (pageNum * itemsPerPage) - itemsPerPage;
	const endIndex = pageNum * itemsPerPage;

	// The for loop will select a set of students from the full set that was passed to the function while hiding the rest
	
	for(let i = 0; i < list.length; i++){
		if(i >= startIndex && i < endIndex){
			list[i].style.display = 'block';
		} else {
			list[i].style.display = 'none';
		}
	}
}


// This function will create list elements and append them to the a pagination div.
// The list elements will change the students displayed depending on which list element is clicked on.

function appendPageLink(list){
	
	// A Variable is created to select the main div
	// The maximum list elemets to be created is determined by the length of the total number of list items divided by the number of items displayed per page.
	// A new pagination div and unordred list elements are created and then appended to the main div.
	
	const studentList = document.querySelector('div.page');
	const maxPages = Math.ceil(list.length / itemsPerPage);
	const pagiDiv = document.createElement('div');
	const pagiUl = document.createElement('ul');
	pagiUl.className = 'pagination';
	studentList.append(pagiDiv);
	pagiDiv.append(pagiUl);
	
	// This for loops creates the list elements as well as links elements.
	// The list elements are appended to the unordered list in the div.
	// The link elements are appended to the list elements.
	
	for(let i = 1; i<= maxPages; i++){
		const pagiLi = document.createElement('li');
		const pagiA = document.createElement('a');
		pagiUl.append(pagiLi);
		pagiLi.append(pagiA);
		pagiA.textContent = (i);
		pagiA.href = ('#');
		
	// The if statement sets the first list element to be active.
	
		if (i == 1) {
			pagiA.className = 'active';
		}		
	}
	
	// Event Listener for the list items to change the list of students displayed based off the text content of the li selected.
	// A for loop is used to set the class name of all list element links to 'none' before setting the current link to 'active'
	
	pagiUl.addEventListener('click',(event) => {
		let links = document.querySelectorAll('a');
			if (event.target.tagName === 'A') {
			  for (let i = 0; i < links.length; i++) {
				let liLinks = links[i];
				liLinks.className = 'none';
			  }
			  event.target.className = 'active';
			  showPage(list, event.target.textContent);
			}
	})
}

// The functions are called upon loading the page.

showPage(listItems, 1);
appendPageLink(listItems);