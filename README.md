# AutoCraft: Auto Repair Store Inventory Management System

## Overview

AutoCraft is a comprehensive inventory management system designed for auto repair stores. It streamlines the management of parts, suppliers, purchase orders, sales orders, customers, inventory transactions, adjustments, and user roles. The system provides a user-friendly interface to efficiently handle various aspects of an auto repair store's operations.

## Features

- **User Management:**
  - Create, update, and delete user accounts.
  - Assign different roles to users (Mechanic, Supplier, Admin).

- **Inventory Management:**
  - Add, update, and remove parts from the inventory.
  - Track quantities, prices, and reorder thresholds for each part.
  - Perform inventory transactions (e.g., purchases, sales, adjustments).

- **Supplier Management:**
  - Manage information about suppliers.
  - Track contact details for easy communication.

- **Purchase Orders:**
  - Create purchase orders for parts.
  - Track expected delivery dates and costs.

- **Sales Orders:**
  - Generate sales orders for customers.
  - Monitor sales, customer details, and order statuses.

- **Customer Management:**
  - Maintain a database of customer information.
  - Track contact details and purchase history.

- **Reports & Analysis:**
  - Generate reports for inventory status, sales, and financial analysis.

## Getting Started

1. Clone the repository: `git clone https://github.com/your-username/AutoCraft.git`
2. Install dependencies: `npm install`
3. Configure the database connection in the `.env` file.
4. Run migrations: `npx prisma migrate dev`
5. Start the application: `npm start`

## Technologies Used

- Node.js
- Express.js
- Prisma ORM
- EJS (Embedded JavaScript) for views
- Bootstrap for styling


## Contribution

Contributions are welcome! If you find any issues or want to add new features, please open an issue or create a pull request.

