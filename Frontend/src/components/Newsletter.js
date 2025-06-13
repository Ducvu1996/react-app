import React from 'react';
import '../styles/Newsletter.css';

function Newsletter() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý đăng ký nhận tin
    console.log('Newsletter subscription submitted');
  };

  return (
    <section className="newsletter">
      <h2>Đăng Ký Nhận Tin</h2>
      <p>Nhận thông báo về bài viết mới và tips chăm sóc cây</p>
      <form className="newsletter-form" onSubmit={handleSubmit}>
        <input type="email" placeholder="Nhập email của bạn" required />
        <button type="submit">Đăng Ký</button>
      </form>
    </section>
  );
}

export default Newsletter; 