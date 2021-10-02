import React, { Fragment, useState } from 'react';
import './index.scss';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

const SOCIAL_MEDIA_MENU = [
   {
      title: 'Facebook',
      icon: <FacebookIcon />,
   },
   {
      title: 'Instagram',
      icon: <InstagramIcon />,
   },
   {
      title: 'Twitter',
      icon: <TwitterIcon />,
   },
   {
      title: 'Email',
      icon: <AlternateEmailIcon />,
   },
];
interface Form {
   input?: string;
   message?: string;
}
const Footer = () => {
   const [state, setState] = useState<Form>();
   const submit = () => {
      setState({
         message: 'successfully subscribed. please check your e-mail.',
         input: '',
      });
      setTimeout(() => setState({ message: '', input: '' }), 3000);
   };

   return (
      <footer className='footer-container'>
         <div className='footer-items-container'>
            {/* Item 1 */}
            <div className='social-media-container'>
               <div className='social-media-title'>blogify is the best solution for the articles and more.</div>
               <div className='social-media-items'>
                  {SOCIAL_MEDIA_MENU.map((item) => (
                     <div key={item.title} className={`social-media-icon ${item.title}`}>
                        {item.icon}
                     </div>
                  ))}
               </div>
            </div>
            {/* Item 2 */}
            <div className='footer-item-2'>
               <p className='title'>useful links</p>
               <p className='subtitle'>cookie policy</p>
               <p className='subtitle'>contact us</p>
            </div>
            {/* Item 3 */}
            <div className='footer-item-2'>
               <p className='title'>News</p>
               <p className='subtitle newsletter'>Subscribe to news</p>
               <form className='form-container' onSubmit={submit}>
                  <input
                     type='email'
                     required
                     className='footer-input'
                     placeholder='your email'
                     onChange={(e) => setState((prev) => ({ ...prev, input: e.target.value }))}
                  />
                  <button type='submit' className='footer-submit-btn'>
                     Subscribe
                  </button>
                  {state?.message && <p className='subscribe'>{state.message}</p>}
               </form>
            </div>
         </div>
         <p className='footer-bottom-title'>Mert Genç 2021. All rights reserved.</p>
      </footer>
   );
};

export default Footer;
