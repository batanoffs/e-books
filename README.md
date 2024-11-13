# E-commerce Bookstore "Knigi.bg"

[![License: MIT](https://img.shields.io/badge/Licence-MIT-teal)](https://opensource.org/licenses/MIT)
[![styled with: Prettier](https://img.shields.io/badge/styled_with-prettier-purple)](https://github.com/prettier/prettier)

The goal of this full stack project is to design and implement a fully functional online e-commerce website connected to payment API Stripe, delivery service APIs - Econd and Speed, cloud storage database Cloudinary and provide a seamless user experience.

**Live link**
- Hosted: https://knigi-bg.onrender.com/
- Demo Video: https://www.youtube.com/watch?v=0UT5XTyFcRU

**Importand Notes:**
- ***The website is not responsive.** Recommended screen resolution 1920:1080 with aspect ratio of 16:9*
- ***The server needs to be awaken before use! Takes at least one minute***

During development, I've learned about:
- fully utilizing the features that the React Admin framework provides to build the admin panel
- integrate the Stripe Payments API into the project
- configure database in MongoDB and store images to the Cloudinary cloud provider
- build a functional backend API and provide data to the client
- store tokens with cookies
- implementing guards to prevent unauthorized access
- manage client state with Zustand
- implement ACID transactions with Mongoose and MongoDB for seamless data management in the DB
- configuring CORS
- encryption methods (salting) and many more.


## Table of Content
- [🔬 Technologies used](#-technologies-used)
- [🎬 Features](#-features)
- [🔧 Installation](#-installation)
- [💫 UX UI](#-ux-ui)
- [📁 Project content](#-project-content)
- [📁 Folder Structure](folder_structure.md)
- [🎨 Design and Architecture](#-design-and-architecture)
  - [⚙️ **Front-end architecture**](#️-front-end-architecture)
  - [⚙️ **Back-end architecture**](#️-back-end-architecture)
- [🚀 FUTURE Development:](#-future-development)
- [📐Fixes and updates:](#fixes-and-updates)






## 🔬 Technologies used

| Category            | Technologies                                                                                        |
| ------------------- | --------------------------------------------------------------------------------------------------- |
| Frontend            | `React`, `TypeScript`                                                                               |
| Server              | `Node`, `Express`, `Cors`, `Cookie-parser`, `Multer`,`Express-Mongoose-RA-JSON-Server`              |
| UI                  | `Material UI`, `SASS`, `Slick-Carousel`, `React-Slick`,                                             |
| Forms               | `React Hook Form`                                                                                   |
| State management    | `Zustand`                                                                                           |
| Admin panel manager | `React Admin`                                                                                       |
| Database            | `MongoDB`, `Mongoose`                                                                               |
| Encryption          | `bcryptjs`                                                                                          |
| Authentication      | `JsonWebToken`                                                                                      |
| API Request         | `Axios`                                                                                             |
| Tools               | `Git`, `Vite`, `ESLint`, `Prettier`, `Yarn`, `Nodemon`,`disable-react-devtools`,`hookform devtools` |

## 🎬 Features

Here are some examples of how to use this project:

- Register and login as a user
- Browse products in the catalog page
- Filter and sort the products (not fully implemented)
- Add and manage items to the cart
- Add and manage items to the wishlist
- Check each product details in the Details Page, where only authenticated users can comment, add products to cart or wishlist.
- Manage application data from the admin panel only for admins
- Checkout your cart and pay
- Preview order
- Manage profile settings
- Check order history and details

## 🔧 Installation

Follow the instructions below:

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
4. **The application should start automatically because of the `vscode config` file.**
5. If it does not, you can manually run the development server and the client cd to the main directory and:

    ```bash
    ./cd server && yarn run start-server
    ```

    ```bash
    ./cd client && yarn run dev
    ```

6. Open your browser and go to [http://localhost:5173/](http://localhost:5173/) to view the app.
7. Register a new account and login

## 💫 UX UI

-   Logo creation and design are loosely done with [www.excalidraw.com](https://excalidraw.com/).

    ![knigibguxui](https://github.com/user-attachments/assets/7efc6120-09a9-41da-b374-cd6b99ab5cb5)

## 📁 Project content

-   Home page
-   Login Register
-   Catalog
-   Product details
-   Cart details
-   Wishlist
-   Checkout
-   Stipe payment page
-   Order preview
-   Profile menu
-   Orders history
-   Admin panel

## 🎨 Design and Architecture

Server built on `express` and `mongodb` with `mongoose`. Client built with `vite`, `react`, `typescript` and `sass`.

### ⚙️ **Front-end architecture**

-   #### 💾 Context Providers with `Zustand` Store

    -   **Alert Store** - *a helper store that provides state if the alert is open or not and what is the alert message.*

    -   **Cart Store** - *stores and provides data for the cart of the authenticated user.*

    -   **Categories Store** - *stores and provides data for categories in the catalog.*

    -   **Filter Store** - *provides and stores data for the filter section in the catalog page (not yet implemented)*

    -   **Modal Store** - *a helper store that provides state if the modal is open or not*

    -   **Location Store** - *a helper store that provides state for `window.location.pathname` used for better UX and site navigation*

    -   **User Data Store** - *holds information about the currently authenticated user. It provides getters and setters for the user's data, including the user's username, whether the user is logged in, and whether the user is an admin.*

    -   **Wishlist Store** - *stores and provides data for the wishlist of the authenticated user.*

-   #### 🎣 Custom Hooks

    -   **useConfirm()** - *is a hook that opens modal to ask the user for confirmation of his action.*

-   #### 🛫 Routers

    -   Main Router is located in `App` component

-   #### 🧮 Utils

    -   Constants

        -   **api.ts** - *stores base URL and endpoints to be used in all services*
        -   **location.ts** - *stores array of regions and countries to be used in the location dropdown*

    -   Helpers

        -   **getToken()** - *gets user token*
        -   **getUserRole()** - *gets user role*
        -   **getUserId()** - *gets user id*
        -   **checkIfUserIsAdmin()** - *checks if user is admin*
        -   **isAuth()** - *checks if user is authenticated*
        -   **isGuest()** - *checks if user is not authenticated*
        -   **themeOptions** -* provides theme options for the MUI* theme
        -   **formatDate(date)** - *formats the date*
        -   **currencyFormatterToBGN(value)** - *formats the value to BGN currency*

-   #### 🙋‍♀️ Services

    -   **authService** for Authentication
    -   **cartService** for handling cart data
    -   **productService** for handling products data (todo)

### ⚙️ **Back-end architecture**

-   #### 🛠 Express config

    -   **express.ts** - contains express middleware
    -   **database.ts** - contains mongoose middleware
    -   **routes.ts** - contains express routes

-   #### 📮 Models

    | Model                | Fields                                                                                                                                                                                           |
    | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | Book, Textbook       | `id`,`title`, `author`, `price`, `description`, `picture`, `coverPageType`, `stock`, `categories`, `publisher`, `language`, `publishDate`, `pageCount`, `translator`, `dimensions`, `createdAt`, |
    | BookCategories       | `id`, `name`                                                                                                                                                                                     |
    | Cart                 | `id`, `products`, `modifiedAt`, `active`                                                                                                                                                         |
    | Featured             | `productId`, `productType`,`featuredAt`                                                                                                                                                          |
    | Order                | `id`, `userId`, `products[{productId, productType, quantity}]`, `total`, `orderStatus`, `shippingStatus`                                                                                         |
    | Stationery           | `id`, `title`, `price`, `description`, `picture`, `categories`, `stock`, `createdAt`                                                                                                             |
    | StationeryCategories | `id`, `name`                                                                                                                                                                                     |
    | TextbookCategories   | `id`, `name`                                                                                                                                                                                     |
    | User                 | `id`, `email`, `password`, `register_date`, `role`                                                                                                                                               |
    | Wishlist             | `id`, `user`, `productRefs`                                                                                                                                                                      |

-   #### 🛫 Routes 

    | Name       | Route url            | Description                                                                                                                                                                                                                                                            |
    | ---------- | -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | Main       | `/api/**`            | Main router that combines all routes under `/api`                                                                                                                                                                                                                      |
    | Admin      | `/api/admin/**`      | Admin router combining all routes for management of products, categories, users, orders, featured etc. `/users` \| `/categories/books` \| `/categories/textbooks` \| `/categories/stationery` \| `/stationery` \| `/books` \| `/textbooks` \| `/featured` \| `/orders` |
    | Auth       | `/api/`              | Authentication for `register` \| `login` \| `logout`                                                                                                                                                                                                                   |
    | Book       | `/api/books/**`      | Available routes to get all `/`, get by id `/:id` and `/upload` a product image to Cloudinary `/upload`                                                                                                                                                                |
    | Cart       | `/api/cart/**`       | Available routes for POST, GET and DELETE - `/` to add or remove product from cart, `/:userId` to get cart by userId, `/:productId` to remove product from cart                                                                                                        |
    | Categories | `/api/categories/**` | Available routes `/` to get all categories for each type. And for each type `/books/`, `/textbooks/` and `/stationery/` to get all or post a new one.                                                                                                                  |
    | Order      | `/api/orders/**`     | Available routes `/` to get all, `/:id` to get/update one by id or delete routes                                                                                                                                                                                       |
    | Stationery | `/api/stationery/**` | Available routes to get all `/`, get by id `/:id` and `/upload` a product image to Cloudinary `/upload`                                                                                                                                                                |
    | Checkout   | `/api/checkout/**`   | For the checkout and payment I use Stripe to create a new session `/create-checkout-session` and retrieve it `/session-status`                                                                                                                                         |
    | Textbook   | `/api/textbooks`     | Available routes to get all `/`, get by id `/:id` and `/upload` a product image to Cloudinary `/upload`                                                                                                                                                                |
    | User       | `/api/user`          | Available routes `/verify-user` to get user by token, `/:id` to get, update or delete a user by id                                                                                                                                                                     |
    | Wishlist   | `/api/wishlist`      | GET, POST, DELETE a list of products from wishlist. Available routes `/` to get all or create and update one, `/:productId` to delete one by id                                                                                                                        |

-   #### 📡 Controllers

    -   **auth** - *authenticating the users. Contains logic for `login`, `register` and `logout`*
    -   **book** - *handling products of type books. Contains logic for delete, update, create, get all or get one book*
    -   **cart** - *handling cart data. Contains logic for `addToCart`, `getCart`, `removeProductFromCart`, `clearCart`*
    -   **categories** - *handling categories data, contains logic for `addCategory` and `getAll` categories of every type.*
    -   **featured** - *handling featured data, contains logic `getFeaturedProducts`, `markAsFeatured`, `removeFromFeatured`*
    -   **images** - *handling image uploads to Cloudinary. Contains logic `uploadCoverImage`*
    -   **order** - *handling order data, contains logic `createOrder`, `getOrderById`, `getOrders`, `updateOrderStatus`, `deleteOrder`*
    -   **stationery** - *handling stationery data, contains logic `createStationery`, `getStationeries`, `updateStationery`, `deleteStationery`*
    -   **textbook** - *handling textbook data, contains logic `createTextbook`, `getTextbooks`, `updateTextbook`, `deleteTextbook`*
    -   **stripe** - *handling payment data, contains logic `checkoutSession`*
    -   **user** - *handling user data, contains logic `getUsers`, `getUserByIdFromToken`, `getUserById`, `updateUser`, `deleteUser`*
    -   **wishlist(todo)** - *handling wishlist data, contains logic `createWishlist`, `getWishlist`, `updateWishlist`, `deleteWishlist`*

-   #### 🙋‍♀️ Services

    -   **user** - *Authentication (register, login, logout)*
    -   **jwt** - *creating and verifying tokens*
    -   **image** - *uploading image to `Cloudinary`*

-   #### ⌨️ Middlewares

    -   **cors** - *cors setup for the express server*
    -   **filters** - *to be updated (todo), contains logic for catalog filters and sorting*
    -   **guards** - *isUser, isAdmin, isGuest - checks if user is authenticated and roles*
    -   **multer** - *for file upload*
    -   **session** - *validates the session. If token is present, sets the user in the request object*
    -   **validateRequest** - *validates the requests*

-   #### 🧮 Utils

    -   **getCategoryModel(categoryType)** - *returns the category model based on the category type.*
    -   **cloudinaryConfig()** - *returns the configuration for `Cloudinary`.*
    -   **errorHandler(error, res)** - *handles errors in the server.*
    -   **parseError(error)** - *takes in an `error` object and returns a new error object with a consistent structure. It is designed to handle different types of errors that can occur in an application.*

## 🚀 FUTURE Development:

1. Update the featured logic based on model and integrate it with admin panel
1. Research and integrate `Speedy` and `Econt` APIs for delivery
1. Research and integrate location API of some sort for smooth user experience
1. Create pages mentioned in the footer common questions about etc
1. Maybe add blog articles functionality
1. Implement vouchers and promotions discounts etc.
1. Implement testing unit with `ViTest`, `Playwright`. Discuss coverage
1. Create search logic
1. Research and implement forgotten password logic
1. Decide on how much material ui components will be used (performance issues)
1. Redesign/discuss business logic for buy now button and authentication

## 📐Fixes and updates:

-   [ ] fix issues with session expire and users
-   [x] fix issues with cookies token for admins validation
-   [x] fix server duplicate code - replace with already created utils
-   [x] fix css warnings (low priority)
-   [ ] fix issues with catalog items hover buttons
-   [x] fix issues with Menu component from Material UI for anchorEl property
-   [x] update cart logic and think about state management issues for items and quantity
-   [x] update carousels functionality buttons etc
-   [x] update theme and reuseable code for scss and maybe react
-   [ ] implement filters for Catalog Page
-   [x] update logic for checkout page
-   [ ] add property `productType` to each type of products
