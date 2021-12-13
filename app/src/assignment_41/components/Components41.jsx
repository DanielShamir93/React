import '../styles.css';
import Button from './Button.component'

export default function Components41() {

    return (
        <div>
            <Button text="Important" styles={{fontWeight: 'bold'}} />
            <Button text="Not Important" />
        </div>
    )

}
