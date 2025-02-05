import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  h1, h2, h3 {
  margin: 0
  }

  body {
    margin: 0;
    font-family: system-ui;
    height: 100vh;
  }

  main {
  padding: 20px;
  padding-bottom: 100px;
  box-sizing: border-box;
  }

  footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    display: none;
    justify-content: center;
    padding: 20px;
    background-color: white;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
    box-shadow: 0 0 30px lightgrey;
    z-index: 1;
  }

header {
display: flex;
justify-content: space-between;
padding: 20px;
}

#logo {
width: 40px;
}

.title {
margin: 0;
margin-bottom: 20px;
font-size: 1.75rem;

  // height: 50px
}

.sub-title {
font-size: 1.5rem;
margin: 0;
margin-bottom: 40px;
color: #404040;
}

  nav {
  display: flex;
  gap: 20px
  }

  .link {
  padding: 10px;
  border-radius: 20px;
  text-decoration: none;
  color: gray;
  font-weight: 500;
  display: flex;
  gap: 10px
  }

  .active {
  color: black;
  // font-weight: 700
  }

  #collection-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  overflow: hidden;
  // flex-wrap: wrap;

  }

  .piece {
  position: relative;
  width: 350px;
  display: flex;
  gap: 10px;
  text-decoration: none;
  flex-direction: column;
  }

  .spotlight-piece {
  position: relative;
  width: 100%;
  display: flex;
  gap: 10px;
  text-decoration: none;
  flex-direction: column;
  }

  .piece-title {
  margin: 0;
  font-size: 1.25rem
  }

  #piece-details-wrapper {
  // position: relative;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 20px;
  width: 100%
  box-sizing: border-box;
  }
 
  #piece-details {
  display: flex;
  // gap: 20px;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
  }

#image-wrapper {
  position: relative;
  width: 100%;
  max-width: 800px;
  }
  
  #detail-image {
    max-height: 600px;
    width: 100%;
  // height: 400px;
  object-fit: cover;
  border-radius: 2rem;

  }

  .piece-info {
  // line-height: 1.5rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  gap: 8px;
  }

  .piece-info > h3, p {
  margin: 0;
  }
  
  .piece-info > p {
  color: #404040;
  }

  .like-button {
  position: absolute;
  top: 20px;
  right: 20px;
  margin: 0;
  border: none;
  padding: 10px;
  border-radius: 100%;
  background-color: white;
  }
  
  .share-button {
  // top: 0px;
  // right: 0px;
  top: 20px;
  right: 20px;
  margin: 0;
  border: none;
  padding: 10px;
  border-radius: 100%;
  background-color: white;
  }
  
  .back-button {
  display: flex;
  margin: 0;
  border: none;
  padding: 10px;
  border-radius: 50px;
  background-color: white;
  width: 40px;
  height: 40px
  }
  
  .back-button:hover, .like-button:hover, .share-button:hover, .link:hover {
  background-color: lightgrey;
  }

  .cover-img {
  height: 400px;
  object-fit: cover;
  border-radius: 2.25rem;
  transition: 0.2s;
  }

  .spotlight-img {
  height: 480px;
  object-fit: cover;
  border-radius: 2rem;
  transition: 0.2s;
  }

  .piece-wrapper {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  }

  #piece-details-header {
  position: relative;
  display: flex;
  width: 100%
  }

  .icon {
  font-size: 20px;
  transition: all 0.3s;
  }
  
  .icon-nav {
    font-size: 20px;
  display: flex;
  }

  // Comment

  .comment-wrapper {
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  }

  .comment {
  list-style: none;
  display: flex;
  // justify-content: space-between;
  gap: 10px
  }

#noComments-title {
line-height: 2rem;
}

// Input

  #input-wrapper {
    position: absolute:
    width: 100%;
    box-sizing: border-box;
  }
    
  input {
    width: 100%;
    font-family: system-ui;
    font-size: 1rem;
    border-radius: 50px;
    border: 1px solid lightgrey;
    // height: 20px;
    padding: 10px 20px;
  }

  #comment-button {
    position: absolute;
    align-self: flex-end;
  // bottom: 56px;
  right: 40px;
  margin-top: 10px;
  border: none;
  background-color: #ffffff00;

  }

  // Colors

  #color-wrapper {
  display: flex;
  gap: 10px;
  margin: 0;
  padding: 0;
  margin: 20px 0px
  }

  .color {
  height: 30px;
  width: 30px;
  }

// Searchbar

  #searchBar {
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  }

  #search-button {
  position: ablsolute;
  top: 0;
  right: 50px;
  
  }

  #search-input {
  display: flex;
  }

@media only screen and (max-width: 600px) {
  .link > p {
    display: none;
  }

  header {  
justify-content: center;
}

  header > nav {
  display:  none;
  }

  footer {
  display: flex;
  }

}

`;


