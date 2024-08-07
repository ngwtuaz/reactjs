import { useEffect, useState } from "react";

const Size = (props) => {
    const { sizes, handlePickSize, selectedSize } = props;
    const [activeSize, setActiveSize] = useState(null);

    useEffect(() => {
        setActiveSize(selectedSize);
    }, [selectedSize]);

    return (
        <div>
            <h2><b>Size:</b></h2>
            <div>
                {sizes.map((size) => (
                    <div
                        key={size.id}
                        className={`flex gap-2 justify-center items-center p-2 my-1  cursor-pointer ${
                            activeSize === size.id ? 'bg-[#007bff] text-[#fff]' : 'bg-white'
                        }`}
                        onClick={() => handlePickSize(size.id)}
                    >
                        {size.size}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Size;
