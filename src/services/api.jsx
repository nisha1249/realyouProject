export const apiUrl = 'https://shashankpathe.pythonanywhere.com/api';

// export const getProducts = async (id) => {
//   try{
//   const response = await fetch(`${apiUrl}/categories/${id}/products/`);
//   const data = await response.json();
//   return data;
// } catch (error) {
//   console.error('Error fetching productlist:', error);
//   return null;
// }
// };

export const fetchProduct = async (id) => {
  try {
    const response = await fetch(`${apiUrl}/product_details/${id}/`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
};

export const getCategories = async () => {
  try {
    const response = await fetch(`${apiUrl}/product_Categories`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
};

export const addToCart = async (productId, quantity) => {
  const response = await fetch(`${apiUrl}/cart`, {
    method: 'POST',
    body: JSON.stringify({ productId, quantity }),
    headers: { 'Content-Type': 'application/json' }
  });
  const data = await response.json();
  return data;

};

export const checkout = async (order) => {
  const response = await fetch(`${apiUrl}/checkout`, {
    method: 'POST',
    body: JSON.stringify(order),
    headers: { 'Content-Type': 'application/json' }
  });
  const data = await response.json();
  return data;
};
