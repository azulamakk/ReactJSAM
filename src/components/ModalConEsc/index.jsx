import './style.css'
import React from 'react' 

const ModalConEscape = ({handleClose}) => {

    useEffect(() => {

        const handleEsc = (evt) => {
            if (evt.keyCode === 27) {
                console.log('will close')
                handleClose(false)
            }
            console.log(evt) //Evento nativo.
        };

        window.addEventListener('keydown', handleEsc);

        return () => {
            window.removeEventListener('keydown', handleEsc);
        };

    }, [])

    const handleClick = (evento) => {
        console.log(evento);
        console.log(evento.nativeEvent)
    }

    return (
        <div
            style={{
                
            }}
        >
            <div
                style={{

                }}
                onClick={handleClick}
            >
                <p>Press escape for exit</p>
            </div>
        </div>
    )
}

export default ModalConEsc