This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### VidMob Default View

Window prompting user to enter work email.  There are four conditions in this view:
-If the work email's domain is recognized, a modal pops up to inform user to check for an invite.  
-If the work email's domain is not recognized, the page is automatically redirected to a new company sign-up page.
-If the work email's exists, a tooltip appears with a message for user to either login or reset the password.
-If the user enters a personal email, a modal shows to continue create a new team or go back to find the team.  


### VidMob Existing Company Sign-Up View

When the user clicks to close the modal, the page redirects to sign-up view with a form for the user to enter first name, last name, display name (which is optional), and password.  

### VidMob New Company Sign-Up View

User is prompted to enter first name, last name, display name (optional), password, and associated company.  If the user enters an existing company a tooltip pops up to promt the user to click on the find their team link.  

Upon clicking on the sign-up button, the page redirects to company sign-up mode view.  The user has the options to click on the first radio to enter email from associated domains or to choose by invite only.  

When the user enters a domain, the domain name is listed in the input field with a cross check button for user to remove the domain if needed.  On key press down, the cursor reappears for user to enter domain names.  On clicking inside the input field, user can add more domains.  

### Frameworks and Libraries used
- React
- Redirect from react-router-dom
- Modal popup from reactjs-popup

Tried to use tooltip from reactstrap and react-tooltip but could not get to work (with the condition if/else and setState), ended up creating my own tooltip from CSS.  

No API hookups and data(i.e. existing domains, emails, companies, personal domains) used to run the workflow were coded in the components directly.  

### Screenshots of the Views

![alt text](https://i.imgur.com/qAgBeMr.png "Default view")
![alt text](https://i.imgur.com/wF3CsZ8.png "Existing company 1st state")
![alt text](https://i.imgur.com/wTO8WT7.png "Existing company 2nd state")
![alt text](https://i.imgur.com/wolhG63.png "New company 1st state")
![alt text](https://i.imgur.com/1YELio5.png "New company 2nd state")
![alt text](https://i.imgur.com/VfC8aQ5.png "New company 3rd state")
![alt text](https://i.imgur.com/aks112q.png "New company 4th state")
![alt text](https://i.imgur.com/O5wlFHa.png "Existing Email Error")
![alt text](https://i.imgur.com/TzvcBjX.png "Existing Company Error")
![alt text](https://i.imgur.com/5ee28Ef.png "Personal Email Error")











