import { useState } from 'react';
import axios from 'axios';
import { FaLocationDot, FaPhone, FaEnvelope, FaGlobe, FaClock, FaPaperclip } from 'react-icons/fa6';

const BACKEND = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000';

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', service: '', details: '' });
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleFile = (e) => setFile(e.target.files[0] || null);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const data = new FormData();
      Object.entries(form).forEach(([k, v]) => data.append(k, v));
      if (file) data.append('attachment', file);
      await axios.post(`${BACKEND}/api/contact`, data, { headers: { 'Content-Type': 'multipart/form-data' } });
      setStatus({ ok: true, msg: 'Enquiry sent! We will respond within 24 hours.' });
      setForm({ name: '', company: '', email: '', phone: '', service: '', details: '' });
      setFile(null);
      document.getElementById('contact-file-input').value = '';
    } catch {
      setStatus({ ok: false, msg: 'Failed to send. Please email info@systemdiesandmoulds.com directly.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact">
      <div className="contact-info">
        <div className="section-tag">Get In Touch</div>
        <h2 className="section-title">Request a<br />Quote Today</h2>
        <p style={{ color: 'var(--text-mid)', fontSize: '0.95rem', lineHeight: '1.8' }}>
          Send us your drawings or requirements — our engineering team will respond within 24 hours with a technical review and competitive quotation.
        </p>
        <div className="contact-details">
          <div className="contact-item">
            <div className="contact-icon"><FaLocationDot /></div>
            <div><h5>Address</h5><p>C-47, SITE, Super Highway, Karachi, Pakistan</p></div>
          </div>
          <div className="contact-item">
            <div className="contact-icon"><FaPhone /></div>
            <div><h5>Phone</h5><p>0333-5499004</p></div>
          </div>
          <div className="contact-item">
            <div className="contact-icon"><FaEnvelope /></div>
            <div><h5>Email</h5><p>info@systemdiesandmoulds.com</p></div>
          </div>
          <div className="contact-item">
            <div className="contact-icon"><FaGlobe /></div>
            <div><h5>Website</h5><p>www.systemdiesandmoulds.com</p></div>
          </div>
          <div className="contact-item">
            <div className="contact-icon"><FaClock /></div>
            <div><h5>Working Hours</h5><p>Mon – Sat: 8:00 AM – 6:00 PM</p></div>
          </div>
        </div>
      </div>

      <div>
        <form className="contact-form" onSubmit={submit}>
          <div className="form-row">
            <div className="form-group">
              <label>Full Name *</label>
              <input name="name" value={form.name} onChange={handle} placeholder="Your name" required />
            </div>
            <div className="form-group">
              <label>Company</label>
              <input name="company" value={form.company} onChange={handle} placeholder="Company name" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Email *</label>
              <input name="email" type="email" value={form.email} onChange={handle} placeholder="you@company.com" required />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input name="phone" type="tel" value={form.phone} onChange={handle} placeholder="0300 xxxxxxx" />
            </div>
          </div>
          <div className="form-group">
            <label>Service Required *</label>
            <select name="service" value={form.service} onChange={handle} required>
              <option value="" disabled>Select a service...</option>
              <option>Dies &amp; Press Tools</option>
              <option>Injection / Blow Moulds</option>
              <option>FRP / GRP Fabrication</option>
              <option>CNC Precision Machining</option>
              <option>Jigs &amp; Fixtures</option>
              <option>Reverse Engineering</option>
              <option>Other / Multiple Services</option>
            </select>
          </div>
          <div className="form-group">
            <label>Project Details</label>
            <textarea name="details" value={form.details} onChange={handle} placeholder="Describe your requirements, materials, quantities, and any relevant specifications..." />
          </div>
          <div className="form-group">
            <label>Upload Technical Drawing</label>
            <div className="file-upload-wrap">
              {!file && (
                <input
                  id="contact-file-input"
                  type="file"
                  accept=".jpg,.jpeg,.png,.pdf,.dwg,.dxf,.step,.stp,.igs,.iges"
                  onChange={handleFile}
                  className="file-upload-input"
                />
              )}
              <div className={`file-upload-box${file ? ' file-upload-box--filled' : ''}`}>
                <span className="file-upload-icon"><FaPaperclip /></span>
                <span className="file-upload-label">
                  {file ? file.name : 'Click to attach or drag & drop — JPG, PNG, PDF, DWG, DXF, STEP'}
                </span>
                {file && (
                  <button
                    type="button"
                    className="file-upload-remove"
                    onClick={() => { setFile(null); document.getElementById('contact-file-input') && (document.getElementById('contact-file-input').value = ''); }}
                    title="Remove attachment"
                  >&#x2715;</button>
                )}
              </div>
            </div>
          </div>
          <button type="submit" className="btn-primary" style={{ border: 'none', fontFamily: 'Inter, sans-serif', cursor: 'pointer', opacity: loading ? 0.7 : 1, background: 'var(--navy)', color: '#fff', borderRadius: '8px' }} disabled={loading}>
            {loading ? 'Sending...' : 'Send Enquiry →'}
          </button>
          {status && <p className={status.ok ? 'form-success' : 'form-error'}>{status.msg}</p>}
        </form>
      </div>
    </section>
  );
}
