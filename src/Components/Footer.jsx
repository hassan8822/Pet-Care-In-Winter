

const Footer = () => {
    return (
        <div>
  <footer className="footer flex-col sm:footer-horizontal gap-10 bg-linear-to-r from-teal-700 via-green-500 to-green-300 [&_a]:text-white *:text-white p-10">
  <nav>
    <h6 className="footer-title text-white text-lg">Services</h6>
    <a className="link link-hover"> Pet Grooming</a>
    <a className="link link-hover">Dental Care</a>
    <a className="link link-hover">Care for Puppy</a>
    <a className="link link-hover">Veterinary Service</a>
   




  </nav>
  <nav >
    <h6 className="footer-title">Our Pages</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Home</a>
    <a className="link link-hover">Services</a>
    <a className="link link-hover">My Profile</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
  <form>
    <h6 className="footer-title">Newsletter</h6>
    <fieldset className="w-full sm:w-80">
      <label>Enter your email address</label>
      <div className="flex flex-col gap-3 mt-3">
        <input
          type="text"
          placeholder="username@site.com"
          className="input input-bordered  mt-3 text-black " />
        <button className="btn bg-cyan-400 hover:bg-cyan-500 text-black border-none ">Submit Now</button>
      </div>
    </fieldset>
  </form>
</footer>


        </div>
  
    );
};

export default Footer;