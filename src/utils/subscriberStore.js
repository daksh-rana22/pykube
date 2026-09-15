// Hybrid Client Store: Performs immediate local updates and syncs with backend API
import {
  subscribeNewsletterApi,
  fetchSubscribersApi,
  addSubscriberApi,
  deleteSubscriberApi,
  toggleSubscriberStatusApi,
  sendBroadcastApi,
  fetchBroadcastHistoryApi,
} from '../api/client';

const SUBSCRIBERS_KEY = 'pykube_subscribers';
const BROADCAST_HISTORY_KEY = 'pykube_broadcast_history';
const ADMIN_PASSCODE_KEY = 'pykube_admin_passcode';

const DEFAULT_SUBSCRIBERS = [
  { id: '1', email: 'alex.morgan@gmail.com', name: 'Alex Morgan', status: 'Active', subscribedAt: '2026-07-15T10:30:00Z', source: 'Footer Newsletter' },
  { id: '2', email: 'david.chen@techcorp.io', name: 'David Chen', status: 'Active', subscribedAt: '2026-07-20T14:15:00Z', source: 'Program Details Page' },
  { id: '3', email: 'samantha.w@yahoo.com', name: 'Samantha White', status: 'Active', subscribedAt: '2026-07-28T09:45:00Z', source: 'Contact Us Form' },
  { id: '4', email: 'robert.taylor@outlook.com', name: 'Robert Taylor', status: 'Active', subscribedAt: '2026-08-01T16:20:00Z', source: 'Interview Hub' },
  { id: '5', email: 'emily.johnson@devmail.org', name: 'Emily Johnson', status: 'Active', subscribedAt: '2026-08-05T11:10:00Z', source: 'Footer Newsletter' },
];

const DEFAULT_BROADCAST_LOGS = [
  {
    id: 'b-101',
    subject: '🚀 Welcome to PyKube Tech Newsletter!',
    sender: 'PyKube Admissions Team',
    recipientsCount: 5,
    sentAt: '2026-08-02T14:00:00Z',
    status: 'Completed',
    hasImage: true,
    message: 'Thank you for subscribing to PyKube. Stay tuned for expert career tips, bootcamp discounts, and tech roadmaps!',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
  }
];

export const getSubscribers = () => {
  try {
    const data = localStorage.getItem(SUBSCRIBERS_KEY);
    if (!data) {
      localStorage.setItem(SUBSCRIBERS_KEY, JSON.stringify(DEFAULT_SUBSCRIBERS));
      return DEFAULT_SUBSCRIBERS;
    }
    return JSON.parse(data);
  } catch (err) {
    return DEFAULT_SUBSCRIBERS;
  }
};

export const syncSubscribersFromApi = async () => {
  const res = await fetchSubscribersApi('All');
  if (res && res.success && Array.isArray(res.subscribers)) {
    localStorage.setItem(SUBSCRIBERS_KEY, JSON.stringify(res.subscribers));
    return res.subscribers;
  }
  return getSubscribers();
};

export const addSubscriber = async ({ email, name = '', source = 'Website Subscription' }) => {
  const cleanEmail = email.trim().toLowerCase();
  if (!cleanEmail) return { success: false, message: 'Email address is required.' };

  // 1. Try Backend API first
  const apiRes = await subscribeNewsletterApi({ email: cleanEmail, name, source });
  if (apiRes) {
    if (apiRes.success && apiRes.subscriber) {
      const current = getSubscribers();
      const existsIdx = current.findIndex(s => s.email.toLowerCase() === cleanEmail);
      if (existsIdx >= 0) {
        current[existsIdx] = apiRes.subscriber;
      } else {
        current.unshift(apiRes.subscriber);
      }
      localStorage.setItem(SUBSCRIBERS_KEY, JSON.stringify(current));
    }
    return apiRes;
  }

  // 2. Fallback to LocalStorage
  const current = getSubscribers();
  const exists = current.find(s => s.email.toLowerCase() === cleanEmail);

  if (exists) {
    if (exists.status === 'Unsubscribed') {
      exists.status = 'Active';
      localStorage.setItem(SUBSCRIBERS_KEY, JSON.stringify(current));
      return { success: true, message: 'Subscribed back successfully!', subscriber: exists };
    }
    return { success: false, message: 'This email is already subscribed!' };
  }

  const newSub = {
    id: Date.now().toString(),
    email: cleanEmail,
    name: name.trim() || cleanEmail.split('@')[0],
    status: 'Active',
    subscribedAt: new Date().toISOString(),
    source,
  };

  const updated = [newSub, ...current];
  localStorage.setItem(SUBSCRIBERS_KEY, JSON.stringify(updated));
  return { success: true, message: 'Thank you for subscribing to PyKube!', subscriber: newSub };
};

export const removeSubscriber = async (idOrEmail) => {
  await deleteSubscriberApi(idOrEmail);
  const current = getSubscribers();
  const updated = current.filter(s => s.id !== idOrEmail && s.email.toLowerCase() !== idOrEmail.toLowerCase());
  localStorage.setItem(SUBSCRIBERS_KEY, JSON.stringify(updated));
  return updated;
};

export const toggleSubscriberStatus = async (id) => {
  await toggleSubscriberStatusApi(id);
  const current = getSubscribers();
  const updated = current.map(s => {
    if (s.id === id) {
      return { ...s, status: s.status === 'Active' ? 'Unsubscribed' : 'Active' };
    }
    return s;
  });
  localStorage.setItem(SUBSCRIBERS_KEY, JSON.stringify(updated));
  return updated;
};

export const getBroadcastHistory = () => {
  try {
    const data = localStorage.getItem(BROADCAST_HISTORY_KEY);
    if (!data) {
      localStorage.setItem(BROADCAST_HISTORY_KEY, JSON.stringify(DEFAULT_BROADCAST_LOGS));
      return DEFAULT_BROADCAST_LOGS;
    }
    return JSON.parse(data);
  } catch (err) {
    return DEFAULT_BROADCAST_LOGS;
  }
};

export const syncBroadcastHistoryFromApi = async () => {
  const res = await fetchBroadcastHistoryApi();
  if (res && res.success && Array.isArray(res.history)) {
    try {
      const sanitized = res.history.map(item => ({
        ...item,
        imageUrl: item.imageUrl && item.imageUrl.startsWith('data:image/') ? '' : item.imageUrl,
      }));
      localStorage.setItem(BROADCAST_HISTORY_KEY, JSON.stringify(sanitized));
    } catch (err) {
      console.warn('LocalStorage quota limit reached, keeping history in memory.');
    }
    return res.history;
  }
  return getBroadcastHistory();
};

export const saveBroadcastLog = (broadcastEntry) => {
  const history = getBroadcastHistory();
  const newEntry = {
    id: `b-${Date.now()}`,
    sentAt: new Date().toISOString(),
    status: 'Completed',
    ...broadcastEntry,
    // Do not store huge base64 strings in localStorage (they exceed browser 5MB limit)
    imageUrl: broadcastEntry.imageUrl && broadcastEntry.imageUrl.startsWith('data:image/') ? '' : (broadcastEntry.imageUrl || ''),
    hasImage: Boolean(broadcastEntry.imageUrl || broadcastEntry.hasImage),
  };
  const updated = [newEntry, ...history].slice(0, 30); // Keep latest 30 logs

  try {
    localStorage.setItem(BROADCAST_HISTORY_KEY, JSON.stringify(updated));
  } catch (err) {
    console.warn('LocalStorage quota exceeded. Trimming older logs.');
    try {
      // Fallback: Keep only 5 lightweight logs
      const trimmed = updated.slice(0, 5).map(l => ({ ...l, imageUrl: '', message: (l.message || '').substring(0, 100) }));
      localStorage.setItem(BROADCAST_HISTORY_KEY, JSON.stringify(trimmed));
    } catch (e) {
      // Ignore if still fails
    }
  }
  return updated;
};

export const getAdminPasscode = () => {
  return localStorage.getItem(ADMIN_PASSCODE_KEY) || 'admin123';
};

export const setAdminPasscode = (newCode) => {
  try {
    localStorage.setItem(ADMIN_PASSCODE_KEY, newCode);
  } catch (e) {
    // Ignore
  }
};

