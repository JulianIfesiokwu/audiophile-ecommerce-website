# audiophile-ecommerce-website
An ecommerce website built using react

# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued Development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### Links

- Solution URL: [https://github.com/JulianIfesiokwu/audiophile-ecommerce-website]
- Live Site URL: [https://julianifesiokwu.github.io/audiophile-ecommerce-website/]

## My process

My process was not as structured as I had hoped it would be. I worked on several components at the same time and this resulted in my having to go back to fix components.

Also I didn't use any css library and this was a major drawback on my progress as I had to battle with overlapping
styles for components

### Built with

- Flexbox
- CSS Grid
- React
- JavaScript
- React modal library

### What I learned
 I learnt quite a lot on the project. This is my first completed react project and I learnt a vast amount which I cannot list
 everything here. I will try my best though.

- How to add a google font to a react app
[https://blog.greenroots.info/3-quick-ways-to-add-fonts-to-your-react-app]
I used the first style of adding the link tags to the head of the index.html, then
I added a css rule to the app.css file.

- Learnt how to import images in react covered in the link
[https://create-react-app.dev/docs/adding-images-fonts-and-files/]

- Learnt how to stop child flex items from being full width
[https://stackoverflow.com/questions/41694559/stop-flex-child-from-being-full-width]

-Learnt how to import svgs in react
[https://create-react-app.dev/docs/adding-images-fonts-and-files/]

- Learnt how to use react router
[https://reactrouter.com/docs/en/v6/getting-started/tutorial]
STEPS
1. import { BrowserRouter } from 'react-router-dom': This is done in your index.js
The BrowserRouter component is then used to wrap the app component like below:
  <BrowserRouter>
    <App />
  </BrowserRouter>

2. We import Link to our App component.
import { Link } from "react-router-dom";
This will give control of the URL to react router.Anytime a link is clicked the url
will change to whatever string you added to the "to" attribute in the link tag.

- How to scroll to top when a link is clicked
[https://stackoverflow.com/questions/70193712/how-to-scroll-to-top-on-route-change-with-react-router-dom-v6]
[https://www.youtube.com/watch?v=8c5eMyJR9Js]


- Static images should be stored in the public folder
see this important resource
[https://daveceddia.com/react-image-tag/]

[https://sebhastian.com/react-disable-button/]

[https://www.w3schools.com/howto/howto_css_hide_arrow_number.asp]

[https://www.w3schools.com/css/css3_backgrounds.asp]

[https://www.w3schools.com/cssref/pr_background-position.asp]

[https://www.w3resource.com/javascript/form/email-validation.php]

[https://www.c-sharpcorner.com/article/how-to-deploy-react-application-on-github-pages/]

I learnt to use 
- styled components: a react library to help in organising and keeping my css contained.
- Working on a part of the project and completing it before going to another part of the project.
- Static images are stored in the public folder in react projects.
-How to use the useState Hook. This was my first time using Hooks and I saw how important they can be.
-How to pass methods and state between components. Here I put shared methods and passed them into the components in the 
app.js. I have never done this before and this helped me understand react's uni-directional flow whereby state flows from the
parent to the child component.
- react modal library. This awesome resource made it very easy for me to create and use a modal in my react application.
Highly recommended.

### Continued development

I intend to continue my development on CSS Grid, BEM and SASS because I wish to use these methodolgies for all my future projects.
I also intend to work on more react project using Hooks and Redux if possible to improve my understanding of data flow in
a react application.
I will also use styled components and some other UI librarys to help keep my CSS organised.

### Useful resources

[https://daveceddia.com/react-image-tag/]

[https://sebhastian.com/react-disable-button/]

[https://www.w3schools.com/howto/howto_css_hide_arrow_number.asp]

[https://www.w3schools.com/css/css3_backgrounds.asp]

[https://www.w3schools.com/cssref/pr_background-position.asp]

[https://www.w3resource.com/javascript/form/email-validation.php]

[https://www.c-sharpcorner.com/article/how-to-deploy-react-application-on-github-pages/]

## Author

- Frontend Mentor - [https://www.frontendmentor.io/profile/JulianIfesiokwu]
- Twitter - [https://twitter.com/mrjules07]

