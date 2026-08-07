// LocalStorage utility for managing website newsletter subscribers and email broadcast logs

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
    console.error('Failed to load subscribers from localStorage', err);
    return DEFAULT_SUBSCRIBERS;
  }
};

export const addSubscriber = ({ email, name = '', source = 'Website Subscription' }) => {
  const cleanEmail = email.trim().toLowerCase();
  if (!cleanEmail) return { success: false, message: 'Email address is required.' };

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

export const removeSubscriber = (idOrEmail) => {
  const current = getSubscribers();
  const updated = current.filter(s => s.id !== idOrEmail && s.email.toLowerCase() !== idOrEmail.toLowerCase());
  localStorage.setItem(SUBSCRIBERS_KEY, JSON.stringify(updated));
  return updated;
};

export const toggleSubscriberStatus = (id) => {
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

export const saveBroadcastLog = (broadcastEntry) => {
  const history = getBroadcastHistory();
  const newEntry = {
    id: `b-${Date.now()}`,
    sentAt: new Date().toISOString(),
    status: 'Completed',
    ...broadcastEntry,
  };
  const updated = [newEntry, ...history];
  localStorage.setItem(BROADCAST_HISTORY_KEY, JSON.stringify(updated));
  return updated;
};

export const getAdminPasscode = () => {
  return localStorage.getItem(ADMIN_PASSCODE_KEY) || 'admin123';
};

export const setAdminPasscode = (newCode) => {
  localStorage.setItem(ADMIN_PASSCODE_KEY, newCode);
};
