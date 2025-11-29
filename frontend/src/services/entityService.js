const API_URL = 'http://localhost:5000/api/entity';
const getToken = () => localStorage.getItem('token');

export const fetchProfile = async () => {
  const res = await fetch(`${API_URL}/profile`, { headers: { Authorization: `Bearer ${getToken()}` } });
  return res.json();
};

export const updateProfileApi = async (data) => {
  const res = await fetch(`${API_URL}/profile`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${getToken()}` },
    body: JSON.stringify(data)
  });
  return res.json();
};

export const fetchEntities = async (search = '') => {
  const res = await fetch(`${API_URL}?search=${search}`, { headers: { Authorization: `Bearer ${getToken()}` } });
  return res.json();
};

export const createEntityApi = async (data) => {
  const res = await fetch(`${API_URL}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${getToken()}` },
    body: JSON.stringify(data)
  });
  return res.json();
};

export const updateEntityApi = async (id, data) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${getToken()}` },
    body: JSON.stringify(data)
  });
  return res.json();
};

export const deleteEntityApi = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${getToken()}` }
  });
  return res.json();
};
