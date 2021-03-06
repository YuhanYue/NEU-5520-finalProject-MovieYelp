# π¬5520-Final-Project-MovieYelp

Final Project for NEU 21Fall Course CS5520.

*Team members: Jiabin Xiong, Yun Feng, Yuhan Yue*

* **github link: https://github.com/YuhanYue/5520-Final-Project-MovieYelp**

* **Intro Vedio link: https://drive.google.com/file/d/183N9kT4eusJWvov0LdfuD9tMWDwFZ5hE/view?usp=sharing**



[TOC]

## 1 Overall

Film Shooting Location App
To develop a mobile application that helps users to find film shooting locations.Basic functions are divided into two parts: Searching and Sharing. The searching part provides functions that users can find film locations nearby them and can also search for a particular movieβs shooting locations. Sharing part allows users to upload their perfect picture of one shooting location and other users could give a thumbs up, comment and collect the userβs pictures.



## 2 Development Environment

* Platform: IOS/ANDROID
* Frontend: ReactNative
* Backend: back4App



## 3 Code Structure

* The `assets` folder contains all the non-code elements like image, gif etc. we use in our develpoment.
* The `Component` folder contains all the Card, input, submit, and upload features of our development.
* The `navigator` folder contains the naviagtion and the tabnavigator, which it could re-direct the current page to destination page.
* The `screens` folder contains all the pages we have in our application.

```
.
βββ App.js
βββ app.json
βββ assets
βΒ Β  βββ 84848-polar-bear.gif
βΒ Β  βββ 84848-polar-bear.json
βΒ Β  βββ HomeIcon2.png
βΒ Β  βββ Profile.png
βΒ Β  βββ adaptive-icon.png
βΒ Β  βββ avatar.jpg
βΒ Β  βββ favicon.png
βΒ Β  βββ icon.png
βΒ Β  βββ login.gif
βΒ Β  βββ mapIcon1.jpeg
βΒ Β  βββ register.gif
βΒ Β  βββ searchIcon.png
βΒ Β  βββ splash.png
βββ components
βΒ Β  βββ CardUri.js
βΒ Β  βββ Inputs.js
βΒ Β  βββ Submit.js
βΒ Β  βββ UploadingImage.js
βββ navigators
βΒ Β  βββ navigation.js
βΒ Β  βββ tabNavigator.js
βββ package-lock.json
βββ package.json
βββ screens
βΒ Β  βββ CardViewScreen.js
βΒ Β  βββ CustomCallout.js
βΒ Β  βββ Login.js
βΒ Β  βββ MapViewScreen.js
βΒ Β  βββ MoviePage.js
βΒ Β  βββ Overview.js
βΒ Β  βββ Profile.js
βΒ Β  βββ Reviews.js
βΒ Β  βββ SearchScreen.js
βΒ Β  βββ SignUp.js
βββ yarn-error.log
βββ yarn.lock
```



## 4 Install

* React Native Install
* Npm install/ yarn add
* Expo install



## 5 How to Run

`cd MovieYelp/` and run command line as `expo start`.

 **Please use a simulator** because there would not be any user interaction with browser.



## 6 Citations

* https://www.back4app.com/docs/get-started/welcome

* https://reactnative.dev/docs/getting-started

  

## 7 Limitations

* We could have developed the thumbs up function. The like button and keep track of the likes from the reviews.
* The project would not be able to refresh itself immediately, we could have developed the hot refresh function.



## 8 Distribution

* **Jiabin Xiong: 33.3%**  
  * Profile.js 
  * Sign up and log in function
  * Add review function
  * database related

* **Yun Feng: 33.3%**
  * Search.js
  * Sign up and log in function
  * Movie display function
  * Prams pass to pages

* **Yuhan Yue: 33.3%**
  * code framework
  * Front end design
  * HomePage.js
  * database related



