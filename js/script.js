/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing



const itemsPerPage = 10;
const list = document.getElementsByClassName('student-item cf');



// create showPage() functions and pass in the list and page variables.
// Function and its variables created as per the Instructions Page

const showPage = (list, page) => {

   const startIndex = (page * itemsPerPage) - itemsPerPage;
   const endIndex = (page * itemsPerPage) - 1;

   for ( let i = 0; i < list.length; i += 1){

      if(i >= startIndex && i <= endIndex){
         list[i].style.display = 'block';
         } 
      else {
         list[i].style.display = 'none';
         }
   }

}

//Pagination function. This will create the pagination div, its ul, and the li
//children of the ul, as well as create clickable links to sort the pages

function appendPageLinks (list) {

// page variable creates the parameter for the page #'s that should display
// at the bottom. Round up the result of the list's length divided by desired
// items displayed per page

   let page = list.length / itemsPerPage;

//create pagination div and assign class name
   const paginationDiv = document.createElement('div');
   paginationDiv.className = 'pagination';

//append pagination div to the bottom of the page by selecting page div and 
//appending it to the end
   const pageDiv = document.querySelector('.page')
   pageDiv.appendChild(paginationDiv);

   const paginationUL = document.createElement('ul');
   paginationDiv.appendChild(paginationUL);


   
//for loop to create li elements to hold anchor tags and links
   for (let i = 0; i < page; i += 1){

      let paginationLI = document.createElement('li');
      let paginationA = document.createElement('a');
      paginationA.href = '#';
      
//apply active class name to the first 
            if(i === 0){
               paginationA.className = 'active';
               showPage(list, [i + 1]);
            }

//append the anchor tag to the li element then append li to ul      
      paginationLI.appendChild(paginationA);
      paginationUL.appendChild(paginationLI);
      
//set the page # of the link
      paginationA.textContent = [i + 1];
      

//add the click feature that calls showPage() to display only
//corresponding students to that particular page # using the 
//list and index variables

      paginationA.addEventListener('click', (event) => {
         
         for ( let index = 0; index < page; index += 1){
            let removeClassA = document.querySelectorAll('a');   
            removeClassA[index].classList.remove('active');
            }

         showPage(list, [i + 1]);
         event.target.className = 'active';

      });

   }

}

// call appendPageLink() using the list variable 

appendPageLinks(list);
