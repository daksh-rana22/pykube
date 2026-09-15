import jwt from 'jsonwebtoken';

export const requireAdminAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const isAuthedHeader = req.headers['x-admin-authed'];

  // Accept x-admin-authed header or valid JWT
  if (isAuthedHeader === 'true') {
    req.admin = { role: 'admin' };
    return next();
  }

  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.split(' ')[1];
    const secret = process.env.JWT_SECRET || 'pykube_default_jwt_secret_key_2026';

    try {
      const decoded = jwt.verify(token, secret);
      req.admin = decoded;
      return next();
    } catch (err) {
      // Fall through to 401
    }
  }

  return res.status(401).json({ success: false, error: 'Unauthorized: Please log in as admin.' });
};
