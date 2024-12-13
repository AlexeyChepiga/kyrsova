import './estimation.css'

import installer from '../../img/Монтажник1 1.png'
import Btn from '../btn/btn'

export default function Estimation () {
    return (
        <>
        <div className='estimation' id='estimation'>
            <div className='estimation_main conteiner'>
                <div className='estimation_main_text'>
                    <div className='estimation_all_one'>
                        <h3>Смотрим в будущее Оценка в 10 лет </h3>
                        <p>Рассмотрим временной отрезок длинною в 10 лет. Из расчета средней потребности в отоплении в 7 месяцев (210 дней) мы можем для ориентира выделить общее потребление в 26 000 КВт/ч.</p>
                        <p>Давайте посмотрим на цифры в таблице.</p>
                        
                        <table class="styled-table">
                            <thead>
                                <tr>
                                    <th>Красноярский край</th>
                                    <th>Стоимость 1 Киловатт-час, Руб.</th>
                                    <th>Начальные вложения от, Руб.</th>
                                    <th>Траты за отопительный сезон</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Газовое отопление</td>
                                    <td>5</td>
                                    <td>250 000</td>
                                    <td>60 000</td>
                                </tr>
                                <tr>
                                    <td>Электро-водяной пол</td>
                                    <td>2,2</td>
                                    <td>190 000</td>
                                    <td>30 000</td>
                                </tr>
                            </tbody>
                        </table>
                        <h3>Если ваш город не представлен в таблице, мы подготовим для вас персональный расчет </h3>
                        <Btn/>
            
                    </div>
                    <div className='estimation_all_two'>
                        <img src={installer} alt="#" />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}