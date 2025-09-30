# Currency Converter 💰

A clean and responsive currency converter application built with HTML, CSS, and vanilla JavaScript. This tool allows users to get real-time currency exchange rates and convert amounts between a wide range of global currencies.


---

## ✨ Features

-   **Real-Time Exchange Rates**: Fetches the latest currency conversion rates from a reliable API.
-   **Extensive Currency List**: Supports a vast number of global currencies to choose from.
-   **Dynamic Flag Icons**: The flag of the selected country is automatically updated for a better user experience.
-   **Quick Swap**: A dedicated button allows users to instantly swap the "From" and "To" currencies.
-   **User-Friendly Interface**: A simple, intuitive, and fully responsive design that works on any device.
-   **Default Values**: Sets default currencies (USD to INR) and a default amount for immediate use.

---

## 🛠️ How It Works

This project leverages a free currency exchange rate API to provide real-time data.

1.  **API Integration**: The application makes an asynchronous `fetch` call to the **Currency API** (`@fawazahmed0/currency-api`) to get the latest exchange rates for the selected "From" currency.
2.  **Dynamic Dropdowns**: On page load, the JavaScript code dynamically populates the "From" and "To" dropdown menus with a list of available currency codes.
3.  **Flag Updates**: When a user changes the currency in either dropdown, the application fetches the corresponding country flag from the **Flags API** (`flagsapi.com`) and updates the UI.
4.  **Conversion Logic**:
    -   A user enters an amount and clicks the "Convert" button.
    -   An API call is made to get the conversion rates for the base currency.
    -   The specific rate for the target "To" currency is extracted from the JSON response.
    -   The final converted amount is calculated and displayed to the user.
5.  **Swap Functionality**: The swap button reverses the selected values of the "From" and "To" dropdowns and updates their respective flags.

---

## 🚀 Setup and Installation

This is a front-end-only project and requires no special server-side setup.

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/GauravSharma018/Currency-Converter
    cd currency-converter
    ```

2.  **Open in Browser**:
    Simply open the `index.html` file in your favorite web browser to run the application. No API key is required for the free API used in this project.

---

## 💻 Technologies Used

-   **HTML5**: For the structure and layout of the application.
-   **CSS3**: For all styling, including the layout, colors, and responsive design.
-   **Vanilla JavaScript**: For all application logic, including:
    -   Dynamic DOM manipulation.
    -   Handling user events (clicks, changes).
    -   Making asynchronous API calls with `fetch`.
 
      
## 📄 License

This project is open-source and available under the **MIT License**. See the `LICENSE` file for more details.
