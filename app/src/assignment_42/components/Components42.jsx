import Card from './Card.component';
import '../styles.css';

export default function Components42() {

    return (
        <div className="cards">
            <Card imageSrc="https://picsum.photos/200" title="Card Title" description="Card Description"/>
            <Card imageSrc="https://picsum.photos/200?grayscale" title="Grayscale Card Title" description="Grayscale Card Description"/>
            <Card imageSrc="https://picsum.photos/200?blur" title="Blur Card Title" description="Blur Card Description"/>
        </div>
    )
}