import React from "react";

const Footer = () => {
  return (
    <footer className='bg-light p-3'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-9'>
            <ul className='list-inline'>
              <li className='list-inline-item'>
                <a href='#'>Home</a>
              </li>
              <li className='list-inline-item'>
                <a href='#'>About</a>
              </li>
              <li className='list-inline-item'>
                <a href='#'>Contact</a>
              </li>
            </ul>
          </div>
          <div className='col-lg-3'>
            <p className='text-muted small'>
              Copyright &copy; Your Company 2022
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
