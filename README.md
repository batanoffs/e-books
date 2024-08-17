# E-commerce bookstore full stack project

[![License: MIT](https://img.shields.io/badge/Licence-MIT-teal)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-teal)](https://github.com/prettier/prettier)

## Table of Contents

-   [Test account](#test-account)
-   [Technologies](#technologies)
-   [Usage](#usage)
-   [Installation](#installation)
-   [Project content](#project-content)
    -   [Login Register](#login-register)
    -   [About](#about)
    -   [Catalog](#catalog)
    -   [Product details](#product-details)
    -   [Cart](#cart)
    -   [Checkout](#checkout)
    -   [Profile menu](#profile-menu)
    -   [Admin panel](#admin-panel)
-   [Design and Architecture](#design-and-architecture)
-   [Fixes and updates](#fixes-and-updates)
-   [FUTURE Development](#future-development)
-   [Contributing](#contributing)
-   [License](#license)

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
-   [ ] fix issues with cookies token for admins validation
-   [x] fix server duplicate code - replace with already created utils
-   [ ] fix css warnings (low priority)
-   [ ] fix catalog hover buttons issues and functionality
-   [ ] fix issues with Menu component from Material UI for anchorEl property
-   [x] update cart logic and think about state management issues for items and quantity
-   [ ] updated carousels functionality buttons etc
-   [ ] update theme and reuseable code for scss and maybe react
-   [ ] update filters for catalog Pages
-   [ ] update logic for checkout page
-   [ ] add property for product type to each model schema of items/products

## Usage

Here are some examples of how to use this project:

1. Browse catalog
1. Register and login
1. Login as user or admin
1. Add to cart
1. Checkout
1. View profile
1. Edit profile
1. Add to wishlist
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
6. Login with test credentials or register new account

## Project content

### Login Register

### About

### Catalog

### Product details

### Cart

### Checkout

### Profile menu

### Admin panel

## FUTURE Development:

1. Create the logic for the rest of the products (sanitary and textbooks)
2. Create more components in home page for example blog or categories
3. Update the featured logic based on model and integrate it with admin panel
4. Update how the server handle files/images and upload them in Backblaze B2 + Cloudflare CDN

    #### Backblaze B2:

    Pros:

    - Very cost-effective storage solution, cheaper than Amazon S3.
    - Simple pricing model.
    - S3-compatible API for easy integration.

    Cons:

    - Fewer features compared to AWS S3.
    - May require additional tools or services for a comprehensive solution.

    #### Cloudflare CDN

    Pros:

    - Free tier available with generous limits.
    - Fast content delivery with global edge locations.
    - Provides additional security features like DDoS protection.

    Cons:

    - Free tier might have limitations on advanced features.
    - Can require some configuration for optimal performance.

5. Research and integrate Speedy and Econt APIs
6. Research and integrate location API of some sort for smooth user experience
7. Integrate payment logic for ePay, card, EasyPay, PayPal, cash, bank-transfer
8. Create pages mentioned in the footer common questions about etc
9. Maybe add blog articles functionality for admin panel
10. Implement vouchers and promotions discounts etc. Discuss the business logic with the client
11. Implement testing unit with JEST, end-to-end Playwright. Discuss coverage
12. Create search logic
13. Header nav bar update is needed
14. Implement newsletter logic
15. Research and implement forgotten password logic
16. Decide on how much material ui components will be used (performance issues)
17. Redesign discuss business logic for buy now button and authentication

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

-   **user** for Authentication
-   **jwt** for creating and verifying tokens

#### Middlewares

-   **cors** for cors setup for the express server
-   **guards** isUser, isAdmin, isGuest - checks if user is authenticated and roles
-   **session** validates the session if token is present, if not clears the cookie token
-   **validateRequest** validate the requests

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
