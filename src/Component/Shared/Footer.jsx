import logo from '../../assets/logo.svg'

const Footer = () => {
    return (
       <div>
         <footer className="h-48 footer  bg-base-200 text-base-content">
        <div className='p-4'>

        <img className='w-12' src={logo} alt="" />


          <p>ACME Industries Ltd.<br/>Providing reliable tech since 1992</p>
        </div> 
        <div className='p-4'>
          <span className="footer-title">Services</span> 
          <a className="link link-hover">Branding</a> 
          <a className="link link-hover">Design</a> 
          <a className="link link-hover">Marketing</a> 
        </div> 
        <div className='p-4'>
          <span className="footer-title">Company</span> 
          <a className="link link-hover">About us</a> 
          <a className="link link-hover">Contact</a> 
          <a className="link link-hover">Jobs</a> 
        </div> 
        <div className='p-4'>
          <span className="footer-title">Legal</span> 
          <a className="link link-hover">Terms of use</a> 
          <a className="link link-hover">Privacy policy</a> 
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
       </div>
    );
};

export default Footer;