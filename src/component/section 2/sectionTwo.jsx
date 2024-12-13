import './sectionTwo.css'

import remont from '../../img/Ремонт@4x 1.png'
import roms from '../../img/комната@4x 1.png'

export default function SectionTwo ( ) {
    return (
        <>
        <div className='sectionTwo'>
            <div className='sectionTwo_main conteiner'>
                <div className='sectionTwo_card_1 card'>
                    <div><img src={remont} alt="#" /></div>
                    <h3>Ежемесячные оплаты</h3>
                    <p>Минимальный платеж в случае использования газа – <b>от 10 900 рублей, то есть 130 000 тысяч в год,</b> значит окупаемость капитальных вложений будет от 15 лет. </p>
                    <p>Также нужно отметить, что самому обслуживать газовое оборудование нельзя, нужно обращаться к профессионалам, <b>стоимость обслуживания стартует от 9 000 тысяч рублей в год.</b></p>
                </div>
                <div className='sectionTwo_card_2 card'>
                    <div><img src={roms} alt="#" /></div>
                    <p>Ежемесячные оплаты</p>
                    <p>Электроотопление будет требовать от вас примерно 4 200 рублей ежемесячно. Эксплуатация данного вида отопления  показывает себя очень выгодно. </p>
                </div>
            </div>
        </div>
        
        </>
    )
}