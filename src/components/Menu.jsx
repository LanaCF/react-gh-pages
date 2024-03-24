
















// const Menu = (props) => {
//     const { type } = props;

//     const menuFooter = type === 'footer' ? 'menu_footer' : '';
//     const menuFooterLink = type === 'footer' ? 'menu_footer__link' : '';

//     const menuItems = [
//         {
//             id: '1',
//             title: 'Home',
//             link: '#home',
//         },

//         {
//             id: '2',
//             title: 'About',
//             link: '#about',
//         },

//         {
//             id: '3',
//             title: 'Gallery',
//             link: '#gallery',
//         },

//         {
//             id: '4',
//             title: 'Blog',
//             link: '#blog',
//         },

//         {
//             id: '5',
//             title: 'Contacts',
//             link: '#contacts',
//         },
//     ]

//     return (
//         <ul className={ `main_menu__list ${ menuFooter }` }>
//             {
//                 menuItems.map((item, index) =>
//                     <li className="main_menu__item" key={ index }>
//                         <a href={ item.link } className={ `main_menu__link ${ menuFooterLink }` }>
//                             { item.title }
//                         </a>
//                     </li>
//                 )
//             }
//         </ul>
//     )
// }

// export default Menu;