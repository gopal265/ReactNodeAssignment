const axios = require('axios');

// Get all users from an external API
exports.getUsers = async (req, res) => {
    try {
        const api = 'https://jsonplaceholder.typicode.com/users'; 
        const { data } = await axios.get(api);  // fetch the data from the external api

        // Extract and format relevant user data
        const formattedData = data.map(({ id, name, email, phone, website, company }) => ({
            id,
            name,
            email,
            phone,
            website,
            company,
        }));
        // send a response with 200 which is success  along with the formated data to the client.
        res.status(200).json({
            success: true,
            data: formattedData,
            message: 'Users fetched successfully',
        });
    } catch (error) {
        // if any error occur this code will run and we send  a response with status code 500 and an error message.
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data from the API' });
    }
};

// Get a single user by their ID from an external API
exports.getSingleUser = async (req, res) => {
    try {
        const api = 'https://jsonplaceholder.typicode.com/users';
        const { data } = await axios.get(api);
        const { id } = req.params;

        // Filter the user based on the provided ID
        const user = data.find((user) => user.id == id);

        // check if user is present if not we return 404 status which is notfound with error message
        if (!user) {
            return res.status(404).json({
                message: 'User not found',
                success: false,
            });
        }
        // if user is present we send user data with 200 status code.
        res.status(200).json({
            message: 'User fetched successfully',
            data: user,
            success: true,
        });
    } catch (error) {
        // code to run if error occurs in the try block 
        console.error('Error fetching data:', error);
        res.status(500).json({
            message: 'Unable to fetch the data',
            error,
        });
    }
};
