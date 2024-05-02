import React from 'react';

function SmoothScrollLink({ to, children, className }) {
  const scrollToElement = (e) => {
    e.preventDefault();
    const target = document.getElementById(to);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a className={ className } href={ `#${to}` } onClick={ scrollToElement }>
      {children}
    </a>
  );
}

export default SmoothScrollLink;
