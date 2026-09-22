# SauceDemo Core End-User Operations Test Plan

## Application Overview

Test plan for the five core operations observed on https://www.saucedemo.com: signing in, browsing and selecting products, managing the cart, completing checkout, and logging out.

## Test Scenarios

### 1. Core end-user shopping operations

**Seed:** ``

#### 1.1. User signs in with valid demo credentials

**File:** `tests/saucedemo-core/login.spec.ts`

**Steps:**
  1. Navigate to https://www.saucedemo.com and enter standard_user in Username and secret_sauce in Password.
    - expect: The login form accepts both values.
  2. Click Login.
    - expect: The user is taken to /inventory.html.
    - expect: The Products page displays the catalog and a Cart control showing zero items.

#### 1.2. User browses, sorts, views, and selects a product

**File:** `tests/saucedemo-core/browse-and-select-product.spec.ts`

**Steps:**
  1. Sign in as standard_user with password secret_sauce.
    - expect: The six-product catalog is visible with product names, descriptions, prices, and Add to cart controls.
  2. Change Sort products to Price (low to high).
    - expect: Products are reordered from the lowest displayed price ($7.99) to the highest displayed price ($49.99).
  3. Open the Sauce Labs Backpack product details, verify its name, description, and $29.99 price, then add it to the cart.
    - expect: The product detail view shows the selected product information.
    - expect: The cart indicator changes to 1 item.

#### 1.3. User reviews and manages the shopping cart

**File:** `tests/saucedemo-core/manage-cart.spec.ts`

**Steps:**
  1. Sign in, add Sauce Labs Backpack and Sauce Labs Bike Light, and open Cart.
    - expect: The cart page lists both selected products with quantity, descriptions, prices, and Remove controls.
    - expect: The cart indicator shows 2 items.
  2. Remove Sauce Labs Bike Light.
    - expect: The bike light is removed from the cart.
    - expect: Only Sauce Labs Backpack remains and the cart indicator shows 1 item.
  3. Click Continue Shopping.
    - expect: The user returns to the Products page with the remaining cart state preserved.

#### 1.4. User completes checkout and receives order confirmation

**File:** `tests/saucedemo-core/complete-checkout.spec.ts`

**Steps:**
  1. Sign in, add Sauce Labs Backpack, open Cart, and click Checkout.
    - expect: The Checkout: Your Information form displays First Name, Last Name, and Zip/Postal Code fields.
  2. Enter Ada, Lovelace, and 12345, then click Continue.
    - expect: The Checkout: Overview page shows the selected item, SauceCard #31337 payment information, Free Pony Express Delivery, item total $29.99, tax $2.40, and total $32.39.
  3. Click Finish.
    - expect: The Checkout: Complete page shows Thank you for your order! and the dispatch message.
    - expect: The cart is empty.

#### 1.5. User logs out and is returned to the login page

**File:** `tests/saucedemo-core/logout.spec.ts`

**Steps:**
  1. Sign in with standard_user and secret_sauce, open the side menu, and click Logout.
    - expect: The session ends and the user is returned to the Swag Labs login page.
    - expect: Username and Password fields and the Login button are visible.
    - expect: Authenticated catalog content is no longer displayed.
