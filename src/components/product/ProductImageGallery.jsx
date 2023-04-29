import { Grid, Container } from "semantic-ui-react";
import { useState } from "react";

import './productImageGallery.css';

export const ProductImageGallery = (props) => {

    const { images = [] } = props;
    const [currentFocusImage, setCurrentFocusImage] = useState(images[0] ?? '');

    const onMiniatureHover = (e) => {
        const target = e.currentTarget;
        target.classList.toggle('miniature-active');
        console.log(target.getAttribute('key'), target.getAttribute('data-key'));
        setCurrentFocusImage(target.src);
    }

    const onMiniatureUnhover = (e) => {
        e.currentTarget.classList.remove('miniature-active');
    }

    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={2} className={'miniature-bar'}>
                        {images.map((image,  i) => {
                            return <img
                                src={image}
                                key={i}
                                data-key={i}
                                style={{marginTop: '5%'}}
                                onMouseEnter={onMiniatureHover}
                                onMouseLeave={onMiniatureUnhover}
                                ></img>
                        })}
                    </Grid.Column>
                    <Grid.Column width={14}  className={'focused-image-container'}>
                        <img src={currentFocusImage}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
};