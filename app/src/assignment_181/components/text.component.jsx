import { useState } from 'react';


export default function Text(props) {

    const [visibleText, setVisibleText] = useState(props.text.slice(0, props.maxLength))
    const [showText, setShowText] = useState('...read more');
    const [isTextVisible, setIsTextVisible] = useState(false);

    const toggleShowText = () => {
        if (isTextVisible) {
            setShowText('show less');
            setIsTextVisible(false);
            setVisibleText(props.text);
        } else {
            setShowText('...read more');
            setIsTextVisible(true);
            setVisibleText(props.text.slice(0, props.maxLength));
        }
    }


    return (

        <div>
            {visibleText}
            <span 
                style={{color: 'blue', cursor: 'pointer'}}
                onClick={ () => {
                    toggleShowText();
                }
            }>{showText}</span>
        </div>

    )

}