# E-commerce Bookstore "Книги бг"

"Книги бг" is an e-commerce full stack project. The goal of this project was to practice handling payments, research providers, validations both front and backend, user roles, authentication, delivery APIs, backend architecture and controllers, routes and many more. 

During development I've learned a lot about how to fully utilize the features that React Admin framework provides, how Stripe payments work, how to build functional backend API and provide data to the client. Also working with cookies, tokens, guards, interfaces for typescript, cors, encription methods(salting) and many more.

[![License: MIT](https://img.shields.io/badge/Licence-MIT-teal)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-teal)](https://github.com/prettier/prettier)

## Table of Contents

- [E-commerce Bookstore "Книги бг"](#e-commerce-bookstore-книги-бг)
  - [Table of Contents](#table-of-contents)
  - [Test account](#test-account)
  - [Technologies](#technologies)
  - [Fixes and updates:](#fixes-and-updates)
  - [Usage](#usage)
  - [Installation](#installation)
  - [UX UI](#ux-ui)
  - [Project content](#project-content)
    - [Login Register](#login-register)
    - [About](#about)
    - [Catalog](#catalog)
    - [Product details](#product-details)
    - [Cart](#cart)
    - [Wishlist](#wishlist)
    - [Checkout](#checkout)
    - [Profile menu](#profile-menu)
    - [Admin panel](#admin-panel)
  - [FUTURE Development:](#future-development)
  - [Design and Architecture](#design-and-architecture)
    - [**Front-end architecture**](#front-end-architecture)
      - [Context Providers with Zustand Store](#context-providers-with-zustand-store)
      - [Custom Hooks](#custom-hooks)
      - [Routers](#routers)
      - [Utils](#utils)
      - [Services](#services)
    - [**Back-end architecture**](#back-end-architecture)
      - [Express config](#express-config)
      - [Models](#models)
      - [Controllers](#controllers)
      - [Services](#services-1)
      - [Middlewares](#middlewares)
      - [Routes](#routes)
      - [Interfaces](#interfaces)
      - [Utils](#utils-1)

## Test account

```bash
username `test@abv.bg` password `qweasd123`
```

```bash
username `pesho@abv.bg` password `qweasd123`
```

## Technologies

-   Frontend - `React` `TypeScript`
-   UI - `Material UI` `SASS` `Slick-Carousel` `React-Slick` `FilePond`
-   Forms - `React Hook Form`
-   State management - `Zustand`
-   Admin panel manager - `React Admin`
-   Server - `Node` `Express` `Cors` `Cookie-parser` `Express-Mongoose-RA-JSON-Server`
-   Database - `MongoDB` `Mongoose`
-   Encryption - `Bcrypt`
-   Authentication - `JsonWebToken`
-   Handling requests - `Axios`
-   Tools - `Git` `Vite` `ESLint` `Prettier` `Yarn` `Nodemon`

## Fixes and updates:

-   [ ] fix issues with session expire and users
-   [x] fix issues with cookies token for admins validation
-   [x] fix server duplicate code - replace with already created utils
-   [ ] fix css warnings (low priority)
-   [ ] fix catalog hover buttons issues and functionality
-   [ ] fix issues with Menu component from Material UI for anchorEl property
-   [x] update cart logic and think about state management issues for items and quantity
-   [x] update carousels functionality buttons etc
-   [x] update theme and reuseable code for scss and maybe react
-   [ ] update filters for catalog Pages
-   [ ] update logic for checkout page
-   [ ] add property for product type to each model schema of items/products

## Usage

Here are some examples of how to use this project:

1. Register and login
1. Browse products in the Catalog page
1. Login as user or admin
1. Add to cart
1. Add to wishlist
1. Checkout
1. Manage products, users, orders, etc from Admin panel

## Installation

To get started with this project you need `mongodb` installed for handling the database then:

1. Clone the repository

```bash
git clone https://github.com/batanoffs/e-books.git
```

2. Navigate to the project directory: `cd your-project-directory`

3. Install dependencies for the server and the client:

```bash
./cd client && yarn install
```

```bash
./cd server && yarn install
```

4. Start the development server:

```bash
./cd server && yarn run start-server
```

```bash
./cd client && yarn run dev
```

5. Open your browser and go to [http://localhost:5173/](http://localhost:5173/) to view the app.
6. Register new account and login

## UX UI

![knigibguxui](https://github.com/user-attachments/assets/7efc6120-09a9-41da-b374-cd6b99ab5cb5)

## Project content

### Login Register

### About

### Catalog

### Product details

### Cart

### Wishlist

### Checkout

### Profile menu

### Admin panel

## FUTURE Development:

1. Update the featured logic based on model and integrate it with admin panel
1. Research and integrate Speedy and Econt APIs for delivery
1. Research and integrate location API of some sort for smooth user experience
1. Create pages mentioned in the footer common questions about etc
1. Maybe add blog articles functionality
1. Implement vouchers and promotions discounts etc.
1. Implement testing unit with ViTest, Playwright. Discuss coverage
1. Create search logic
1. Implement newsletter logic
1. Research and implement forgotten password logic
1. Decide on how much material ui components will be used (performance issues)
1. Redesign/discuss business logic for buy now button and authentication

## Design and Architecture

Server build on express and mongodb for backend and mongoose for mongodb schema. Client build on vite and react for frontend.

### **Front-end architecture**

#### Context Providers with Zustand Store

-   **Alert Store** is a helper store that provides state if the alert is open or not

-   **Cart Store** stores and provides data from the server to the cart of the authenticated user.

-   **Filter Store** provides and stores data for the filter section in the catalog page

-   **Modal Store** is a helper store that provides state if the modal is open or not

-   **Location Store** saves the current location and provides it to the header component and footer component for the admin panel

-   **User Data Store** holds information about the currently authenticated user. It provides getters and setters for the user's data, including the user's username, whether the user is logged in, and whether the user is an admin.

-   **Wishlist Store** stores and provides data from the server to the wishlist of the authenticated user.

#### Custom Hooks

-   **useConfirm()** is a hook opens modal to ask the user for confirmation

#### Routers

-   Main Router is located in **App** component

#### Utils

-   Constants

    -   **api.ts** stores base URL and endpoints to be used in all services
    -   **location.ts** stores array of regions and countries to be used in the location dropdown

-   Helpers

    -   **getToken()** gets user token
    -   **getUserRole()** gets user role
    -   **getUserId()** gets user id
    -   **checkIfUserIsAdmin()** checks if user is admin
    -   **isAuth()** checks if user is authenticated
    -   **isGuest()** checks if user is not authenticated
    -   **themeOptions** provides theme options for the MUI theme
    -   **formatDate(date)** formats the date
    -   **currencyFormatterToBGN(value)** formats the value to BGN currency

#### Services

-   **authService** for Authentication
-   **cartService** for handling cart data
-   **productService** for handling products data (todo)

### **Back-end architecture**

#### Express config

-   **express.ts** contains express middleware
-   **database.ts** contains mongoose middleware
-   **routes.ts** contains express routes

#### Models

-   **Book** for Books
-   **Cart** for Cart
-   **Featured** for Featured
-   **Order** for Orders
-   **Stationery** for bookstore stationeries
-   **Textbook** for Textbooks
-   **User** for Users
-   **Wishlist** for users Wishlist

#### Controllers

-   **auth** for Authentication contains `logic` `register` and `logout`
-   **cart** for handling cart data contains logic `addToCart`, `getCart`, `removeProductFromCart`, `clearCart`
-   **featured** for handling featured data contains logic `getFeaturedProducts`, `markAsFeatured`, `removeFromFeatured`
-   **order** for handling order data contains logic `createOrder`, `getOrderById`, `getOrders`, `updateOrderStatus`, `deleteOrder`
-   **stationery** for handling stationery data contains logic `createStationery`, `getStationeries`, `updateStationery`, `deleteStationery`
-   **textbook** for handling textbook data contains logic `createTextbook`, `getTextbooks`, `updateTextbook`, `deleteTextbook`
-   **user** for handling user data contains logic `getUsers`, `getUserByIdFromToken`, `getUserById`, `updateUser`, `deleteUser`
-   **wishlist**(todo) for handling wishlist data contains logic `createWishlist`, `getWishlist`, `updateWishlist`, `deleteWishlist`

#### Services

-   **user** for Authentication (register, login, logout)
-   **jwt** for creating and verifying tokens

#### Middlewares

-   **cors** for cors setup for the express server
-   **guards** isUser, isAdmin, isGuest - checks if user is authenticated and roles
-   **session** validates the session. If token is present, sets the user in the request object
-   **validateRequest** validates the requests

#### Routes

-   **auth** for Authentication routes
-   **admin** for the Admin panel and management of products, users, orders, featured items. It uses `raExpressMongoose` library to handle the database operations for `react-admin`.
-   **cart** for user cart routes
-   **featured** (todo) for Featured products routes
-   **order** for Orders routes
-   **stationery** for Stationeries routes
-   **textbook** for Textbooks routes
-   **user** for Users routes
-   **wishlist** for Wishlists routes
-   **mainRoutes** combines all routes

#### Interfaces

-   **IBookSchema** for Books
-   **ICartSchema** for Cart
-   **IFeaturedSchema** for Featured
-   **IOrderSchema** for Orders
-   **IStationerySchema** for Stationeries
-   **ITextbookSchema** for Textbooks
-   **IUserSchema** for Users
-   **IWishlistSchema** for Wishlists

#### Utils

-   **parseError(error)**: This function takes in an `error` object and returns a new error object with a consistent structure. It is designed to handle different types of errors that can occur in an application.

-   **saveCover(newBook, coverEncoded)**: This function converts a base64 encoded image into a Buffer and saves it to the `newBook` object as `coverImage`.
