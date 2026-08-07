import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Footer() {
  return (
    <footer className="footer" style={{ padding: '4rem 0 2rem' }}>
      <div className="container">
        <div className="row" style={{ marginBottom: '3rem' }}>
          {/* Col 1 */}
          <div className="col col--6" style={{ marginBottom: '2rem' }}>
            <Link to="/" style={{ display: 'inline-block', marginBottom: '1rem' }}>
              <img src={useBaseUrl('img/LOGO TATA WARGA CLEAN.png')} alt="Tata Warga Logo" style={{ height: '48px' }} />
            </Link>
            <p style={{ color: 'var(--ifm-footer-color)', opacity: 0.8, maxWidth: '400px', margin: 0 }}>
              Solusi cerdas untuk administrasi RT modern yang terintegrasi dengan WhatsApp dan teknologi AI.
            </p>
          </div>
          {/* Col 2 */}
          <div className="col col--3" style={{ marginBottom: '2rem' }}>
            <h4 style={{ color: 'var(--ifm-footer-title-color)', marginBottom: '1.5rem', fontWeight: 600 }}>Navigasi</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><Link to="https://tatawarga.net/dashboard/rt" className="footer__link-item">Dashboard</Link></li>
              <li><Link to="https://tatawarga.net/#fitur" className="footer__link-item">Fitur</Link></li>
              <li><Link to="https://tatawarga.net/#harga" className="footer__link-item">Harga</Link></li>
              <li><Link to="/" className="footer__link-item">Tutorial</Link></li>
            </ul>
          </div>
          {/* Col 3 */}
          <div className="col col--3" style={{ marginBottom: '2rem' }}>
            <h4 style={{ color: 'var(--ifm-footer-title-color)', marginBottom: '1.5rem', fontWeight: 600 }}>Hubungi Kami</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><a href="mailto:info@tatawarga.net" className="footer__link-item" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                info@tatawarga.net
              </a></li>
              <li><a href="https://api.whatsapp.com/send?phone=6285945441445" className="footer__link-item" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                +62 859 4544 1445
              </a></li>
              <li><a href="https://www.instagram.com/tatawarga.id/" className="footer__link-item" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                tatawarga.net
              </a></li>
            </ul>
          </div>
        </div>

        {/* Baris Bawah / Copyright Area */}
        <div style={{ borderTop: '1px solid var(--ifm-color-emphasis-200)', paddingTop: '2rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ margin: 0, color: 'var(--ifm-footer-color)', opacity: 0.8, fontSize: '0.9rem' }}>
            © {new Date().getFullYear()} Tata Warga. Hak Cipta Dilindungi.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.9rem', marginTop: '1rem' }} className="footer-links-right">
            <Link to="https://tatawarga.net/privacy" className="footer__link-item" style={{ opacity: 0.8 }}>Kebijakan Privasi</Link>
            <Link to="https://tatawarga.net/terms" className="footer__link-item" style={{ opacity: 0.8 }}>Syarat Ketentuan</Link>
          </div>
        </div>
        
        {/* Style khusus untuk responsivitas baris bawah */}
        <style dangerouslySetInnerHTML={{__html: `
          @media (max-width: 768px) {
            .footer-links-right {
              margin-top: 1rem !important;
              width: 100%;
              justify-content: flex-start;
            }
          }
        `}} />
      </div>
    </footer>
  );
}
