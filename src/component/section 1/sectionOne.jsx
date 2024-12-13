import './sectionOne.css'

import kotel from '../../img/котел@4x 1.png'
import plita from '../../img/полы макет@4x 1.png'

export default function SectionOne() {
    return (
    <>
        <div className='sectionOne' id='sectionOne'>
            <div className='sectionOne_main conteiner'>
                <div className='sectionOne_text'>
                    <h2>Разница между <br/>газовым и электрическим отоплением </h2>
                </div>
                <div className='sectionOne_card'>
                    <div className='sectionOne_card_one card'>
                        <div><img src={kotel} alt="#" /></div>
                        <p>Капитальные затраты на газовое отопление</p>
                        <p>начинаются от <b>300 тысяч рублей.</b></p>
                        <p>Котел, газгольдер и радиаторы - обязательное оборудование в системе газового отопления. Цена будет зависеть от качества моделей, соответственно и общие затраты на всю систему будут разными. </p>
                    </div>
                    <div className='sectionOne_card_two card'>
                        <div><img src={plita} alt="#" /></div>
                        <p>Капитальные затраты на установку XL- Pipe почти вдвое ниже </p>
                        <p>Около 190 тысяч рублей будет стоить установка (сам продукт + монтаж) данного отопления в доме площадью 10 0 кв.м. Для более точного расчета учитываются параметры: количество комнат в помещении, материал стен, площадь и способ укладки системы.</p>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}