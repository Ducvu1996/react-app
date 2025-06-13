import React, { useState } from 'react';

function RegistrationForm() {
  // State để lưu trữ thông tin form
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });

  // State để lưu trữ thông báo lỗi
  const [errors, setErrors] = useState({});

  // Hàm xử lý sự kiện onChange cho input text
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Hàm xử lý sự kiện submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Kiểm tra validation
    const newErrors = {};
    if (!formData.username) {
      newErrors.username = 'Username là bắt buộc';
    }
    if (!formData.email) {
      newErrors.email = 'Email là bắt buộc';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email không hợp lệ';
    }
    if (!formData.password) {
      newErrors.password = 'Password là bắt buộc';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Mật khẩu không khớp';
    }
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'Bạn phải đồng ý với điều khoản';
    }

    // Nếu có lỗi, hiển thị lỗi
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Nếu không có lỗi, xử lý form
    console.log('Form submitted:', formData);
    alert('Đăng ký thành công!');
    
    // Reset form
    setFormData({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      agreeToTerms: false
    });
    setErrors({});
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h2>Form Đăng Ký</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px' }}
            />
          </label>
          {errors.username && <div style={{ color: 'red' }}>{errors.username}</div>}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px' }}
            />
          </label>
          {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px' }}
            />
          </label>
          {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>
            Confirm Password:
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px' }}
            />
          </label>
          {errors.confirmPassword && <div style={{ color: 'red' }}>{errors.confirmPassword}</div>}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
            />
            Tôi đồng ý với điều khoản và điều kiện
          </label>
          {errors.agreeToTerms && <div style={{ color: 'red' }}>{errors.agreeToTerms}</div>}
        </div>

        <button 
          type="submit"
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Đăng Ký
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm; 