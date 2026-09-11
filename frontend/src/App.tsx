import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useState } from "react";
import { LoginPage } from "./components/pages/LoginPage.tsx";
import { CustomerLayout } from "./components/layouts/CustomerLayout.tsx";
import { ManagerLayout } from "./components/layouts/ManagerLayout.tsx";
import { CatalogPage } from "./components/pages/CatalogPage.tsx";
import { DealsPage } from "./components/pages/DealsPage.tsx";
import { CartPage } from "./components/pages/CartPage.tsx";
import { AccountPage } from "./components/pages/AccountPage.tsx";
import { InventoryPage } from "./components/pages/InventoryPage.tsx";
import { AddProductPage } from "./components/pages/AddProductPage.tsx";
import { StockPage } from "./components/pages/StockPage.tsx";
import { PhoneOverlay } from "./components/PhoneOverlay.tsx";

function App() {
  const [user, setUser] = useState({ loggedIn: false, role: '' });

  return (
    <Router>
      <PhoneOverlay>
        <Routes>
          <Route path="/login" element={<LoginPage onLoginSuccess={setUser} />} />
          {user.loggedIn && user.role === 'CUSTOMER' && (
            <Route path="/*" element={<CustomerLayout />}>
              <Route index element={<Navigate to="catalog" replace />} />
              <Route path="catalog" element={<CatalogPage />} />
              <Route path="deals" element={<DealsPage />} />
              <Route path="cart" element={<CartPage />} />
              <Route path="account" element={<AccountPage />} />
            </Route>
          )}
          {user.loggedIn && user.role === 'MANAGER' && (
            <Route path="/manager/*" element={<ManagerLayout />}>
              <Route index path="inventory" element={<InventoryPage />} />
              <Route path="add" element={<AddProductPage />} />
              <Route path="stock" element={<StockPage />} />
            </Route>
          )}
          {!user.loggedIn && <Route path="*" element={<Navigate to="/login" />} />}
        </Routes>
      </PhoneOverlay>
    </Router>
  )
}

export default App