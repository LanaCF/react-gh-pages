const MenuInfo = () => {
    const menuInfoItems = [
        {
            id: '1',
            title: 'Про нас',
        },

        {
            id: '2',
            title: 'Умови використання сайту',
        },

        {
            id: '3',
            title: 'Вакансії',
        },

        {
            id: '4',
            title: 'Довідковий центр',
        },

        {
            id: '5',
            title: 'Контакти',
        },

        {
            id: '6',
            title: 'Усі категорії',
        },

        {
            id: '7',
            title: 'Допомога',
        },

        {
            id: '8',
            title: 'Доставка та оплата',
        },

        {
            id: '9',
            title: 'Кредит',
        },

        {
            id: '10',
            title: 'Гарантія',
        },

        {
            id: '11',
            title: 'Повернення товару',
        },

        {
            id: '12',
            title: 'Сервісні центри',
        },

        {
            id: '13',
            title: 'Сервіси',
        },

        {
            id: '14',
            title: 'Партнерам',
        },

        {
            id: '15',
            title: 'Наш застосунок',
        }
    ]

    return (
        <ul className="menu-info">
            {
                menuInfoItems.map((item) => 
                    <li className="menu-info__item" key={ item.id }>
                        <a href="#" className="menu-info__link">
                            { item.title }
                        </a>
                    </li>
                )
            }
        </ul>
    )
}

export default MenuInfo;