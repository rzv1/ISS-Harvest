.
├── Dockerfile.backend
├── Dockerfile.frontend
├── README.md
├── backend
│   ├── generated
│   │   └── prisma
│   │       ├── browser.ts
│   │       ├── client.d.ts
│   │       ├── client.js
│   │       ├── client.ts
│   │       ├── commonInputTypes.ts
│   │       ├── default.d.ts
│   │       ├── default.js
│   │       ├── edge.d.ts
│   │       ├── edge.js
│   │       ├── enums.ts
│   │       ├── index-browser.js
│   │       ├── index.d.ts
│   │       ├── index.js
│   │       ├── internal
│   │       │   ├── class.ts
│   │       │   ├── prismaNamespace.ts
│   │       │   └── prismaNamespaceBrowser.ts
│   │       ├── models
│   │       │   ├── Batch.ts
│   │       │   ├── CartItem.ts
│   │       │   ├── Order.ts
│   │       │   ├── OrderItem.ts
│   │       │   ├── Product.ts
│   │       │   └── User.ts
│   │       ├── models.ts
│   │       ├── package.json
│   │       ├── query_compiler_fast_bg.js
│   │       ├── query_compiler_fast_bg.wasm
│   │       ├── query_compiler_fast_bg.wasm-base64.js
│   │       ├── runtime
│   │       │   ├── client.d.ts
│   │       │   ├── client.js
│   │       │   ├── index-browser.d.ts
│   │       │   ├── index-browser.js
│   │       │   └── wasm-compiler-edge.js
│   │       ├── schema.prisma
│   │       ├── wasm-edge-light-loader.mjs
│   │       └── wasm-worker-loader.mjs
│   ├── graph.png
│   ├── node_modules
│   │   ├── @prisma
│   │   │   ├── adapter-better-sqlite3 -> ../.pnpm/@prisma+adapter-better-sqlite3@7.10.0/node_modules/@prisma/adapter-better-sqlite3
│   │   │   └── client -> ../.pnpm/@prisma+client@7.10.0_prisma@7.10.0_@types+react@19.3.0_better-sqlite3@13.0.3_react-dom_d238f36fdd9e6932415582eb2f87cc5e/node_modules/@prisma/client
│   │   ├── @types
│   │   │   ├── cors -> ../.pnpm/@types+cors@2.8.19/node_modules/@types/cors
│   │   │   ├── express -> ../.pnpm/@types+express@5.0.6/node_modules/@types/express
│   │   │   ├── node -> ../.pnpm/@types+node@22.20.2/node_modules/@types/node
│   │   │   ├── supertest -> ../.pnpm/@types+supertest@6.0.3/node_modules/@types/supertest
│   │   │   ├── swagger-jsdoc -> ../.pnpm/@types+swagger-jsdoc@6.0.4/node_modules/@types/swagger-jsdoc
│   │   │   └── swagger-ui-express -> ../.pnpm/@types+swagger-ui-express@4.1.8/node_modules/@types/swagger-ui-express
│   │   ├── better-sqlite3 -> .pnpm/better-sqlite3@13.0.3/node_modules/better-sqlite3
│   │   ├── cors -> .pnpm/cors@2.8.6/node_modules/cors
│   │   ├── dotenv -> .pnpm/dotenv@17.4.2/node_modules/dotenv
│   │   ├── express -> .pnpm/express@5.2.1_supports-color@7.2.0/node_modules/express
│   │   ├── madge -> .pnpm/madge@8.0.0_supports-color@7.2.0_typescript@5.9.3/node_modules/madge
│   │   ├── prisma -> .pnpm/prisma@7.10.0_@types+react@19.3.0_better-sqlite3@13.0.3_react-dom@19.3.0_react@19.3.0__react@19.3.0_typescript@5.9.3/node_modules/prisma
│   │   ├── supertest -> .pnpm/supertest@7.2.2_supports-color@7.2.0/node_modules/supertest
│   │   ├── swagger-jsdoc -> .pnpm/swagger-jsdoc@6.3.0_openapi-types@12.1.3/node_modules/swagger-jsdoc
│   │   ├── swagger-ui-express -> .pnpm/swagger-ui-express@5.0.1_express@5.2.1_supports-color@7.2.0_/node_modules/swagger-ui-express
│   │   ├── tsoa -> .pnpm/tsoa@7.0.0-alpha.0_supports-color@7.2.0/node_modules/tsoa
│   │   ├── tsx -> .pnpm/tsx@4.23.13/node_modules/tsx
│   │   ├── typedoc -> .pnpm/typedoc@0.28.20_typescript@5.9.3/node_modules/typedoc
│   │   └── vitest -> .pnpm/vitest@3.2.7_@types+node@22.20.2_jiti@2.7.0_supports-color@7.2.0_tsx@4.23.13_yaml@2.9.1/node_modules/vitest
│   ├── package.json
│   ├── pnpm-lock.yaml
│   ├── pnpm-workspace.yaml
│   ├── prisma
│   │   ├── migrations
│   │   │   ├── 20260306130815_init_db
│   │   │   │   └── migration.sql
│   │   │   ├── 20260310083342_add_new_columns
│   │   │   │   └── migration.sql
│   │   │   ├── 20260310135336_add_cart_item_columns
│   │   │   │   └── migration.sql
│   │   │   └── migration_lock.toml
│   │   ├── schema.prisma
│   │   └── seed.ts
│   ├── prisma.config.ts
│   ├── public
│   │   ├── diagrams
│   │   │   ├── entities.mmd
│   │   │   └── sequence.mmd
│   │   └── tables
│   │       ├── routes.md
│   │       ├── scripts.md
│   │       └── tests.md
│   ├── src
│   │   ├── db
│   │   │   ├── db.ts
│   │   │   ├── dev.db
│   │   │   └── test.db
│   │   ├── index.ts
│   │   ├── routes
│   │   │   ├── generated
│   │   │   │   ├── routes.ts
│   │   │   │   └── swagger.json
│   │   │   ├── tsoa
│   │   │   │   ├── batchController.ts
│   │   │   │   ├── cartItemController.ts
│   │   │   │   ├── orderController.ts
│   │   │   │   ├── orderItemController.ts
│   │   │   │   ├── productController.ts
│   │   │   │   └── userController.ts
│   │   │   └── vanilla
│   │   │       ├── cartItems.ts
│   │   │       ├── orderItems.ts
│   │   │       ├── orders.ts
│   │   │       ├── products.ts
│   │   │       └── users.ts
│   │   ├── setup.ts
│   │   └── tests
│   │       ├── CreateUsers.http
│   │       ├── batches.test.ts
│   │       ├── cart.test.ts
│   │       ├── orders.test.ts
│   │       ├── products.test.ts
│   │       └── users.test.ts
│   ├── swagger.ts
│   ├── tsconfig.json
│   ├── tsoa.json
│   └── vitest.config.ts
├── docker-compose.yml
├── docs
│   ├── Faza1
│   │   ├── ClassDiagram.puml
│   │   ├── Prototype.pdf
│   │   ├── UseCaseDiagram.puml
│   │   ├── UseCases.docx
│   │   └── UseCases.pdf
│   ├── Faza2
│   │   └── SequenceDiagram.puml
│   ├── Faza3
│   │   └── SequenceDiagram.puml
│   └── Functionalitati_ISS.md
├── eslint.config.js
├── frontend
│   ├── docs
│   │   ├── assets
│   │   │   ├── hierarchy.js
│   │   │   ├── highlight.css
│   │   │   ├── icons.js
│   │   │   ├── icons.svg
│   │   │   ├── main.js
│   │   │   ├── navigation.js
│   │   │   ├── search.js
│   │   │   └── style.css
│   │   ├── classes
│   │   │   ├── context_ServiceContainer.ServiceContainer.html
│   │   │   ├── models_BatchItem.BatchItem.html
│   │   │   ├── models_CartItem.CartItem.html
│   │   │   ├── models_Order.Order.html
│   │   │   ├── models_OrderItem.OrderItem.html
│   │   │   ├── models_Product.Product.html
│   │   │   ├── models_User.User.html
│   │   │   ├── repositories_BatchItemRepo.BatchItemRepo.html
│   │   │   ├── repositories_CartItemRepo.CartItemRepo.html
│   │   │   ├── repositories_OrderRepo.OrderRepo.html
│   │   │   ├── repositories_ProductRepo.ProductRepo.html
│   │   │   ├── repositories_UserRepo.UserRepo.html
│   │   │   ├── services_AuthService.AuthService.html
│   │   │   ├── services_CartService.CartService.html
│   │   │   └── services_InventoryService.InventoryService.html
│   │   ├── functions
│   │   │   ├── App.default.html
│   │   │   ├── components_PhoneOverlay.PhoneOverlay.html
│   │   │   ├── components_layouts_CustomerLayout.CustomerLayout.html
│   │   │   ├── components_layouts_ManagerLayout.ManagerLayout.html
│   │   │   ├── components_misc_AccountCard.AccountCard.html
│   │   │   ├── components_misc_CartProduct.CartProduct.html
│   │   │   ├── components_misc_CatalogProduct.CatalogProduct.html
│   │   │   ├── components_misc_CustomerNavbar.CustomerNavbar.html
│   │   │   ├── components_misc_DealProduct.DealProduct.html
│   │   │   ├── components_misc_Header.Header.html
│   │   │   ├── components_misc_InventoryItem.InventoryItem.html
│   │   │   ├── components_misc_ManagerNavbar.ManagerNavbar.html
│   │   │   ├── components_misc_Notification.Notification.html
│   │   │   ├── components_misc_OrderItem.OrderItem.html
│   │   │   ├── components_misc_StatCard.StatCard.html
│   │   │   ├── components_misc_StockCard.StockCard.html
│   │   │   ├── components_pages_AccountPage.AccountPage.html
│   │   │   ├── components_pages_AddProductPage.AddProductPage.html
│   │   │   ├── components_pages_CartPage.CartPage.html
│   │   │   ├── components_pages_CatalogPage.CatalogPage.html
│   │   │   ├── components_pages_DealsPage.DealsPage.html
│   │   │   ├── components_pages_InventoryPage.InventoryPage.html
│   │   │   ├── components_pages_LoginPage.LoginPage.html
│   │   │   ├── components_pages_StockPage.StockPage.html
│   │   │   ├── context_AuthContext.AuthProvider.html
│   │   │   ├── context_AuthContext.useAuth.html
│   │   │   ├── context_ServiceContext.ServiceProvider.html
│   │   │   └── context_ServiceContext.useServices.html
│   │   ├── hierarchy.html
│   │   ├── index.html
│   │   ├── interfaces
│   │   │   ├── models_DealDTO.DealDTO.html
│   │   │   ├── models_InventoryDTO.InventoryDTO.html
│   │   │   ├── models_InventoryDTO.Item.html
│   │   │   ├── models_OrderDTO.OrderDTO.html
│   │   │   └── repositories_IRepo.IRepo.html
│   │   ├── modules
│   │   │   ├── App.html
│   │   │   ├── components_PhoneOverlay.html
│   │   │   ├── components_layouts_CustomerLayout.html
│   │   │   ├── components_layouts_ManagerLayout.html
│   │   │   ├── components_misc_AccountCard.html
│   │   │   ├── components_misc_CartProduct.html
│   │   │   ├── components_misc_CatalogProduct.html
│   │   │   ├── components_misc_CustomerNavbar.html
│   │   │   ├── components_misc_DealProduct.html
│   │   │   ├── components_misc_Header.html
│   │   │   ├── components_misc_InventoryItem.html
│   │   │   ├── components_misc_ManagerNavbar.html
│   │   │   ├── components_misc_Notification.html
│   │   │   ├── components_misc_OrderItem.html
│   │   │   ├── components_misc_StatCard.html
│   │   │   ├── components_misc_StockCard.html
│   │   │   ├── components_pages_AccountPage.html
│   │   │   ├── components_pages_AddProductPage.html
│   │   │   ├── components_pages_CartPage.html
│   │   │   ├── components_pages_CatalogPage.html
│   │   │   ├── components_pages_DealsPage.html
│   │   │   ├── components_pages_InventoryPage.html
│   │   │   ├── components_pages_LoginPage.html
│   │   │   ├── components_pages_StockPage.html
│   │   │   ├── context_AuthContext.html
│   │   │   ├── context_ServiceContainer.html
│   │   │   ├── context_ServiceContext.html
│   │   │   ├── main.html
│   │   │   ├── models_BatchItem.html
│   │   │   ├── models_CartItem.html
│   │   │   ├── models_DealDTO.html
│   │   │   ├── models_InventoryDTO.html
│   │   │   ├── models_Order.html
│   │   │   ├── models_OrderDTO.html
│   │   │   ├── models_OrderItem.html
│   │   │   ├── models_Product.html
│   │   │   ├── models_User.html
│   │   │   ├── repositories_BatchItemRepo.html
│   │   │   ├── repositories_CartItemRepo.html
│   │   │   ├── repositories_IRepo.html
│   │   │   ├── repositories_OrderRepo.html
│   │   │   ├── repositories_ProductRepo.html
│   │   │   ├── repositories_UserRepo.html
│   │   │   ├── services_AuthService.html
│   │   │   ├── services_CartService.html
│   │   │   └── services_InventoryService.html
│   │   ├── types
│   │   │   └── models_User.UserRole.html
│   │   └── variables
│   │       └── context_ServiceContainer.services.html
│   ├── graph.png
│   ├── index.html
│   ├── node_modules
│   │   ├── @eslint
│   │   │   └── js -> ../.pnpm/@eslint+js@9.39.5/node_modules/@eslint/js
│   │   ├── @tailwindcss
│   │   │   └── vite -> ../.pnpm/@tailwindcss+vite@4.3.3_vite@7.3.6_@types+node@24.13.4_jiti@2.7.0_lightningcss@1.32.0_t_0f99b0d7934ddbe0d2170908b54422ab/node_modules/@tailwindcss/vite
│   │   ├── @types
│   │   │   ├── node -> ../.pnpm/@types+node@24.13.4/node_modules/@types/node
│   │   │   ├── react -> ../.pnpm/@types+react@19.3.0/node_modules/@types/react
│   │   │   └── react-dom -> ../.pnpm/@types+react-dom@19.3.0_@types+react@19.3.0/node_modules/@types/react-dom
│   │   ├── @vitejs
│   │   │   └── plugin-react -> ../.pnpm/@vitejs+plugin-react@5.2.0_supports-color@7.2.0_vite@7.3.6_@types+node@24.13.4_jiti@2.7_086529f31656a2af359174f3d25ec461/node_modules/@vitejs/plugin-react
│   │   ├── dotenv -> .pnpm/dotenv@17.4.2/node_modules/dotenv
│   │   ├── eslint -> .pnpm/eslint@9.39.5_jiti@2.7.0_supports-color@7.2.0/node_modules/eslint
│   │   ├── eslint-plugin-react-hooks -> .pnpm/eslint-plugin-react-hooks@7.1.1_eslint@9.39.5_jiti@2.7.0_supports-color@7.2.0__supports-color@7.2.0/node_modules/eslint-plugin-react-hooks
│   │   ├── eslint-plugin-react-refresh -> .pnpm/eslint-plugin-react-refresh@0.4.26_eslint@9.39.5_jiti@2.7.0_supports-color@7.2.0_/node_modules/eslint-plugin-react-refresh
│   │   ├── globals -> .pnpm/globals@16.5.0/node_modules/globals
│   │   ├── lucide-react -> .pnpm/lucide-react@0.577.0_react@19.3.0/node_modules/lucide-react
│   │   ├── madge -> .pnpm/madge@8.0.0_supports-color@7.2.0_typescript@5.9.3/node_modules/madge
│   │   ├── prisma -> .pnpm/prisma@7.10.0_@types+react-dom@19.3.0_@types+react@19.3.0__@types+react@19.3.0_react-do_24a4c3a8de8679e230e202d6006d9219/node_modules/prisma
│   │   ├── react -> .pnpm/react@19.3.0/node_modules/react
│   │   ├── react-dom -> .pnpm/react-dom@19.3.0_react@19.3.0/node_modules/react-dom
│   │   ├── react-router-dom -> .pnpm/react-router-dom@7.18.4_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/react-router-dom
│   │   ├── tailwindcss -> .pnpm/tailwindcss@4.3.3/node_modules/tailwindcss
│   │   ├── tsx -> .pnpm/tsx@4.23.13/node_modules/tsx
│   │   ├── typedoc-plugin-mermaid -> .pnpm/typedoc-plugin-mermaid@1.12.0_typedoc@0.28.20_typescript@5.9.3_/node_modules/typedoc-plugin-mermaid
│   │   ├── typescript -> .pnpm/typescript@5.9.3/node_modules/typescript
│   │   ├── typescript-eslint -> .pnpm/typescript-eslint@8.70.0_eslint@9.39.5_jiti@2.7.0_supports-color@7.2.0__supports-color@7.2.0_typescript@5.9.3/node_modules/typescript-eslint
│   │   ├── vite -> .pnpm/vite@7.3.6_@types+node@24.13.4_jiti@2.7.0_lightningcss@1.32.0_terser@5.51.2_tsx@4.23.13_yaml@2.9.1/node_modules/vite
│   │   └── vite-plugin-pwa -> .pnpm/vite-plugin-pwa@1.3.0_supports-color@7.2.0_vite@7.3.6_@types+node@24.13.4_jiti@2.7.0_li_5283d7d0c5df5e6fb1a19af391d24f68/node_modules/vite-plugin-pwa
│   ├── package.json
│   ├── pnpm-lock.yaml
│   ├── pnpm-workspace.yaml
│   ├── public
│   │   ├── diagrams
│   │   │   ├── components.mmd
│   │   │   ├── context.mmd
│   │   │   └── router.mmd
│   │   ├── logo-192x192.png
│   │   ├── logo-512x512.png
│   │   ├── logo-harvest-removebg-preview.png
│   │   ├── logo-harvest.png
│   │   └── manifest.json
│   ├── src
│   │   ├── App.tsx
│   │   ├── components
│   │   │   ├── PhoneOverlay.tsx
│   │   │   ├── layouts
│   │   │   │   ├── CustomerLayout.tsx
│   │   │   │   └── ManagerLayout.tsx
│   │   │   ├── misc
│   │   │   │   ├── AccountCard.tsx
│   │   │   │   ├── CartProduct.tsx
│   │   │   │   ├── CatalogProduct.tsx
│   │   │   │   ├── CustomerNavbar.tsx
│   │   │   │   ├── DealProduct.tsx
│   │   │   │   ├── Header.tsx
│   │   │   │   ├── InventoryItem.tsx
│   │   │   │   ├── ManagerNavbar.tsx
│   │   │   │   ├── Notification.tsx
│   │   │   │   ├── OrderItem.tsx
│   │   │   │   ├── StatCard.tsx
│   │   │   │   └── StockCard.tsx
│   │   │   └── pages
│   │   │       ├── AccountPage.tsx
│   │   │       ├── AddProductPage.tsx
│   │   │       ├── CartPage.tsx
│   │   │       ├── CatalogPage.tsx
│   │   │       ├── DealsPage.tsx
│   │   │       ├── InventoryPage.tsx
│   │   │       ├── LoginPage.tsx
│   │   │       └── StockPage.tsx
│   │   ├── context
│   │   │   ├── AuthContext.tsx
│   │   │   ├── ServiceContainer.ts
│   │   │   └── ServiceContext.tsx
│   │   ├── index.css
│   │   ├── main.tsx
│   │   ├── models
│   │   │   ├── BatchItem.ts
│   │   │   ├── CartItem.ts
│   │   │   ├── DealDTO.ts
│   │   │   ├── InventoryDTO.ts
│   │   │   ├── Order.ts
│   │   │   ├── OrderDTO.ts
│   │   │   ├── OrderItem.ts
│   │   │   ├── Product.ts
│   │   │   └── User.ts
│   │   ├── repositories
│   │   │   ├── BatchItemRepo.ts
│   │   │   ├── CartItemRepo.ts
│   │   │   ├── IRepo.ts
│   │   │   ├── OrderRepo.ts
│   │   │   ├── ProductRepo.ts
│   │   │   └── UserRepo.ts
│   │   └── services
│   │       ├── AuthService.ts
│   │       ├── CartService.ts
│   │       └── InventoryService.ts
│   ├── tsconfig.app.json
│   ├── tsconfig.json
│   ├── tsconfig.node.json
│   ├── typedoc.json
│   └── vite.config.ts
└── nginx.conf