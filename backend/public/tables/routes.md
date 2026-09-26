Back-end routes available:

| Method | Route | Description | Auth Required |
|:---|:---|:---|:---|
| **Users** | | | |
| GET | /users | Returns all users from DB | No |
| GET | /users/:id | Returns user with given id | No |
| POST | /users | Creates a new user | No |
| POST | /users/login | Checks login credentials | No |
| PATCH | /users/:id | Updates user with given id | No |
| DELETE | /users/:id | Deletes user with given id | No |
| **Products** | | | |
| GET | /products | Returns all products from DB | No |
| GET | /products/:id | Returns product with given id | No |
| POST | /products | Creates a new product | No |
| PATCH | /products/:id | Updates product with given id | No |
| DELETE | /products/:id | Deletes product with given id | No |
| **Batches** | | | |
| GET | /batches | Returns all batches from DB | No |
| GET | /batches/deals | Returns all batch deals with calculated discounts | No |
| GET | /batches/:id | Returns batch with given id | No |
| GET | /batches/product/:id | Returns batches for given product id | No |
| POST | /batches | Creates a new batch | No |
| PATCH | /batches/:id | Updates batch quantity with given id | No |
| DELETE | /batches/:id | Deletes batch with given id | No |
| **Cart Items** | | | |
| GET | /cartItems | Returns all cart items from DB | No |
| GET | /cartItems/:id | Returns cart item with given id | No |
| GET | /cartItems/users/:id | Returns cart items for given user id | No |
| POST | /cartItems | Creates a new cart item | No |
| PATCH | /cartItems/:id | Updates quantity of cart item with given id | No |
| DELETE | /cartItems/:id | Deletes cart item with given id | No |
| **Orders** | | | |
| GET | /orders | Returns all orders from DB | No |
| GET | /orders/users/:id | Returns orders for given user id | No |
| GET | /orders/:id | Returns order with given id | No |
| POST | /orders | Creates a new order | No |
| PATCH | /orders/:id | Updates order with given id | No |
| DELETE | /orders/:id | Deletes order with given id | No |
| **Order Items** | | | |
| GET | /orderItems | Returns all order items from DB | No |
| GET | /orderItems/:id | Returns order items for given order id | No |
| POST | /orderItems | Creates a new order item | No |
| PATCH | /orderItems/:id | Updates order item with given id | No |
| DELETE | /orderItems/:id | Deletes order item with given id | No |