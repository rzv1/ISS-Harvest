# Harvest - Grocery Delivery & Freshness Management

Harvest is a modern web application for grocery delivery and intelligent fresh produce management (Freshness Deals & Inventory Management). The app provides an interactive mobile-first user experience embedded within a responsive smartphone frame (Phone Overlay).

---

## Table of Contents

- [About The Project](#about-the-project)
- [Key Features](#key-features)
  - [Customer Module](#customer-module)
  - [Store Manager Module](#store-manager-module)
  - [Responsive Phone Overlay UI](#responsive-phone-overlay-ui)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation and Setup](#installation-and-setup)
  - [Local Development Mode](#local-development-mode)
  - [Running with Docker Compose](#running-with-docker-compose)
- [Demo Credentials](#demo-credentials)
- [Testing and Documentation](#testing-and-documentation)

---

## About The Project

Harvest addresses food waste while enabling quick access to fresh grocery items. The application allows stores to sell food batches at progressive discounts as they approach their expiry date (Deals), giving customers a simple and intuitive way to order fresh products and track their savings.

---

## Key Features

### Customer Module
- **Product Catalog**: Browse fresh items with base pricing and dedicated images.
- **Freshness Deals**: Discounted products with progressive price drops and live expiry countdown timers.
- **Filtering & Sorting**: Sort deals by price, discount percentage, or remaining time.
- **Shopping Cart**: Add items, adjust quantities, calculate discounted totals automatically, and confirm orders.
- **Account Statistics & History**: Track total spending, savings realized through deals, and view complete order history.

### Store Manager Module
- **Add New Products**: Register new items with name, base price, image URL, and shelf-life (TTL).
- **Inventory Management**: Monitor active batches, track freshness status (Fresh / Expired), and remove depleted/expired batches.
- **Stock Replenishment**: Quickly restock batch inventory using preset batch sizes (5, 10, 15, 25 units).

### Responsive Phone Overlay UI
- **Smartphone Frame**: On desktop/tablet screens, the application is presented inside a sleek, centered smartphone frame dynamic to viewport height (`100dvh`) without external page scrollbars.
- **Integrated Navigation**: Navigation bars and toast notifications are contained within the phone viewport overlay.
- **Mobile Adaptability**: On physical mobile screens, the desktop frame hides automatically and the bottom navigation bar stays fixed to the bottom of the screen.

---

## Tech Stack

### Frontend
- **React 19** & **TypeScript**
- **Vite** (Build Tool & Dev Server)
- **Tailwind CSS v4** (Utility-first styling and responsive layout)
- **Lucide React** (Iconography)
- **React Router DOM v7** (Client-side routing)

### Backend
- **Node.js** & **Express v5**
- **TypeScript** & **TSOA** (Automated OpenAPI/Swagger spec and strongly typed routing)
- **Prisma ORM** with **SQLite (better-sqlite3)**
- **Swagger UI Express** (Interactive API documentation)

### Testing & Tooling
- **Vitest** & **Supertest** (Unit and integration testing)
- **TypeDoc** (Code documentation generator)
- **Madge** (Dependency graph visualizer and circular dependency checker)
- **Docker** & **Docker Compose** (Containerization)

---

## Project Structure

```
ISS-Harvest/
├── backend/                  # Express Backend Service + Prisma + TSOA
│   ├── prisma/               # Prisma schema & database seeds
│   ├── routes/               # TSOA controllers & generated routes
│   ├── tests/                # Vitest integration tests
│   ├── index.ts              # Server entry point
│   ├── tsoa.json             # TSOA configuration
│   └── package.json
├── frontend/                 # React + Vite Frontend Application
│   ├── src/
│   │   ├── components/       # Layouts, pages, and UI components
│   │   ├── context/          # React contexts (AuthContext, ServiceContext)
│   │   ├── models/           # DTOs and TypeScript interfaces
│   │   ├── repositories/     # API services and data repositories
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── index.html
│   └── package.json
├── docker-compose.yml        # Docker orchestration (Backend, Frontend, Nginx)
├── Dockerfile.backend        # Backend Docker container
├── Dockerfile.frontend       # Frontend Docker container
├── nginx.conf                # Reverse Proxy configuration
└── README.md
```

---

## Installation and Setup

### Local Development Mode

#### 1. Clone the repository
```bash
git clone https://github.com/rzv1/ISS-Harvest.git
cd ISS-Harvest
```

#### 2. Backend Setup and Execution
```bash
cd backend
npm install
npx prisma db push
npm run seed        # Seeds database with initial test data
npm run start       # Starts backend dev server ( default: http://localhost:3000 )
```

#### 3. Frontend Setup and Execution
Open a separate terminal window:
```bash
cd frontend
npm install
npm run dev         # Starts React dev server ( default: http://localhost:5173 )
```

---

### Running with Docker Compose

To launch the full stack (Backend, Frontend, and Nginx Reverse Proxy) in containerized mode:

```bash
docker-compose up --build
```

After startup:
- Web Application (Frontend via Nginx): `http://localhost` (or `http://localhost:8080`)
- Direct Backend API: `http://localhost:3000`

---

## Demo Credentials

You can use the following pre-configured credentials to test different user roles:

| Role | Username | Password | Accessible Views |
|---|---|---|---|
| **Customer** | `alex` | `pog` | Catalog, Freshness Deals, Cart, Order History |
| **Store Manager** | `john` | `pog` | Add Product, Inventory, Stock Replenishment |

---

## Testing and Documentation

### Run Backend Tests
```bash
cd backend
npm run test
```

### OpenAPI / Swagger Documentation
Swagger UI documentation is available at:
`http://localhost:3000/docs`

To regenerate TSOA routes and OpenAPI specs:
```bash
cd backend
npm run tsoa:gen
```

### Dependency Graph Generation (Madge)
```bash
cd frontend
npm run graph
```
