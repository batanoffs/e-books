# E-commerce Bookstore "Knigi.bg"

The goal of this e-commerce full stack project was to practice handling payments, research providers, validations both front and backend, user roles, authentication, delivery APIs, backend architecture and controllers, routes and many more. 

During development I've learned a lot about how to fully utilize the features that React Admin framework provides, how Stripe payments work, how to build functional backend API and provide data to the client. Also working with cookies, tokens, guards, interfaces for typescript, cors, encryption methods(salting) and many more.

[![License: MIT](https://img.shields.io/badge/Licence-MIT-teal)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-teal)](https://github.com/prettier/prettier)

## 📝Table of Contents

- [E-commerce Bookstore "Knigi.bg"](#e-commerce-bookstore-knigibg)
  - [📝Table of Contents](#table-of-contents)
  - [➺ Test account](#-test-account)
  - [🔬Technologies](#technologies)
  - [📐Fixes and updates:](#fixes-and-updates)
  - [🎬▶️Usage](#️usage)
  - [🔧 Installation](#-installation)
  - [💫UX UI](#ux-ui)
  - [📁 Project content](#-project-content)
    - [Login Register](#login-register)
    - [About](#about)
    - [Catalog](#catalog)
    - [Product details](#product-details)
    - [Cart](#cart)
    - [Wishlist](#wishlist)
    - [Checkout](#checkout)
    - [Profile menu](#profile-menu)
    - [Admin panel](#admin-panel)
  - [🚀 FUTURE Development:](#-future-development)
  - [🎨 Design and Architecture](#-design-and-architecture)
    - [⚙️ **Front-end architecture**](#️-front-end-architecture)
      - [💾 Context Providers with Zustand Store](#-context-providers-with-zustand-store)
      - [🎣 Custom Hooks](#-custom-hooks)
      - [🛫 Routers](#-routers)
      - [🧮 Utils](#-utils)
      - [🙋‍♀️ Services](#️-services)
    - [⚙️ **Back-end architecture**](#️-back-end-architecture)
      - [🛠 Express config](#-express-config)
      - [📮 Models](#-models)
      - [🛫 Routes](#-routes)
      - [📡 Controllers](#-controllers)
      - [🙋‍♀️ Services](#️-services-1)
      - [⌨️ Middlewares](#️-middlewares)
      - [🧮 Utils](#-utils-1)

## ➺ Test account

```bash
username `test@abv.bg` password `qweasd123`
```

```bash
username `pesho@abv.bg` password `qweasd123`
```

## 🔬Technologies

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

## 📐Fixes and updates:

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

## 🎬▶️Usage

Here are some examples of how to use this project:

1. Register and login
1. Browse products in the Catalog page
1. Login as user or admin
1. Add to cart
1. Add to wishlist
1. Checkout
1. Manage products, users, orders, etc from Admin panel

## 🔧 Installation

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

## 💫UX UI

![knigibguxui](https://github.com/user-attachments/assets/7efc6120-09a9-41da-b374-cd6b99ab5cb5)

## 📁 Project content

### Login Register

### About

### Catalog

### Product details

### Cart

### Wishlist

### Checkout

### Profile menu

### Admin panel

## 🚀 FUTURE Development:

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

## 🎨 Design and Architecture

Server built on `express` and `mongodb` with `mongoose`. Client built with `vite`, `react`, `typescript` and `sass`.

### ⚙️ **Front-end architecture**

#### 💾 Context Providers with Zustand Store

-   **Alert Store** is a helper store that provides state if the alert is open or not and what is the message.

-   **Cart Store** stores and provides data for the cart of the authenticated user.
  
-   **Categories Store** stores and provides data for categories in the catalog.

-   **Filter Store** provides and stores data for the filter section in the catalog page (not yet implemented)

-   **Modal Store** is a helper store that provides state if the modal is open or not

-   **Location Store** is a helper store that provides state for `window.location.pathname` used for better UX and site navigation

-   **User Data Store** holds information about the currently authenticated user. It provides getters and setters for the user's data, including the user's username, whether the user is logged in, and whether the user is an admin.

-   **Wishlist Store** stores and provides data for the wishlist of the authenticated user.

#### 🎣 Custom Hooks

-   **useConfirm()** is a hook that opens modal to ask the user for confirmation of his action.

#### 🛫 Routers

-   Main Router is located in **App** component

#### 🧮 Utils

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

#### 🙋‍♀️ Services

-   **authService** for Authentication
-   **cartService** for handling cart data
-   **productService** for handling products data (todo)

### ⚙️ **Back-end architecture**

#### 🛠 Express config

-   **express.ts** contains express middleware
-   **database.ts** contains mongoose middleware
-   **routes.ts** contains express routes
  
#### 📮 Models

-   **Book** for Books
-   **BookCategories** for Book categories
-   **Cart** for Cart
-   **Featured** for Featured
-   **Order** for Orders
-   **Stationery** for bookstore stationeries
-   **StationeryCategories** for Stationery categories
-   **Textbook** for Textbooks
-   **TextbookCategories** for Textbook categories
-   **User** for Users
-   **Wishlist** for users Wishlist
 
#### 🛫 Routes

-   **admin** for the Admin panel and management of products, users, orders, featured items. It uses `raExpressMongoose` library to handle the database operations for `react-admin`.
-   **auth** for Authentication routes
-   **book** for book product routes
-   **cart** for user cart routes
-   **categories** for categories routes
    -   **categoriesType** for categories type routes and controllers for getting all types of categories
-   **featured** (todo) for Featured products routes
-   **order** for Orders routes
-   **stationery** for Stationeries routes
-   **stripe** for stripe routes
-   **textbook** for Textbooks routes
-   **user** for Users routes
-   **wishlist** for Wishlists routes
-   **mainRoutes** combines all routes under `/api`
  
#### 📡 Controllers

-   **auth** for Authentication contains `logic` `register` and `logout`
-   **book** for handling products of type books. Contains logic for delete, update, create, get all or get one book
-   **cart** for handling cart data. Contains logic for `addToCart`, `getCart`, `removeProductFromCart`, `clearCart`
-   **categories** for handling categories data, contains logic for `addCategory` and `getAll` categories of every type.
-   **featured** for handling featured data, contains logic `getFeaturedProducts`, `markAsFeatured`, `removeFromFeatured`
-   **images** for handling image uploads to Cloudinary. Contains logic `uploadCoverImage`
-   **order** for handling order data, contains logic `createOrder`, `getOrderById`, `getOrders`, `updateOrderStatus`, `deleteOrder`
-   **stationery** for handling stationery data, contains logic `createStationery`, `getStationeries`, `updateStationery`, `deleteStationery`
-   **textbook** for handling textbook data, contains logic `createTextbook`, `getTextbooks`, `updateTextbook`, `deleteTextbook`
-   **stripe** for handling payment data, contains logic `checkoutSession`
-   **user** for handling user data, contains logic `getUsers`, `getUserByIdFromToken`, `getUserById`, `updateUser`, `deleteUser`
-   **wishlist**(todo) for handling wishlist data, contains logic `createWishlist`, `getWishlist`, `updateWishlist`, `deleteWishlist`

#### 🙋‍♀️ Services

-   **user** for Authentication (register, login, logout)
-   **jwt** for creating and verifying tokens
-   **image** for uploading image to Cloudinary

#### ⌨️ Middlewares

-   **cors** for cors setup for the express server
-   **filters** to be updated (todo), contains logic for catalog filters and sorting
-   **guards** isUser, isAdmin, isGuest - checks if user is authenticated and roles
-   **multer** for file upload
-   **session** validates the session. If token is present, sets the user in the request object
-   **validateRequest** validates the requests

#### 🧮 Utils

-   **getCategoryModel(categoryType)**: This function returns the category model based on the category type.
-   **cloudinaryConfig()**: This function returns the configuration for Cloudinary.
-   **errorHandler(error, res)**: This function handles errors in the server.
-   **parseError(error)**: This function takes in an `error` object and returns a new error object with a consistent structure. It is designed to handle different types of errors that can occur in an application.