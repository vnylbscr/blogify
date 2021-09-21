import { makeStyles } from '@material-ui/core';
import React, { Fragment } from 'react';
import './index.scss';

// const useStyles = makeStyles((theme: any) => ({
//    root: {
//       flexGrow: 1,
//       height: 'calc(100vh - 60px)',
//       background: theme.colorPalette.primary.light,
//    },
//    section: {
//       height: '100%',
//    },
// }));

const DESC_WHO_WE_ARE =
   'Blogify ile blog yazılarını paylaşabilir, diğer insanların, arkadaşlarının görmesini sağlayabilirsin. Blog yazılarını düzenleyebilir ve daha binlerce şey yapabilirsin.';

const DESC_WHAT_WE_DO =
   'Blogify ekibi olarak birinci önceliğimiz, her türlü sorun için bir blog oluşturmak. Sizler için elimizden gelenin en iyisini yapacağız.';

const MOCKS_MENU = [
   {
      title: 'Biz kimiz?',
      description: DESC_WHO_WE_ARE,
   },
   {
      title: 'Ne yapıyoruz?',
      description: DESC_WHAT_WE_DO,
   },
];

const Contact = () => {
   return (
      <Fragment>
         <main className='contact-container'>
            <div className='contact-top-section'>
               <p>Blogify</p>
               <div className='contact-title-container'>
                  <p>Hızlı.</p>
                  <p>Güvenilir</p>
               </div>
            </div>
            <div className='contact-bottom-section'>
               {MOCKS_MENU.map((item, index) => (
                  <Fragment key={item.title + index}>
                     <div className='contact-title'>
                        <p>{item.title}</p>
                     </div>
                     <div className='contact-section'>
                        <span>{item.description}</span>
                     </div>
                  </Fragment>
               ))}
            </div>
         </main>
      </Fragment>
   );
};
export default Contact;
