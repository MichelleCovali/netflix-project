## Backend Setup

### Requirements:

- Docker installed
- Switch to the `project-setup` branch and pull the latest changes

### Steps

1. Open VSCode or WebStorm in the `project-setup` branch.
2. Clone the repository into your selected folder.
3. Create a `.env` file in the root folder.
4. Add the following information to the `.env` file:

   ```
   # DO NOT include inequality signs

   POSTGRES_USER=admin
   POSTGRES_PASSWORD=password
   POSTGRES_HOST=localhost
   POSTGRES_DB=netflix
   POSTGRES_PORT=5432
   JWT_SECRET=secret
   MAILING_SERVICE_ADDRESS=nhlstenden.work@gmail.com
   MAILING_SERVICE_APP_PASSWORD=ieykdgjbgcitkdpr
   EMAIL_API_KEY=580b14682491403ba15bc31a29301966
   PORT=3000
   ```

5. Open a terminal in VSCode.
6. Run the following command to download all necessary packages:

   ```
   npm install
   ```

7. Build the project to create a `dist` folder, which is required for running the server:

   ```
   npm run build
   ```

8. Start the server using one of the following commands:

   ```
   npm start
   ```

   or

   ```
   npm run dev
   ```

9. If there are any dependency issues, manually uninstall and reinstall them with these commands:

   ```
   npm uninstall <package-name>
   ```

   ```
   npm install <package-name>
   ```

### Backend Necessary Information

1. All necessary requests can be found in the exported Postman file. Import it into your Postman environment and configure the environment variables to match your setup. Use real email addresses for testing. Passwords should follow these rules: at least one uppercase letter, one lowercase letter, one number, one special character, and at least six characters long. Alternatively, you can use "password" for easier testing.

2. Email validation uses a free-tier service that supports up to 100 requests. If the limit is exceeded, errors will occur. To bypass this during testing, navigate to `/src/utils/validators.ts` and comment out lines 11-24.

3. Real email addresses are required for sign-up, verification, password reset, and invitation functionality. Gmail allows approximately 300 emails daily, which should suffice.

4. Specific backend interactions follow defined workflows. For example:

  - **Account Creation**:
    - Register with an email via Postman.
    - Verify the account through the email link.
    - Use the verified account to access authenticated routes.

  - **User Invitations**:
    - Have a verified account with a `subscription_id` of `1`, `2`, or `3`.
    - Send an invitation email using the "Invite Sending" request.
    - Register the invited email and verify it.
    - Check the database under `account_subscription` to see a 2-euro discount reflected in the `price` column.

5. Password reset requires extracting the JWT token from the email link and using it in the "New Password Submit" request in Postman.

6. All test cases are provided in the Postman environment. Comments and descriptions in the test files clarify their purpose.

7. Headers are utilized for content negotiation. The API supports both JSON and XML responses. Adjust the `Accept` header in Postman to `application/xml` to receive XML responses. If no language header is specified, it defaults to English (`en`).

8. Uploaded images are stored in the `/dist/images/` folder. Images are named with a UNIX timestamp to prevent duplicates. If no image is submitted, the default is `default.jpeg`.

## Testing

Test files are located in `src/__test__/controller.user.test.ts`.

To run the tests, ensure there is an existing verified account in the database. Follow these steps:

1. Open `controller.user.test.ts` and update the `testEmail` variable at the top:

   ```
   const testEmail = 'your_verified_email@example.com';
   ```

2. Open a terminal in the project folder and execute:

   ```
   npm test
   
