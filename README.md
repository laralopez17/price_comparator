# Price Comparison Platform

This repository hosts the code for the final project in Advanced Software Design (DAS) at Universidad Blas Pascal. The project involves developing a price comparison platform to be integrated into the National Institute of Statistics and Census (INDEC) portal. This application allows users to compare prices for essential goods across various supermarkets, helping users make informed purchasing decisions.

## Project Overview

The price comparison platform allows users to:
- Browse categories of products from the basic basket.
- Select products and add them to a virtual shopping cart.
![Screenshot 2024-12-03 230532](https://github.com/user-attachments/assets/5ad33f98-a7c7-44d8-9d5f-fe17730a7906)
- Specify their province and locality to filter available supermarkets.
- Compare prices of selected products across supermarkets and view a comparison table highlighting the supermarket with the most affordable prices.
![Screenshot 2024-12-03 232616](https://github.com/user-attachments/assets/2c6c7ae9-f650-4689-bbe6-50e2db5b1e45)

Additionally, users can view the locations of each supermarket's branches within their selected locality.

## Key Features

- **Daily Price Updates**: Supermarkets submit updated prices each day, ensuring users access the latest pricing information.
- **Virtual Shopping Cart**: Users can add or remove products from their cart before comparing prices.
- **Comparison Table**: The platform provides a table displaying price comparisons and highlights the supermarket offering the lowest prices.
- **Location Search**: Users can locate nearby supermarket branches based on their selected province and locality.
![Screenshot 2024-12-03 232635](https://github.com/user-attachments/assets/ba7e9725-3734-46a4-842c-68cebdfd360c)
- **Internationalization**: Available in both Spanish and English.
- **Responsive Design**: Optimized for mobile and desktop devices.

## Technical Requirements

- **Backend**: Java, Spring Boot, ensuring scalability and maintainability.
- **Frontend**: Angular 18 framework for a dynamic and responsive user experience.
- **Database**: SQL Server 2019 or later.
- **Web Services**: Supports REST and SOAP, allowing flexible data integration with supermarket systems.
- **Security**: Data transmission between INDEC and supermarkets is secured via token-based authentication.

## Functional Requirements

1. **Publish Prices**: Supermarkets provide a daily list of product prices, specific to each branch.
2. **Branch Information**: Supermarkets publish details of their branches, including contact information, hours, and services.
3. **Product Browsing**: Users can explore products by categories.
4. **Add to Cart**: Users select products for comparison and add them to their virtual cart.
5. **Remove from Cart**: Users can remove items from their cart.
6. **Location Selection**: Users specify their location to filter relevant supermarket branches.
7. **Compare Prices**: The platform compares selected product prices across supermarkets.
8. **View Branch Locations**: Users can access branch locations in their selected locality.
9. **Daily Information Update**: System receives daily updates to maintain accuracy.

## Non-Functional Requirements

- **Responsiveness**: Adaptable UI for mobile and desktop.
- **Internationalization**: Available in Spanish and English.
- **Scalability**: Built to handle an increasing number of users and data volume.
- **Availability**: High availability to ensure consistent 24/7 access.
- **Performance**: Operations should complete within 15 seconds.
- **Security**: Robust data protection and secure token authentication.

#Usage

## Requirements

### Backend:
- **Java 11 or higher**.
- **Maven** for dependency management and execution.
- **SQL Server database** (one for INDEC and one for each supermarket).
- **API Keys** for accessing supermarket APIs.

### Frontend:
- **Node.js** (latest LTS version recommended).
- **Angular CLI** to run the application locally.
- **npm** for managing dependencies.

## Setup

### 1. Clone the repository

```bash
git clone https://github.com/laralopez17/price_comparator.git
cd price_comparator![Screenshot 2024-12-03 230532](https://github.com/user-attachments/assets/27c17f28-92fe-4cc5-bc0b-cb541801c5f8)

```

### 2. Database setup

You need to create 5 databases:
- **1 for INDEC**
- **4 for the supermarkets** (since all supermarket databases have the same tables)

Inside this repository, you'll find the scripts to create the tables for both INDEC and the supermarkets. Additional scripts are also available to execute the necessary procedures.

**Note:** You don't need to have data in the INDEC tables `sucursales` and `productos_sucursales` as they can be automatically populated using the batch processes.

### 3. Backend (Java)

#### Dependencies:

The backend is developed in **Java** and uses **Maven** for dependency management. To run the backend, you need to have **Maven** installed.

If you're running the project for the first time, run the following command to install the dependencies:

```bash
mvn install
```

#### Configuration in `application.properties`:

Inside the `src/main/resources/application.properties` file of each supermarket and INDEC, you will need to configure:

- **Database connection** (username, password and db name).
- **API Key** for the supermarkets (must be stored in the `servicios_supermercados` table).

Example configuration:

```properties
spring.application.name=Super4
spring.datasource.url=jdbc:sqlserver://localhost:1433;databaseName=super4;encrypt=false
server.port=8080
spring.datasource.username=xxxx
spring.datasource.password=xxxx
spring.datasource.driver-class-name=com.microsoft.sqlserver.jdbc.SQLServerDriver
api.security.key=xxxx
```

### 4. Frontend (Angular)

#### Install Dependencies:

Inside the `frontend` folder, run the following command to install the **Node.js** dependencies:

```bash
cd frontend
npm install
```

#### Running Locally:

To run the frontend in development mode, the INDEC APIs need to be running (the supermarket APIs are not required for frontend).

Depending on the language you want to run the application in, use one of these commands:

- For Spanish (on port 4200):
  ```bash
  npm run start-es
  ```

- For English (on port 4201):
  ```bash
  npm run start-en
  ```

### 5. Running Batch Processes

Batch processes should be executed before starting the frontend, as they fetch the branch and product price data.

- **EjecutarInformacion:** This process retrieves branch and product data.
- **EjecutarPrecios:** This process fetches product prices from supermarkets.

### 6. Using the Application

Once you have the databases configured and batch processes executed, you can access the frontend application and compare product prices.

#### To start the application, follow these steps:

1. Ensure the database is running with data in the necessary tables.
2. Run the batch processes (you can do this before starting the frontend).
3. Start the frontend using the appropriate commands for the language you're using.

## Contributors

- Project developed by students at Universidad Blas Pascal.
