import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] } }),
};

const contactDetails = [
  {
    icon: '📍',
    label: 'Address',
    value: 'New BEL Rd, Near HP Petrol Bunk, M S R Nagar, R.M.V. 2nd Stage, Bengaluru, Karnataka 560054',
    href: 'https://maps.google.com/?q=New+BEL+Road+MSR+Nagar+Bengaluru',
    linkText: 'Get Directions',
  },
  {
    icon: '📞',
    label: 'Phone',
    value: '+91 97311 19458',
    href: 'tel:9731119458',
    linkText: 'Call Us',
  },
  {
    icon: '💬',
    label: 'WhatsApp',
    value: '+91 95914 30770',
    href: 'https://wa.me/919591430770',
    linkText: 'Message Us',
  },
  {
    icon: '⏰',
    label: 'Hours',
    value: 'Mon – Sun: 10:00 AM – 11:30 PM',
  },
  {
    icon: '📸',
    label: 'Instagram',
    value: '@greens_and_giggles',
    href: 'https://www.instagram.com/greens_and_giggles',
    linkText: 'Follow Us',
  },
];

export default function Contact() {
  return (
    <div style={{ backgroundColor: '#F7F3EE', minHeight: '100vh', paddingTop: '80px' }}>
      {/* Header */}
      <section style={{ backgroundColor: '#4F5D4A', padding: '5rem 1.5rem 4rem' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#E6C9A8', marginBottom: '1rem' }}
          >
            Contact
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 700, color: '#F7F3EE', lineHeight: 1.1, marginBottom: '1rem' }}
          >
            Come say<br /><em style={{ color: '#E6C9A8' }}>hello</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.95rem', color: 'rgba(247,243,238,0.75)', lineHeight: 1.8 }}
          >
            We're always happy to hear from you — whether it's an order, a reservation, or just a kind word.
          </motion.p>
        </div>
      </section>

      {/* Contact Info + Map */}
      <section style={{ padding: '6rem 1.5rem' }}>
        <div className="two-col-grid" style={{ maxWidth: '1152px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
          {/* Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            <motion.div variants={fadeUp}>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: '#4F5D4A', marginBottom: '0.5rem' }}>
                Get in touch
              </h2>
              <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.9rem', color: '#7A8B75', lineHeight: 1.8 }}>
                The quickest way to reach us is via WhatsApp. We respond within minutes during opening hours.
              </p>
            </motion.div>

            {contactDetails.map(({ icon, label, value, href, linkText }, i) => (
              <motion.div
                key={label}
                variants={fadeUp}
                custom={i + 1}
                style={{
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'flex-start',
                  backgroundColor: '#fff',
                  borderRadius: '14px',
                  padding: '1.25rem 1.5rem',
                  border: '1px solid #E6C9A8',
                }}
              >
                <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>{icon}</span>
                <div style={{ flex: 1 }}>
                  <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#7A8B75', marginBottom: '4px' }}>{label}</p>
                  <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.92rem', color: '#4F5D4A', fontWeight: 500, marginBottom: href ? '8px' : 0 }}>{value}</p>
                  {href && linkText && (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      style={{
                        display: 'inline-block',
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        color: '#8B6B4A',
                        textDecoration: 'none',
                        borderBottom: '1.5px solid #E6C9A8',
                        paddingBottom: '1px',
                      }}
                    >
                      {linkText} →
                    </a>
                  )}
                </div>
              </motion.div>
            ))}

            {/* WhatsApp CTA */}
            <motion.a
              variants={fadeUp}
              custom={5}
              href="https://wa.me/919591430770"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                backgroundColor: '#25D366',
                color: '#fff',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '0.92rem',
                fontWeight: 600,
                padding: '16px 28px',
                borderRadius: '14px',
                textDecoration: 'none',
                marginTop: '0.5rem',
              }}
            >
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Order or Chat on WhatsApp
            </motion.a>
          </motion.div>

          {/* Map */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            <div
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid #E6C9A8',
                height: 'clamp(260px, 45vw, 420px)',
                boxShadow: '0 4px 24px rgba(79,93,74,0.1)',
              }}
            >
              <iframe
                title="Greens and Giggles Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15548.26!2d77.5711!3d13.0358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17a2e0ac9413%3A0x8c7ae6c84ef87b0a!2sNew%20BEL%20Road%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '0.8rem',
              color: '#7A8B75',
              textAlign: 'center',
              lineHeight: 1.6,
            }}>
              📍 New BEL Rd, Near HP Petrol Bunk, M S R Nagar, Bengaluru — easily accessible via auto, cab, or two-wheeler parking available.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
