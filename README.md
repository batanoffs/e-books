<h1> E-commerce Bookstore "Knigi.bg" </h1>

The goal of this e-commerce full stack project is to design and implement a fully functional online bookstore, practice the integration of payment methods, implement user roles and authentication, integrate delivery APIs such as Econt and Speedy, and build a scalable backend architecture. The project also aims to provide a seamless user experience, with features such as filtering and sorting, a functional cart, and a responsive design.

During development, I've learned a lot about fully utilizing the features that React Admin framework provides, how integrate Stripe payments, how to build a functional backend API and provide data to the client, how to store tokens with cookies, implement guards, providing interfaces for TypeScript, manage state with Zustand, configuring CORS, encryption methods (salting) and more.

[![License: MIT](https://img.shields.io/badge/Licence-MIT-teal)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-teal)](https://github.com/prettier/prettier)




<details close>
  <summary>
    <h2> 📝Table of Contents</h2>
  </summary> 

- [🔬Technologies](#technologies)
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
- [🚀 FUTURE Development:](#-future-development)
- [📐Fixes and updates:](#fixes-and-updates)

</details>

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

## 🎬▶️Usage

Here are some examples of how to use this project:

1. Register and login as user or admin
2. Browse products in the Catalog page - also filtering and sorting are available for the users
3. Add items to the Cart. The cart page is for authenticated users only. There are options to remove items, change the quantity and checkout. 
4. Add items to the Wishlist. In the page, there are options to remove items or add them to the cart.
5. Check each product details in the Details Page where only authenticated users can add comments or see the button for add to wishlist.
6. Finally checkout your items in the Checkout page which is for authenticated users. It shows all the info about the order with the total price and options for delivery methods, forms for contact info and payment button that redirects the user to the payment gateway - stripe.
7. Manage products, users, orders, etc from Admin panel

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

- Logo creation and design are loosely done with the help of [excalidraw](https://excalidraw.com/). 

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
  
## 📐Fixes and updates:

-   [ ] fix issues with session expire and users
-   [x] fix issues with cookies token for admins validation
-   [x] fix server duplicate code - replace with already created utils
-   [x] fix css warnings (low priority)
-   [ ] fix issues with catalog items hover buttons
-   [ ] fix issues with Menu component from Material UI for anchorEl property
-   [x] update cart logic and think about state management issues for items and quantity
-   [x] update carousels functionality buttons etc
-   [x] update theme and reuseable code for scss and maybe react
-   [ ] implement filters for Catalog Page
-   [ ] update logic for checkout page
-   [ ] add property for product type to each model schema of items/products