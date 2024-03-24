import MenuUser from './MenuUser';
import MenuInfo from './MenuInfo';

const Window = (props) => {
    const { type, onClick } = props;

    let windowContent = '';

    if (type === 'catalog') {
        windowContent = (
            <div className='modal-window__catalog'>
                <button onClick={onClick} className='btn-close position-close-catalog'>
                    X
                </button>

                <img src="./img/img.avif" alt="" className="modal-window__catalog-img" />
            </div>
        );
    } else if (type === 'basket') {
        windowContent = (
            <div className='modal-window__basket'>
                <button onClick={onClick} className='btn-close position-close-basket'>
                    X
                </button>

                <div className="modal-window__basket-wrapper">
                    <img src="./img/modal-cart.svg" alt="" className="modal-window__basket-img" />

                    <p className="modal-window__basket-title">
                        Корзина
                    </p>
                </div>
            </div>
        );
    } else {
        windowContent = (
            <div className='modal-window__bar'>
                <button onClick={onClick} className='btn-close position-close-bar'>
                    X
                </button>
                <div className="menu-bar__user">
                    <MenuUser />
                    <div className="line"></div>
                </div>          
                <div className="menu-bar__info">
                    <MenuInfo />
                </div>
            </div>
        );
    }

    return (
        <div className={`modal-window__wrapper-${type}`}>
            {windowContent}
        </div>
    )
}

export default Window;