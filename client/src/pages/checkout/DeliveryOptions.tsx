import { useState, useEffect } from 'react';
import { fetchDeliveryOptions } from '../../services/deliveryService';

type DeliveryOptionsProps = {
    onChange: (method: string) => void;
};

const DeliveryOptions = ({ onChange }: DeliveryOptionsProps) => {
    const [options, setOptions] = useState<{ speedy: string[]; econt: string[] }>({
        speedy: [],
        econt: [],
    });

    useEffect(() => {
        fetchDeliveryOptions().then(setOptions);
    }, []);

    return (
        <div>
            <h2>Delivery Options</h2>
            <select onChange={(e) => onChange(e.target.value)}>
                <option value="">Select Delivery Method</option>
                {options.speedy.map((office, index) => (
                    <option key={index} value={`speedy_${office}`}>
                        Speedy: {office}
                    </option>
                ))}
                {options.econt.map((office, index) => (
                    <option key={index} value={`econt_${office}`}>
                        Econt: {office}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default DeliveryOptions;
