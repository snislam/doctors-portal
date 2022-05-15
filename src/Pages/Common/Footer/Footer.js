import React from 'react';
import footer from '../../../assets/images/footer.png'

const Footer = () => {
    return (
        <footer className=" pt-10 px-12 bg-center bg-cover" style={{ backgroundImage: `url(${footer})` }}>
            <div className='footer'>
                <div>
                    <span className="footer-title">Services</span>
                    <a href='/' className="link link-hover">Branding</a>
                    <a href='/' className="link link-hover">Design</a>
                    <a href='/' className="link link-hover">Marketing</a>
                    <a href='/' className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a href='/' className="link link-hover">About us</a>
                    <a href='/' className="link link-hover">Contact</a>
                    <a href='/' className="link link-hover">Jobs</a>
                    <a href='/' className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a href='/' className="link link-hover">Terms of use</a>
                    <a href='/' className="link link-hover">Privacy policy</a>
                    <a href='/' className="link link-hover">Cookie policy</a>
                </div>
            </div>
            <div>
                <p className='text-center py-5'>Copyright &copy; {new Date().getFullYear()} All Right Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;