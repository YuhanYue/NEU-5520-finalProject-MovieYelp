# 🎬5520-Final-Project-MovieYelp

Final Project for NEU 21Fall Course CS5520.

*Team members: Jiabin Xiong, Yun Feng, Yuhan Yue*

* **github link: https://github.com/YuhanYue/5520-Final-Project-MovieYelp**

* **Intro Vedio link: https://drive.google.com/file/d/183N9kT4eusJWvov0LdfuD9tMWDwFZ5hE/view?usp=sharing**



[TOC]

## 1 Overall

Film Shooting Location App
To develop a mobile application that helps users to find film shooting locations.Basic functions are divided into two parts: Searching and Sharing. The searching part provides functions that users can find film locations nearby them and can also search for a particular movie’s shooting locations. Sharing part allows users to upload their perfect picture of one shooting location and other users could give a thumbs up, comment and collect the user’s pictures.



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
├── App.js
├── app.json
├── assets
│   ├── 84848-polar-bear.gif
│   ├── 84848-polar-bear.json
│   ├── HomeIcon2.png
│   ├── Profile.png
│   ├── adaptive-icon.png
│   ├── avatar.jpg
│   ├── favicon.png
│   ├── icon.png
│   ├── login.gif
│   ├── mapIcon1.jpeg
│   ├── register.gif
│   ├── searchIcon.png
│   └── splash.png
├── components
│   ├── CardUri.js
│   ├── Inputs.js
│   ├── Submit.js
│   └── UploadingImage.js
├── navigators
│   ├── navigation.js
│   └── tabNavigator.js
├── package-lock.json
├── package.json
├── screens
│   ├── CardViewScreen.js
│   ├── CustomCallout.js
│   ├── Login.js
│   ├── MapViewScreen.js
│   ├── MoviePage.js
│   ├── Overview.js
│   ├── Profile.js
│   ├── Reviews.js
│   ├── SearchScreen.js
│   └── SignUp.js
├── yarn-error.log
└── yarn.lock
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



