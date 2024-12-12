# Price Comparison Platform

This repository hosts the code for the final project in Advanced Software Design (DAS) at Universidad Blas Pascal. The project involves developing a price comparison platform to be integrated into the National Institute of Statistics and Census (INDEC) portal. This application allows users to compare prices for essential goods across various supermarkets, helping users make informed purchasing decisions.

## Project Overview

The price comparison platform allows users to:
- Browse categories of products from the basic basket.
- Select products and add them to a virtual shopping cart.
- Specify their province and locality to filter available supermarkets.
- Compare prices of selected products across supermarkets and view a comparison table highlighting the supermarket with the most affordable prices.

Additionally, users can view the locations of each supermarket's branches within their selected locality.

## Key Features

- **Daily Price Updates**: Supermarkets submit updated prices each day, ensuring users access the latest pricing information.
- **Virtual Shopping Cart**: Users can add or remove products from their cart before comparing prices.
- **Comparison Table**: The platform provides a table displaying price comparisons and highlights the supermarket offering the lowest prices.
- **Location Search**: Users can locate nearby supermarket branches based on their selected province and locality.
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

## Usage

1. Clone this repository.
2. Follow the instructions in the `docs/setup.md` for environment setup.
3. Run the application locally or on your server.

## Contributors

- Project developed by students at Universidad Blas Pascal.