const MenuUser = () => {
    const menuUserItems = [
        {
            id: '1',
            title: 'Каталог товарів',
        },

        {
            id: '2',
            title: 'Бонуси',
        },

        {
            id: '3',
            title: 'Мої замовлення',
        },

        {
            id: '4',
            title: 'Кошик',
        },

        {
            id: '5',
            title: 'Персональні пропозиції',
        },

        {
            id: '6',
            title: 'Списки бажань',
        },

        {
            id: '7',
            title: 'Забрати замовлення',
        }
    ]

    return (
        <ul className="menu-user">
            {
                menuUserItems.map((item) => 
                    <li className="menu-user__item" key={ item.id }>
                        <a href="#" className="menu-user__link">
                            { item.title }
                        </a>
                    </li>
                )
            }
        </ul>
    )
}

export default MenuUser;




