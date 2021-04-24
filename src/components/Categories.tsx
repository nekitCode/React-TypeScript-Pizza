import React, {useState} from 'react';

interface ItemsProps {
    items: string[];
}

const Categories: React.FC<ItemsProps> = ({items}) => {

    const [active, setActive] = useState <number | string>('');

    const onSelectItem = (index: number | string) => {
      setActive(index)
    }
  
    return (
        <>
        <div className="categories">
            <ul>
            <li 
            className={active === '' ? 'active' : ''}
            onClick={() => onSelectItem('')}>Все</li>
            {items && items.map((item, index) => {
                return (
                    <li 
                        className={active === index ? 'active' : ''}
                        onClick={() => onSelectItem(index)}
                        key={`${item}_${index}`}>{item}
                    </li>
                )
            })}
            </ul>
        </div>
        </>
    );
}

export default Categories;

//TODO: 1:17:11 №4
 
// eslint-disable-next-line no-lone-blocks
{/* <li>Мясные</li>
<li>Вегетарианская</li>
<li>Гриль</li>
<li>Острые</li>
<li>Закрытые</li> */}