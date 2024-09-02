import axios from 'axios';

export const fetchData = async (page, limit) => {
  const response = await axios.get('/api/public/enquiryData', {
    params: {
      page: page,
      limit: limit,
    },
  });

  return response.data;
};
