// ScrollToTopLink.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ScrollToTopLink = ({ to, children, className }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    navigate(to);
  };

  return (
    <Link to={to} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
};

export default ScrollToTopLink;