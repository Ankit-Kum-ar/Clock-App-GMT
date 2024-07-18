# Clock-App-GMT ⏰

This project is a React application built using Vite. It features an analog clock that runs anticlockwise and displays the time 120 minutes earlier than the current Indian Standard Time (IST). The application includes a slider to control the speed of the clock hands and a share button that generates a unique URL to share the current clock configuration. The project also implements authentication using Firebase and Google Auth, and uses Tailwind CSS and Redux Toolkit.

## Features ✨

- **Analog Clock**: Displays the current time 120 minutes earlier in an anticlockwise direction.
- **Speed Control**: A slider to control the speed of the clock hands.
- **Shareable URL**: Generates a unique URL to share the clock and slider configuration.
- **Authentication**: Implements authentication using Firebase and Google Auth.
- **Styling**: Uses Tailwind CSS for styling.
- **State Management**: Uses Redux Toolkit for state management.

## Technologies Used

- ⚛️ **React**: A JavaScript library for building user interfaces.
- 🚀 **Vite**: A build tool that aims to provide a faster and leaner development experience for modern web projects.
- 🎨 **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
- 📡 **Firebase**: A backend cloud computing service and application development platform provided by Google.
- 🛠️ **@reduxjs/toolkit**: A toolset for efficient Redux development.
- 🌐 **react-router-dom**: A library for routing in React applications.
- ⭐ **react-icons**: A library for including popular icons in your React project.

## Screenshots

### Login Page
#### Mobile View
![IMG_2218](https://github.com/user-attachments/assets/01bbb77d-7fbe-42c2-a3c0-2df407b964cc)
#### Laptop View
![Screenshot 2024-07-18 230811](https://github.com/user-attachments/assets/aaa012e3-1711-4dff-8106-6ddd4c42167c)


### Sign-Up Page
#### Mobile View
![IMG_2220](https://github.com/user-attachments/assets/6a1d3c88-5e09-446b-a39c-9adb1e29e8a8)
#### Laptop View
![Screenshot 2024-07-18 230958](https://github.com/user-attachments/assets/b244175c-0234-414f-9ceb-2a477cfe3b72)


### Browser Page
#### Mobile View
![IMG_2219](https://github.com/user-attachments/assets/3df2963c-eea9-4ef5-86fa-30715fd854a0)
#### Laptop View
![Screenshot 2024-07-18 231028](https://github.com/user-attachments/assets/7b03c00d-09e6-4970-a0e2-d1a7ddc1de51)


## Installation

To run this project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/Clock-App-GMT.git
    ```

2. Navigate to the project directory:
    ```bash
    cd Clock-App-GMT.git
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. **Configure Firebase**

    Create a Firebase project and set up authentication. Copy your Firebase configuration and paste it into a `.env` file in the root of your project:

    ```plaintext
    VITE_FIREBASE_API_KEY=your-api-key
    VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
    VITE_FIREBASE_PROJECT_ID=your-project-id
    VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
    VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
    VITE_FIREBASE_APP_ID=your-app-id
    ```

5. **Install Tailwind CSS**

    Install Tailwind CSS via npm:

    ```bash
    npm install -D tailwindcss
    npx tailwindcss init
    ```

    Configure your `tailwind.config.js` file:

    ```javascript
    module.exports = {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    ```

    Add Tailwind to your CSS file (`src/index.css`):

    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

6. **Run the Application**

    ```bash
    npm run dev
    ```

The application should now be running on `http://localhost:1234`.

## Usage 🚀

- **Analog Clock**: The clock displays the current time 120 minutes earlier in an anticlockwise direction.
- **Speed Slider**: Adjust the slider to control the speed of the clock hands.
- **Share Button**: Click the share button to copy a unique URL to the clipboard. This URL can be shared to allow others to view the clock and slider with the same configuration.
- **Authentication**: Sign in using Google authentication to access additional features.

## Project Structure (Rough) 📂

```plaintext
src/
├── components/
│   ├── AnalogClock.jsx
│   ├── SpeedSlider.jsx
│   └── ShareButton.jsx
├── App.jsx
├── main.jsx
└── index.css

 ```
## Contributing
Contributions are welcome! Please create an issue or submit a pull request if you have any suggestions or improvements.
