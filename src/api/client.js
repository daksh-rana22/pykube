/**
 * PyKube Unified API Client
 * Connects frontend components to the Node.js backend.
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const getAuthHeaders = () => {
  const token = sessionStorage.getItem('pykube_token');
  const isAuthed = sessionStorage.getItem('pykube_admin_authed');
  return {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...(isAuthed === 'true' ? { 'x-admin-authed': 'true' } : {}),
  };
};

// ── Auth APIs ──
export const loginApi = async (email, passcode) => {
  try {
    const res = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, passcode, password: passcode }),
    });
    return await res.json();
  } catch (err) {
    console.warn('API Offline, using local fallback:', err);
    return null; // Signals fallback to local logic
  }
};

export const verifySessionApi = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/auth/me`, {
      headers: getAuthHeaders(),
    });
    return await res.json();
  } catch (err) {
    return null;
  }
};

export const changePasscodeApi = async (currentPasscode, newPasscode) => {
  try {
    const res = await fetch(`${API_BASE_URL}/auth/change-passcode`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify({ currentPasscode, newPasscode }),
    });
    return await res.json();
  } catch (err) {
    return null;
  }
};

// ── Subscriber APIs ──
export const subscribeNewsletterApi = async ({ email, name = '', source = 'Website Subscription' }) => {
  try {
    const res = await fetch(`${API_BASE_URL}/subscribers/subscribe`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, name, source }),
    });
    return await res.json();
  } catch (err) {
    console.warn('API Offline, using local fallback:', err);
    return null;
  }
};

export const fetchSubscribersApi = async (status = 'All', search = '') => {
  try {
    const query = new URLSearchParams();
    if (status && status !== 'All') query.append('status', status);
    if (search) query.append('search', search);

    const res = await fetch(`${API_BASE_URL}/subscribers?${query.toString()}`, {
      headers: getAuthHeaders(),
    });
    return await res.json();
  } catch (err) {
    return null;
  }
};

export const addSubscriberApi = async ({ email, name = '', source = 'Admin Portal' }) => {
  try {
    const res = await fetch(`${API_BASE_URL}/subscribers/add`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify({ email, name, source }),
    });
    return await res.json();
  } catch (err) {
    return null;
  }
};

export const toggleSubscriberStatusApi = async (id) => {
  try {
    const res = await fetch(`${API_BASE_URL}/subscribers/${id}/status`, {
      method: 'PATCH',
      headers: getAuthHeaders(),
    });
    return await res.json();
  } catch (err) {
    return null;
  }
};

export const deleteSubscriberApi = async (id) => {
  try {
    const res = await fetch(`${API_BASE_URL}/subscribers/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders(),
    });
    return await res.json();
  } catch (err) {
    return null;
  }
};

// ── Email Broadcast APIs ──
export const sendBroadcastApi = async ({ subject, message, imageUrl, senderName, recipientFilter }) => {
  try {
    const res = await fetch(`${API_BASE_URL}/broadcast/send`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify({ subject, message, imageUrl, senderName, recipientFilter }),
    });
    return await res.json();
  } catch (err) {
    return null;
  }
};

export const fetchBroadcastHistoryApi = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/broadcast/history`, {
      headers: getAuthHeaders(),
    });
    return await res.json();
  } catch (err) {
    return null;
  }
};
