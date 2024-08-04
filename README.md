# E-commerce bookstore full stack project

### Technologies used

#### Front-end:

-   React
-   Redux
-   TypeScript
-   Material UI
-   SCSS
-   React Router
-   React Admin
-   React Slick
-   React Hook Form
-   FilePond
-   Zustand (state managment)
-   Axios
-   SASS

#### Back-end:

-   Node
-   Express
-   MongoDB
-   Mongoose
-   Typescript
-   JWT
-   Express-Mongoose-RA-JSON-Server
-   Axios

#### Tools:

-   Vite
-   ESLint
-   Prettier
-   Yarn

### Fixes and updates:

-   fix issues with session expire and users
-   fix issues with cookies token for admins validation
-   fix server duplicate code replace with already created utils
-   create filters for catalog Pages
-   fix css warnings (low priority)
-   create logic for checkout page
-   update cart logic and think about state management issues for items and quantity
-   redesign discuss business logic for buy now button
-   maybe add property for product type to each model schema of items/products
-   refactor theme and reuseable code for scss and maybe react
-   decide on how much you want to use material ui (performance issues)
-   updated carousels functionality buttons etc
-   fix catalog hover buttons issues and functionality

### FUTURE Development:

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
9. Maybe add blog articles
10. Implement vouchers and promotions discounts etc. Discuss the business logic with the client
11. Implement testing unit with JEST, end-to-end Playwright. Discuss coverage
12. Create search logic
13. Header nav bar update is needed
14. Implement newsletter logic
15. Research and implement forgotten password logic


### Folder Structure
```
e-books/
├── client/
│   ├── public/
│   │   └── ...                 # Other public assets
│   ├── src/
│   │   ├── assets/             # Static assets like images, fonts, etc.
│   │   ├── components/         # Reusable UI components
│   │   │   ├── Cards/
│   │   │   ├── Carousels/
│   │   │   ├── Footer/
│   │   │   ├── Header/
│   │   │   ├── Layout/
│   │   │   ├── Logo/
│   │   │   └── utils/
│   │   ├── hooks/              # Custom hooks
│   │   ├── middlewares/        # Client-side middlewares (if any)
│   │   ├── pages/              # Pages corresponding to routes
│   │   │   ├── About/
│   │   │   ├── Books/
│   │   │   ├── Cart/
│   │   │   ├── Checkout/
│   │   │   ├── Contacts/
│   │   │   ├── Details/
│   │   │   ├── Faq/
│   │   │   ├── Home/
│   │   │   ├── Login/
│   │   │   ├── Orders/
│   │   │   ├── Popular/
│   │   │   ├── ReactAdmin/
│   │   │   ├── Register/
│   │   │   ├── Stationery/
│   │   │   └── Textbooks/
│   │   ├── services/           # API services
│   │   ├── store/              # Zustand store
│   │   ├── styles/             # Global and base styles
│   │   │   ├── base/
│   │   │   ├── elements/
│   │   │   ├── layout/
│   │   │   ├── index.scss
│   │   │   └── responsive.scss
│   │   ├── utils/              # Utility functions
│   │   │   ├── constants/
│   │   │   └── helpers/
│   │   ├── tests/              # Unit and integration tests
│   │   │   ├── components/
│   │   │   ├── pages/
│   │   │   └── services/
│   │   ├── App.tsx             # Main App component
│   │   ├── main.tsx            # Entry point
│   │   └── vite-env.d.ts       # Route definitions
│   ├── .env
│   ├── .eslintrc.cjs
│   ├── .gitignore
│   ├── categories.txt
│   ├── index.html          # Main HTML file
│   ├── package.json
│   ├── prettier.config.cjs
│   ├── tsconfig.app.json
│   ├── tsconfig.json
│   ├── tsconfig.node.json
│   ├── vite.config.js
│   └── yarn.lock
├── server/
│   ├── src/
│   │   ├── config/             # Configuration files
│   │   │   └── db.ts           # Database configuration
│   │   ├── constants/          # Application constants
│   │   ├── controllers/        # Route controllers
│   │   │   └── authController.ts # Example controller
│   │   ├── environments/       # Environment variables
│   │   ├── interfaces/         # TypeScript interfaces
│   │   ├── middlewares/        # Express middlewares
│   │   ├── models/             # Mongoose models
│   │   │   └── User.ts         # Example model
│   │   ├── routes/             # API routes
│   │   │   └── authRoutes.ts   # Example route
│   │   ├── services/           # Business logic (e.g., user service)
│   │   │   └── userService.ts  # Example service
│   │   └── utils/              # Utility functions (e.g., token generation)
│   ├── .env                    # Environment variables
│   ├── .gitignore
│   ├── prettier.config.cjs
│   ├── package.json
│   ├── server.ts               # Entry point for the server
│   ├── tsconfig.json
│   └── yarn.lock
├── .gitignore
├── Dockerfile
├── README.md
└── folder-structure.txt
```
