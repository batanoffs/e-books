<h1> E-commerce Bookstore "Knigi.bg" </h1>

[![License: MIT](https://img.shields.io/badge/Licence-MIT-teal)](https://opensource.org/licenses/MIT)
[![styled with: Prettier](https://img.shields.io/badge/styled_with-prettier-purple)](https://github.com/prettier/prettier)

The goal of this e-commerce full stack project is to design and implement a fully functional online bookstore connected to payment APIs, delivery service APIs, and cloud storage. The project also aims to provide a seamless user experience, with features such as filtering and sorting, purchase history, buying, a functional cart, and data management through the admin panel.

During development, I've learned a lot about:
- fully utilizing the features that the React Admin framework provides to build the admin panel
- how to integrate the Stripe Payments API
- how to store my data in a database and images to the cloud provider
- how to build a functional backend API and provide data to the client
- how to store tokens with cookies
- implementing guards to prevent unauthorized access
- manage state with Zustand
- implement ACID transactions with Mongoose and MongoDB for seamless data management
- configuring CORS for local development
- encryption methods (salting) and many more.

<details close>
  <summary>
    <h2> 📝 Table of Contents</h2>
  </summary>

- [🔬 Technologies used](#-technologies-used)
- [🎬 App Usage](#-app-usage)
- [🔧 Installation](#-installation)
- [💫 UX UI](#-ux-ui)
- [📁 Project content](#-project-content)
- [🎨 Design and Architecture](#-design-and-architecture)
  - [⚙️ **Front-end architecture**](#️-front-end-architecture)
  - [⚙️ **Back-end architecture**](#️-back-end-architecture)
- [🚀 FUTURE Development:](#-future-development)
- [📐Fixes and updates:](#fixes-and-updates)

</details>

## 🔬 Technologies used

| Department          | Technologies                                                                  |
| ------------------- | ----------------------------------------------------------------------------- |
| Frontend            | `React`, `TypeScript`                                                         |
| Server              | `Node`, `Express`, `Cors`, `Cookie-parser`, `Express-Mongoose-RA-JSON-Server` |
| UI                  | `Material UI`, `SASS`, `Slick-Carousel`, `React-Slick`, `FilePond`            |
| Forms               | `React Hook Form`                                                             |
| State management    | `Zustand`                                                                     |
| Admin panel manager | `React Admin`                                                                 |
| Database            | `MongoDB`, `Mongoose`                                                         |
| Encryption          | `Bcrypt`                                                                      |
| Authentication      | `JsonWebToken`                                                                |
| Handling requests   | `Axios`                                                                       |
| Tools               | `Git`, `Vite`, `ESLint`, `Prettier`, `Yarn`, `Nodemon`                        |

## 🎬 App Usage

Here are some examples of how to use this project:

- Register and login as a user
- Browse products in the catalog page
- Filter and sort the products (not fully implemented)
- Add and manage items to the cart
- Add or remove items to/from the wishlist
- Check each product details in the Details Page, where only authenticated users can add comments or add to wishlist.
- Manage application data from the admin panel only for admins
- Checkout your cart and pay
- Preview order

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

-   ### Login Register

-   ### About

-   ### Catalog

-   ### Product details

-   ### Cart

-   ### Wishlist

-   ### Checkout

-   ### Profile menu

-   ### Admin panel

## 🎨 Design and Architecture

Server built on `express` and `mongodb` with `mongoose`. Client built with `vite`, `react`, `typescript` and `sass`.

### ⚙️ **Front-end architecture**

-   #### 💾 Context Providers with `Zustand` Store

    -   **Alert Store** - a helper store that provides state if the alert is open or not and what is the alert message.

    -   **Cart Store** - stores and provides data for the cart of the authenticated user.

    -   **Categories Store** - stores and provides data for categories in the catalog.

    -   **Filter Store** - provides and stores data for the filter section in the catalog page (not yet implemented)

    -   **Modal Store** - a helper store that provides state if the modal is open or not

    -   **Location Store** - a helper store that provides state for `window.location.pathname` used for better UX and site navigation

    -   **User Data Store** - holds information about the currently authenticated user. It provides getters and setters for the user's data, including the user's username, whether the user is logged in, and whether the user is an admin.

    -   **Wishlist Store** - stores and provides data for the wishlist of the authenticated user.

-   #### 🎣 Custom Hooks

    -   **useConfirm()** is a hook that opens modal to ask the user for confirmation of his action.

-   #### 🛫 Routers

    -   Main Router is located in `App` component

-   #### 🧮 Utils

    -   Constants

        -   **api.ts** - stores base URL and endpoints to be used in all services
        -   **location.ts** - stores array of regions and countries to be used in the location dropdown

    -   Helpers

        -   **getToken()** - gets user token
        -   **getUserRole()** - gets user role
        -   **getUserId()** - gets user id
        -   **checkIfUserIsAdmin()** - checks if user is admin
        -   **isAuth()** - checks if user is authenticated
        -   **isGuest()** - checks if user is not authenticated
        -   **themeOptions** - provides theme options for the MUI theme
        -   **formatDate(date)** - formats the date
        -   **currencyFormatterToBGN(value)** - formats the value to BGN currency

-   #### 🙋‍♀️ Services

    -   **authService** for Authentication
    -   **cartService** for handling cart data
    -   **productService** for handling products data (todo)

### ⚙️ **Back-end architecture**

-   #### 🛠 Express config

    -   **express.ts** contains express middleware
    -   **database.ts** contains mongoose middleware
    -   **routes.ts** contains express routes

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

    | Route Type | Route Name           | Description                                                                                                                                                                                                                                                            |
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

    -   **auth** for authenticating the users. Contains logic for `login`, `register` and `logout`
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

-   #### 🙋‍♀️ Services

    -   **user** for Authentication (register, login, logout)
    -   **jwt** for creating and verifying tokens
    -   **image** for uploading image to `Cloudinary`

-   #### ⌨️ Middlewares

    -   **cors** for cors setup for the express server
    -   **filters** to be updated (todo), contains logic for catalog filters and sorting
    -   **guards** isUser, isAdmin, isGuest - checks if user is authenticated and roles
    -   **multer** for file upload
    -   **session** validates the session. If token is present, sets the user in the request object
    -   **validateRequest** validates the requests

-   #### 🧮 Utils

    -   **getCategoryModel(categoryType)**: This function returns the category model based on the category type.
    -   **cloudinaryConfig()**: This function returns the configuration for `Cloudinary`.
    -   **errorHandler(error, res)**: This function handles errors in the server.
    -   **parseError(error)**: This function takes in an `error` object and returns a new error object with a consistent structure. It is designed to handle different types of errors that can occur in an application.

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
