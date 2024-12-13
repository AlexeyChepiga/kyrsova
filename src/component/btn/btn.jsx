import './btn.css';
import React, { useState, useEffect, useRef } from 'react';

const heatingOptions = [
    {
        type: 'Газовое отопление',
        pricePerKWh: 5,
        initialInvestment: 250000,
        annualCost: 60000,
    },
    {
        type: 'Электро-водяной пол',
        pricePerKWh: 2.2,
        initialInvestment: 190000,
        annualCost: 30000,
    },
];

export default function HeatingCalculator() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [calculationResult, setCalculationResult] = useState(null);
    const [years, setYears] = useState(1); // Фиксированное количество лет для расчета
    const [inputYears, setInputYears] = useState(1); // Временное количество лет для ввода
    const modalRef = useRef(null);

    const toggleCalculator = () => {
        setIsOpen(!isOpen);
        setCalculationResult(null);
    };

    const handleYearChange = (e) => {
        const value = e.target.value;
        if (value === '' || /^[1-9][0-9]*$/.test(value)) {
            setInputYears(Number(value) || 1);
        }
    };

    const calculate = () => {
        if (selectedOption) {
            const option = heatingOptions.find((item) => item.type === selectedOption);
            setYears(inputYears); // Обновляем годы при расчете
            const totalCost = option.initialInvestment + option.annualCost * inputYears;
            setCalculationResult(totalCost);
        }
    };

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div className="app-container">
            <button className="primary-button" onClick={toggleCalculator}>
                Открыть калькулятор
            </button>

            {isOpen && (
                <div className="calculator-modal">
                    <div className="modal-content" ref={modalRef}>
                        <h2>Калькулятор отопления</h2>

                        <div className="input-group">
                            <label htmlFor="heating-type">Выберите тип отопления:</label>
                            <select
                                id="heating-type"
                                onChange={(e) => setSelectedOption(e.target.value)}
                                value={selectedOption || ''}
                            >
                                <option value="">--Выберите--</option>
                                {heatingOptions.map((option) => (
                                    <option key={option.type} value={option.type}>
                                        {option.type}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="input-group">
                            <label htmlFor="years">Количество лет:</label>
                            <input
                                id="years"
                                type="text"
                                value={inputYears}
                                onChange={handleYearChange}
                                placeholder="Введите количество лет"
                            />
                        </div>

                        <button className="primary-button" onClick={calculate}>
                            Рассчитать
                        </button>

                        {calculationResult !== null && (
                            <div className="result">
                                <h3>Итоговая стоимость за {years} {years > 1 ? 'лет' : 'год'}:</h3>
                                <p>{calculationResult.toLocaleString()} Руб.</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
