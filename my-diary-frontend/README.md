# MY DIARY Frontend README

## **Overview**
The frontend for the MY DIARY application is built using ReactJS. It provides an intuitive user interface for managing diary entries, including login, viewing a welcome page, listing all entries, adding new entries, and updating existing ones. The app interacts with the MY-DIARY-BACKEND (Java SpringBoot Service).

---

## **Features**
- **Login Screen**: Secure user authentication using JWT.
![alt text](<./src/assets/1.png>)
- **Welcome Page**: Personalized greeting after successful login.
![alt text](<./src/assets/2.png>)
- **Entries List**: Displays all diary entries in a user-friendly table format, along with delete entry functionality.
![alt text](<./src/assets/3.png>)
- **Add Entry**: Form to create new diary entries.
![alt text](<./src/assets/4.png>)
- **Update Entry**: Edit existing diary entries.
![alt text](<./src/assets/5.png>)

---

## **Technologies Used**
- **ReactJS**: Frontend framework.
- **Axios**: For API requests.
- **React Router**: For navigation between pages.
- **Bootstrap**: For styling components.
- **LocalStorage**: To store JWT tokens securely on the client-side.

---

## **Setup Instructions**

### Prerequisites
1. Node.js and npm (Node Package Manager) installed.
2. Backend API for MY DIARY running and accessible (default URL: `http://localhost:8080`).

### Steps to Run the Frontend
1. Clone the repository:
   ```bash
   git clone https://github.com/sundarmachani/My-Diary.git
   cd my-diary-ui
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to:
   ```
   http://localhost:5173/
   ```

---
## **Pages and Components**

### 1. **Login Screen**
- **Path**: `/` or`/login`
- Allows users to log in by entering their username and password.
- On successful login, stores the JWT token in localStorage and redirects to the welcome page.

### 2. **Welcome Page**
- **Path**: `/welcome/:username`
- Displays a personalized greeting message for the logged-in user.

### 3. **Entries List**
- **Path**: `/entries`
- Fetches and displays all diary entries from the backend using the `/get-all` endpoint.
- Includes options to edit or delete individual entries.

### 4. **Add Entry**
- **Path**: `/entry/:id`
- A form that allows users to add a new diary entry by calling the `/new-entry` endpoint.

### 5. **Update Entry**
- **Path**: `/entry/:id`
- A form pre-filled with data for an existing entry, allowing users to update it by calling the `/update-entry` endpoint.

---
## **Authentication Workflow**

1. User logs in via the login screen.
2. On successful authentication, a JWT token is received from the backend and stored in `localStorage`.
3. All subsequent requests include the token in the `Authorization` header for secure communication.
---
## **Styling**
You can use CSS frameworks like Bootstrap or Material-UI for styling components:
```bash
npm install bootstrap react-bootstrap
```

Include Bootstrap in your `index.js`:
```javascript
import 'bootstrap/dist/css/bootstrap.min.css';
```

---

## **Future Enhancements**
1. Add pagination or search functionality for entries list.
2. Enhance UI with animations or themes.
3. Implement user registration functionality.

---

## **Contact**
For any issues or inquiries, please contact [sundarmachani@gmail.com].