# Frontend Mentor - Space Tourism Website Solution

This is my solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of Contents

- [Frontend Mentor - Space Tourism Website Solution](#frontend-mentor---space-tourism-website-solution)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
    - [The Challenge](#the-challenge)
    - [Links](#links)
  - [My Process](#my-process)
    - [Built With](#built-with)
    - [What I Learned](#what-i-learned)
    - [Continued Development](#continued-development)
  - [Author](#author)

## Overview

### The Challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Links

- GitHub Repository: [github.com/Nexdevjnr/Frontend-mentor-space-tourism](https://github.com/Nexdevjnr/Frontend-mentor-space-tourism)
- Live Site URL: [https://frontend-mentor-space-tourism-leok.vercel.app/](https://frontend-mentor-space-tourism-leok.vercel.app/)

## My Process

### Built With

- Semantic HTML5 markup
- Custom CSS with Flexbox
- Mobile-first workflow
- 5 responsive breakpoints (mobile, tablet, 1024px, 1440px, 1920px)
- Vanilla JavaScript for dynamic navigation
- JSON data handling
- `<picture>` tag for responsive images

### What I Learned

This project allowed me to practice **without generative AI** for my own good, and also to manipulate the DOM with vanilla JavaScript rather than React.

**Key discoveries:**

- The `<picture>` tag for handling responsive images
- The famous "it should be done in 2 days" in development... and here we are 😅

**CSS ripple animation:**  
Found on [CodePen](https://codepen.io/mkurapov/pen/bwezab)

```css
@keyframes ripple {
  0% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.5), 0 0 0 10px rgba(255, 255, 255, 0.4);
  }
  100% {
    box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.4), 0 0 0 40px rgba(255, 255, 255, 0);
  }
}
```

**DOM Manipulation:**

```js
// Dynamic data loading from JSON
const loadCrewData = async () => {
  const response = await fetch("../data.json");
  const data = await response.json();
  // DOM update
};
```

### Continued Development

Areas to improve in future projects:

- Accessibility (ARIA labels, keyboard navigation)
- More modular CSS architecture (BEM methodology)
- Performance optimization

## Author

- Portfolio - [leo-khatchatourian.vercel.app](https://leo-khatchatourian.vercel.app)
- Frontend Mentor - [@Nexdevjnr](https://www.frontendmentor.io/profile/Nexdevjnr)
- GitHub - [@Nexdevjnr](https://github.com/Nexdevjnr)
