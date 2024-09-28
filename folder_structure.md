# Folder structure

```
client/                                      server/
├── public/                                  ├── src/
│   └── ...                                  │   ├── config/
├── src/                                     │   ├── constants/
│   ├── assets/                              │   ├── controllers/
│   ├── components/                          │   ├── environments/
│   │   ├── Cards/                           │   ├── interfaces/
│   │   ├── Carousels/                       │   ├── middlewares/
│   │   ├── Categories/                      │   ├── models/
│   │   ├── Footer/                          │   ├── routes/
│   │   ├── Header/                          │   ├── services/
│   │   ├── InputFormField/                  │   ├── types/
│   │   ├── Layout/                          │   └── utils/
│   │   ├── Logo/                            ├── .env
│   │   ├── QuantityInput/                   ├── .gitignore
│   │   ├── ScrollTop/                       ├── package.json
│   │   ├── ShowCase/                        ├── prettier.config.cjs
│   │   └── utils/                           ├── server.ts
│   ├── hooks/                               ├── tsconfig.json
│   ├── interfaces/                          └── yarn.lock    
│   ├── middlewares/
│   ├── pages/
│   │   ├── About/
│   │   ├── Cart/
│   │   ├── Catalog/
│   │   ├── Checkout/
│   │   ├── Contacts/
│   │   ├── Details/
│   │   ├── Faq/
│   │   ├── Home/
│   │   ├── Login/
│   │   ├── Popular/
│   │   ├── ProfileSettings/
│   │   ├── ReactAdmin/
│   │   └── Register/
│   ├── services/           # API services
│   ├── store/              # Zustand store
│   ├── styles/             # Global and base styles
│   │   ├── base/
│   │   ├── elements/
│   │   ├── layout/
│   │   ├── index.scss
│   │   └── responsive.scss
│   ├── tests/              # Unit and integration tests
│   │   ├── components/
│   │   ├── pages/
│   │   └── services/
│   ├── utils/              # Utility functions
│   │   ├── constants/
│   │   └── helpers/
│   ├── App.tsx             # Main App component
│   ├── main.tsx            # Entry point
│   └── vite-env.d.ts       # Route definitions
├── .env
├── .eslintrc.cjs
├── .gitignore
├── index.html          # Main HTML file
├── package.json
├── prettier.config.cjs
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.js
└── yarn.lock
```