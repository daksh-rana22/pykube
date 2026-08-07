import React, { useState, useEffect } from 'react';
import {
  getSubscribers,
  addSubscriber,
  removeSubscriber,
  toggleSubscriberStatus,
  getBroadcastHistory,
  saveBroadcastLog,
  getAdminPasscode,
  setAdminPasscode,
} from '../utils/subscriberStore';
import HMSHeroBackground from '../components/HMSHeroBackground';
import '../styles/AdminBroadcastPage.css';
import {
  FiMail,
  FiUsers,
  FiSend,
  FiCheckCircle,
  FiLock,
  FiUnlock,
  FiPlus,
  FiTrash2,
  FiDownload,
  FiImage,
  FiEye,
  FiSearch,
  FiX,
  FiClock,
  FiZap,
} from 'react-icons/fi';

const PRESET_TEMPLATES = [
  {
    id: 'bootcamp-launch',
    title: '🚀 New Bootcamp Launch',
    subject: '🚀 Exciting News: New IT Training Bootcamp Batch Starts Soon!',
    message: `Hi {name},

We are thrilled to announce that PyKube Technologies is launching a brand new live online bootcamp batch for Job-Ready IT Training!

Key Highlights:
• Live Online Classes with US IT Industry Experts
• Hands-on Real Time Projects & Resume Building
• 100% Placement Assistance & Mock Client Interviews

Don't miss your chance to elevate your tech career in the USA.

Book your free consultation today!
Best regards,
PyKube Admissions Team`,
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80',
  },
  {
    id: 'scholarship-offer',
    title: '🎓 Scholarship & Discount Offer',
    subject: '🎓 Exclusive Offer: Up to 20% Off PyKube Bootcamps!',
    message: `Hi {name},

As a valued subscriber, we are offering an exclusive 20% early-bird discount on all Java, Python, QA Automation, and Data Science bootcamps!

Use code: PYKUBE2026 when registering.

Hurry, limited slots available for the upcoming cohort!

Warm regards,
PyKube Career Advisory`,
    imageUrl: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=900&q=80',
  },
  {
    id: 'monthly-newsletter',
    title: '📰 Monthly Tech Newsletter',
    subject: '📰 PyKube Monthly Insights: Top IT Hiring Trends in USA',
    message: `Hello {name},

Here is your monthly round-up of tech trends, top-demanded skills, and interview tips for 2026:

1. Data Engineering & PySpark demand grew by 35% in Q3.
2. Java Full-Stack developers remain the most sought-after roles across enterprise clients.
3. Check out our free Interview Preparation hub on PyKube!

Stay curious and keep learning!

Cheers,
PyKube Team`,
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=900&q=80',
  },
];

export default function AdminBroadcastPage() {
  // Theme Observer
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains('dark-theme'));

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark-theme'));
    };
    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('pykube_admin_authed') === 'true';
  });
  const [passcodeInput, setPasscodeInput] = useState('');
  const [passcodeError, setPasscodeError] = useState('');

  // Data States
  const [subscribers, setSubscribers] = useState([]);
  const [broadcastHistory, setBroadcastHistory] = useState([]);
  const [activeTab, setActiveTab] = useState('broadcast');

  // Broadcast Form State
  const [senderName, setSenderName] = useState('PyKube Technologies');
  const [replyTo, setReplyTo] = useState('hr@pykube.net');
  const [recipientFilter, setRecipientFilter] = useState('Active'); // 'All', 'Active'
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = React.useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith('image/')) {
        setImageFile(file);
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result);
          setImageUrl(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        alert('Please drop an image file (PNG, JPG, WEBP, GIF)');
      }
    }
  };

  // Sending Engine State
  const [isSending, setIsSending] = useState(false);
  const [sendProgress, setSendProgress] = useState(0);
  const [sendLogs, setSendLogs] = useState([]);

  // Subscribers Tab Search & Modal State
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [newSubEmail, setNewSubEmail] = useState('');
  const [newSubName, setNewSubName] = useState('');

  // View History Modal State
  const [selectedLog, setSelectedLog] = useState(null);

  // Toast notification
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    setSubscribers(getSubscribers());
    setBroadcastHistory(getBroadcastHistory());
  }, []);

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 4000);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const correctCode = getAdminPasscode();
    if (passcodeInput === correctCode) {
      setIsAuthenticated(true);
      sessionStorage.setItem('pykube_admin_authed', 'true');
      setPasscodeError('');
      triggerToast('Welcome to Admin Broadcast Portal!');
    } else {
      setPasscodeError('Invalid Passcode! Please try again.');
    }
  };

  const handleLock = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('pykube_admin_authed');
    setPasscodeInput('');
  };

  const handleApplyTemplate = (tpl) => {
    setSubject(tpl.subject);
    setMessage(tpl.message);
    if (tpl.imageUrl) {
      setImageUrl(tpl.imageUrl);
      setImagePreview(tpl.imageUrl);
    }
    triggerToast(`Loaded "${tpl.title}" template!`);
  };

  const handleImageFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImageFile(null);
    setImageUrl('');
    setImagePreview(null);
  };

  const targetSubscribers = subscribers.filter((s) => {
    if (recipientFilter === 'Active') return s.status === 'Active';
    return true;
  });

  const handleSendBroadcast = async (e) => {
    e.preventDefault();
    if (targetSubscribers.length === 0) {
      alert('No subscribers match your selection!');
      return;
    }
    if (!subject.trim() || !message.trim()) {
      alert('Please provide both subject and message content!');
      return;
    }

    setIsSending(true);
    setSendProgress(0);
    setSendLogs([]);

    const total = targetSubscribers.length;
    const logs = [];

    for (let i = 0; i < total; i++) {
      const sub = targetSubscribers[i];
      await new Promise((res) => setTimeout(res, 400)); // Smooth simulation delay
      const pct = Math.round(((i + 1) / total) * 100);
      setSendProgress(pct);
      logs.push(`[${new Date().toLocaleTimeString()}] Sent email to ${sub.email}`);
      setSendLogs([...logs]);
    }

    // Save history
    const newLog = {
      subject,
      sender: senderName,
      recipientsCount: total,
      message,
      imageUrl: imagePreview || imageUrl || '',
      hasImage: Boolean(imagePreview || imageUrl),
    };
    const updatedHistory = saveBroadcastLog(newLog);
    setBroadcastHistory(updatedHistory);

    setIsSending(false);
    triggerToast(`🎉 Broadcast sent successfully to ${total} subscribers!`);
  };

  const handleAddSubscriberSubmit = (e) => {
    e.preventDefault();
    const res = addSubscriber({ email: newSubEmail, name: newSubName, source: 'Admin Portal' });
    if (res.success) {
      setSubscribers(getSubscribers());
      setShowAddModal(false);
      setNewSubEmail('');
      setNewSubName('');
      triggerToast(res.message);
    } else {
      alert(res.message);
    }
  };

  const handleRemoveSub = (id) => {
    if (window.confirm('Are you sure you want to remove this subscriber?')) {
      const updated = removeSubscriber(id);
      setSubscribers(updated);
      triggerToast('Subscriber removed.');
    }
  };

  const handleToggleSub = (id) => {
    const updated = toggleSubscriberStatus(id);
    setSubscribers(updated);
  };

  const handleExportCSV = () => {
    const headers = ['ID,Name,Email,Status,SubscribedAt,Source'];
    const rows = subscribers.map(
      (s) => `"${s.id}","${s.name}","${s.email}","${s.status}","${s.subscribedAt}","${s.source}"`
    );
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers, ...rows].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `pykube_subscribers_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    triggerToast('Downloaded Subscribers CSV!');
  };

  const generateMailtoLink = () => {
    const bccEmails = targetSubscribers.map((s) => s.email).join(',');
    const encodedSubject = encodeURIComponent(subject || 'PyKube Updates');
    const encodedBody = encodeURIComponent(message || '');
    return `mailto:hr@pykube.net?bcc=${bccEmails}&subject=${encodedSubject}&body=${encodedBody}`;
  };

  const activeSubCount = subscribers.filter((s) => s.status === 'Active').length;

  // Passcode Lock Screen when not authenticated
  if (!isAuthenticated) {
    return (
      <main className="admin-page">
        <div className="admin-modal-overlay">
          <div className="admin-passcode-card">
            <div className="passcode-icon">
              <FiLock />
            </div>
            <h2 className="passcode-title">Admin Broadcast Portal</h2>
            <p className="passcode-desc">
              Enter admin passcode to access newsletter subscriber management and email broadcast control.
            </p>
            <div className="passcode-hint">
              🔑 Passcode Required (Default: <strong>admin123</strong>)
            </div>

            <form onSubmit={handleLogin}>
              <div className="admin-form-group">
                <input
                  type="password"
                  className="admin-input"
                  placeholder="Enter passcode..."
                  value={passcodeInput}
                  onChange={(e) => setPasscodeInput(e.target.value)}
                  autoFocus
                  required
                />
              </div>

              {passcodeError && (
                <div style={{ color: '#ef4444', fontSize: '12.5px', marginBottom: '16px', fontWeight: '600' }}>
                  {passcodeError}
                </div>
              )}

              <button type="submit" className="send-btn-primary">
                Unlock Portal <FiUnlock />
              </button>
            </form>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="admin-page">

      {/* ── Top Header Banner ── */}
      <section className="admin-hero-header">
        <div className="container admin-header-inner" style={{ position: 'relative', zIndex: 2 }}>
          <div>
            <h1 className="admin-title">Subscribers &amp; Email Broadcast</h1>
            <p className="admin-subtitle">
              Manage website subscribers, compose custom email announcements with photo attachments, and send broadcasts to your audience.
            </p>
          </div>

          <button className="admin-lock-btn" onClick={handleLock}>
            <FiLock /> Lock Portal
          </button>
        </div>
      </section>

      {/* ── Main Container ── */}
      <div className="container">

        {/* Stats Grid */}
        <div className="admin-stats-grid">
          <div className="admin-stat-card">
            <div className="admin-stat-icon" style={{ background: 'rgba(59, 130, 246, 0.15)', color: '#60a5fa' }}>
              <FiUsers />
            </div>
            <div>
              <div className="admin-stat-num">{subscribers.length}</div>
              <div className="admin-stat-label">Total Subscribers</div>
            </div>
          </div>

          <div className="admin-stat-card">
            <div className="admin-stat-icon" style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#34d399' }}>
              <FiCheckCircle />
            </div>
            <div>
              <div className="admin-stat-num">{activeSubCount}</div>
              <div className="admin-stat-label">Active Subscribers</div>
            </div>
          </div>

          <div className="admin-stat-card">
            <div className="admin-stat-icon" style={{ background: 'rgba(249, 115, 22, 0.15)', color: '#fb923c' }}>
              <FiSend />
            </div>
            <div>
              <div className="admin-stat-num">{broadcastHistory.length}</div>
              <div className="admin-stat-label">Broadcasts Sent</div>
            </div>
          </div>

          <div className="admin-stat-card">
            <div className="admin-stat-icon" style={{ background: 'rgba(168, 85, 247, 0.15)', color: '#c084fc' }}>
              <FiMail />
            </div>
            <div>
              <div className="admin-stat-num">
                {broadcastHistory.reduce((acc, curr) => acc + (curr.recipientsCount || 0), 0)}
              </div>
              <div className="admin-stat-label">Delivered Emails</div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="admin-tabs-nav">
          <button
            className={`admin-tab-btn ${activeTab === 'broadcast' ? 'active' : ''}`}
            onClick={() => setActiveTab('broadcast')}
          >
            <FiSend /> Send Broadcast
          </button>

          <button
            className={`admin-tab-btn ${activeTab === 'subscribers' ? 'active' : ''}`}
            onClick={() => setActiveTab('subscribers')}
          >
            <FiUsers /> Manage Subscribers
            <span className="admin-tab-badge">{subscribers.length}</span>
          </button>

          <button
            className={`admin-tab-btn ${activeTab === 'history' ? 'active' : ''}`}
            onClick={() => setActiveTab('history')}
          >
            <FiClock /> Broadcast History
            <span className="admin-tab-badge">{broadcastHistory.length}</span>
          </button>
        </div>

        {/* ── TAB 1: SEND BROADCAST ── */}
        {activeTab === 'broadcast' && (
          <div className="admin-broadcast-grid">
            {/* Left: Composer */}
            <div className="admin-card">
              <div className="admin-card-header">
                <h3 className="admin-card-title">
                  <FiMail /> Email Composer
                </h3>
              </div>

              {/* Template Quick Picks */}
              <div style={{ marginBottom: '16px' }}>
                <span className="admin-label">Quick Template Presets:</span>
                <div className="preset-pills-row">
                  {PRESET_TEMPLATES.map((tpl) => (
                    <button key={tpl.id} className="preset-pill" onClick={() => handleApplyTemplate(tpl)}>
                      {tpl.title}
                    </button>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSendBroadcast}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div className="admin-form-group">
                    <label className="admin-label">Sender Name</label>
                    <input
                      type="text"
                      className="admin-input"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-label">Reply-To Email</label>
                    <input
                      type="email"
                      className="admin-input"
                      value={replyTo}
                      onChange={(e) => setReplyTo(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="admin-form-group">
                  <label className="admin-label">Target Audience</label>
                  <select
                    className="admin-select"
                    value={recipientFilter}
                    onChange={(e) => setRecipientFilter(e.target.value)}
                  >
                    <option value="Active">Active Subscribers ({activeSubCount})</option>
                    <option value="All">All Subscribers ({subscribers.length})</option>
                  </select>
                </div>

                <div className="admin-form-group">
                  <label className="admin-label">Subject Line *</label>
                  <input
                    type="text"
                    className="admin-input"
                    placeholder="e.g. 🚀 Exclusive PyKube Tech Bootcamp Announcement"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                  />
                </div>

                <div className="admin-form-group">
                  <label className="admin-label">Email Message / Content *</label>
                  <textarea
                    className="admin-textarea"
                    placeholder="Write your email content here... You can use {name} and {email} tags."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>

                {/* Photo / Image Attachment */}
                <div className="admin-form-group">
                  <label className="admin-label">
                    <FiImage style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                    Attach Photo / Banner (Optional)
                  </label>

                  {!imagePreview ? (
                    <div className="admin-image-upload-box">
                      {/* Hidden File Input */}
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleImageFileChange}
                        style={{ display: 'none' }}
                      />

                      {/* Custom Drag & Drop Zone */}
                      <div
                        className={`custom-file-dropzone ${isDragging ? 'dragging' : ''}`}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        onClick={() => fileInputRef.current?.click()}
                      >
                        <div className="dropzone-icon-badge">
                          <FiImage size={24} />
                        </div>
                        <div className="dropzone-text-primary">
                          Drag &amp; drop photo here, or <span className="dropzone-highlight">browse files</span>
                        </div>
                        <div className="dropzone-text-sub">
                          Supports PNG, JPG, WEBP, GIF (Max 5MB)
                        </div>

                        <button
                          type="button"
                          className="custom-choose-file-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            fileInputRef.current?.click();
                          }}
                        >
                          📁 Choose File from Device
                        </button>
                      </div>

                      {/* Divider */}
                      <div className="upload-divider">
                        <span>OR PASTE IMAGE URL</span>
                      </div>

                      <input
                        type="url"
                        className="admin-input"
                        placeholder="Paste image web address (https://...)"
                        value={imageUrl}
                        onChange={(e) => {
                          setImageUrl(e.target.value);
                          setImagePreview(e.target.value);
                        }}
                      />
                    </div>
                  ) : (
                    <div className="image-preview-wrapper">
                      <img src={imagePreview} alt="Attached Preview" className="image-preview-img" />
                      <button type="button" className="remove-img-btn" onClick={handleRemoveImage} title="Remove image">
                        <FiX />
                      </button>
                    </div>
                  )}
                </div>

                <button type="submit" className="send-btn-primary" disabled={isSending}>
                  {isSending ? (
                    <>Sending Broadcast ({sendProgress}%)...</>
                  ) : (
                    <>
                      <FiSend /> Send Email to {targetSubscribers.length} Subscribers
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Right: Live Engine Status & Mailto Option */}
            <div>
              <div className="admin-card" style={{ marginBottom: '24px' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '12px', color: '#ffffff' }}>
                  ⚡ Live Sending Monitor
                </h4>
                <p style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '16px' }}>
                  Simulates live frontend email batch delivery with status updates and logs.
                </p>

                {isSending || sendProgress > 0 ? (
                  <div className="broadcast-progress-box">
                    <div className="progress-header">
                      <span>Sending Broadcast...</span>
                      <span>{sendProgress}%</span>
                    </div>
                    <div className="progress-track">
                      <div className="progress-fill" style={{ width: `${sendProgress}%` }} />
                    </div>

                    <div className="progress-log-list">
                      {sendLogs.map((l, i) => (
                        <div key={i} className="progress-log-item">
                          <span>✓</span> {l}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div
                    style={{
                      padding: '20px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      borderRadius: '12px',
                      textAlign: 'center',
                      color: '#64748b',
                      fontSize: '13px',
                    }}
                  >
                    Ready to send broadcast to {targetSubscribers.length} recipients.
                  </div>
                )}
              </div>

              <div className="admin-card">
                <h4 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '12px', color: '#ffffff' }}>
                  ✉️ Native Mail Client Option
                </h4>
                <p style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '16px' }}>
                  Generate a pre-filled mailto link with all selected subscribers added to BCC.
                </p>
                <a
                  href={generateMailtoLink()}
                  className="admin-btn-secondary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <FiMail /> Open in Outlook / Mail App (BCC)
                </a>
              </div>
            </div>
          </div>
        )}

        {/* ── TAB 2: MANAGE SUBSCRIBERS ── */}
        {activeTab === 'subscribers' && (
          <div className="admin-card">
            <div className="subscribers-controls-bar">
              <div style={{ position: 'relative', width: '100%', maxWidth: '320px' }}>
                <FiSearch
                  style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }}
                />
                <input
                  type="text"
                  className="admin-input search-sub-input"
                  placeholder="Search subscribers..."
                  style={{ paddingLeft: '40px' }}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="admin-action-btns">
                <button className="admin-btn-secondary" onClick={() => setShowAddModal(true)}>
                  <FiPlus /> Add Subscriber
                </button>
                <button className="admin-btn-secondary" onClick={handleExportCSV}>
                  <FiDownload /> Export CSV
                </button>
              </div>
            </div>

            {/* Subscriber Table */}
            <div className="admin-table-wrapper">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Subscriber Name</th>
                    <th>Email Address</th>
                    <th>Status</th>
                    <th>Source</th>
                    <th>Date Subscribed</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {subscribers
                    .filter(
                      (s) =>
                        s.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        s.name.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map((s) => (
                      <tr key={s.id}>
                        <td style={{ fontWeight: '600', color: '#ffffff' }}>{s.name}</td>
                        <td>{s.email}</td>
                        <td>
                          <span
                            className={`status-badge ${s.status === 'Active' ? 'active' : 'unsubscribed'}`}
                            onClick={() => handleToggleSub(s.id)}
                            style={{ cursor: 'pointer' }}
                            title="Click to toggle status"
                          >
                            {s.status}
                          </span>
                        </td>
                        <td style={{ color: '#94a3b8', fontSize: '12.5px' }}>{s.source}</td>
                        <td style={{ color: '#94a3b8', fontSize: '12.5px' }}>
                          {new Date(s.subscribedAt).toLocaleDateString()}
                        </td>
                        <td>
                          <button className="table-action-btn" onClick={() => handleRemoveSub(s.id)} title="Delete subscriber">
                            <FiTrash2 />
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>

            {/* Add Subscriber Modal */}
            {showAddModal && (
              <div className="admin-modal-overlay">
                <div className="admin-passcode-card" style={{ textAlign: 'left' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#ffffff' }}>Add New Subscriber</h3>
                    <button
                      onClick={() => setShowAddModal(false)}
                      style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer' }}
                    >
                      <FiX size={20} />
                    </button>
                  </div>

                  <form onSubmit={handleAddSubscriberSubmit}>
                    <div className="admin-form-group">
                      <label className="admin-label">Email Address *</label>
                      <input
                        type="email"
                        className="admin-input"
                        placeholder="subscriber@example.com"
                        value={newSubEmail}
                        onChange={(e) => setNewSubEmail(e.target.value)}
                        required
                      />
                    </div>

                    <div className="admin-form-group">
                      <label className="admin-label">Subscriber Name (Optional)</label>
                      <input
                        type="text"
                        className="admin-input"
                        placeholder="e.g. John Doe"
                        value={newSubName}
                        onChange={(e) => setNewSubName(e.target.value)}
                      />
                    </div>

                    <button type="submit" className="send-btn-primary">
                      Add to Subscribers
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ── TAB 3: BROADCAST HISTORY ── */}
        {activeTab === 'history' && (
          <div className="admin-card">
            <h3 className="admin-card-title" style={{ marginBottom: '20px' }}>
              <FiClock /> Sent Broadcast Logs
            </h3>

            <div className="admin-table-wrapper">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Sent Date</th>
                    <th>Subject Line</th>
                    <th>Sender</th>
                    <th>Recipients</th>
                    <th>Photo Attached</th>
                    <th>Status</th>
                    <th>View</th>
                  </tr>
                </thead>
                <tbody>
                  {broadcastHistory.map((log) => (
                    <tr key={log.id}>
                      <td style={{ color: '#94a3b8', fontSize: '12.5px' }}>
                        {new Date(log.sentAt).toLocaleString()}
                      </td>
                      <td style={{ fontWeight: '600', color: '#ffffff' }}>{log.subject}</td>
                      <td>{log.sender}</td>
                      <td style={{ fontWeight: '700', color: '#38bdf8' }}>{log.recipientsCount}</td>
                      <td>
                        {log.hasImage ? (
                          <span className="status-badge active" style={{ background: 'rgba(168, 85, 247, 0.15)', color: '#c084fc' }}>
                            📸 Yes
                          </span>
                        ) : (
                          <span style={{ color: '#64748b', fontSize: '12px' }}>No</span>
                        )}
                      </td>
                      <td>
                        <span className="status-badge active">Completed</span>
                      </td>
                      <td>
                        <button
                          className="admin-btn-secondary"
                          style={{ padding: '4px 10px', fontSize: '12px' }}
                          onClick={() => setSelectedLog(log)}
                        >
                          <FiEye /> Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* View History Details Modal */}
            {selectedLog && (
              <div className="admin-modal-overlay">
                <div className="admin-passcode-card" style={{ textAlign: 'left', maxWidth: '600px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#ffffff' }}>
                      Broadcast Details
                    </h3>
                    <button
                      onClick={() => setSelectedLog(null)}
                      style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer' }}
                    >
                      <FiX size={20} />
                    </button>
                  </div>

                  <div style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '12px' }}>
                    Sent on {new Date(selectedLog.sentAt).toLocaleString()} to <strong>{selectedLog.recipientsCount}</strong> subscribers.
                  </div>

                  <div style={{ fontWeight: '700', fontSize: '1.1rem', color: '#ffffff', marginBottom: '12px' }}>
                    {selectedLog.subject}
                  </div>

                  {selectedLog.imageUrl && (
                    <div className="image-preview-wrapper" style={{ marginBottom: '16px' }}>
                      <img src={selectedLog.imageUrl} alt="Broadcast Attachment" className="image-preview-img" />
                    </div>
                  )}

                  <div
                    style={{
                      background: 'rgba(9, 13, 22, 0.8)',
                      padding: '16px',
                      borderRadius: '12px',
                      whiteSpace: 'pre-wrap',
                      fontSize: '13.5px',
                      color: '#cbd5e1',
                      maxHeight: '220px',
                      overflowY: 'auto',
                    }}
                  >
                    {selectedLog.message}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="admin-toast">
          <span>✨</span> {toastMessage}
        </div>
      )}
    </main>
  );
}
