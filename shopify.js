const axios = require('axios');
require('dotenv').config();  

const apiKey = process.env.SHOPIFY_API_KEY;
const storeUrl = process.env.SHOPIFY_STORE_URL;

const fetchShopifyProducts = async () => {
  try {
    const response = await axios({
      method: 'get',
      url: `${storeUrl}/admin/api/2023-10/products.json`,
      headers: {
        'X-Shopify-Access-Token': apiKey, 
      },
    });

    console.log('Shopify Products:', response.data.products);
  } catch (error) {
    console.error('Error fetching products:', error.response ? error.response.data : error.message);
  }
};

fetchShopifyProducts();
