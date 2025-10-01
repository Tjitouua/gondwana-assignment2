To run the assignment in CodeSpace
1. Open two terminals  
2. In the first terminal run `npm install` then `npm run dev`  
3. Go to the `api` folder  
4. Run: `cd api` then `php -S 0.0.0.0:8000`  
5. The API works perfectly when run locally.
   However, due to external restrictions on the Gondwana API endpoint
    (`https://dev.gondwana-collection.com/Web-Store/Rates/Rates.php`),
    the API may not return data when run inside GitHub Codespaces.

To run the assignment locally
1. Clone the repo locally
2. Start the frontend with `npm install` and `npm run dev`
3. Run the backend from the `api/` folder using: `php -S localhost:8000`
