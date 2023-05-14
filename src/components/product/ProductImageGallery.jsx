import { Grid, Container, Dimmer, Loader } from "semantic-ui-react";
import { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import './productImageGallery.css';
import { setMainImage } from "../../store/product/product.thunks";

export const ProductImageGallery = (props) => {

    const dispatch = useDispatch();

    const product = useSelector((state) => state.product);
    const { images } = product.data;
    const { loading } = product;

    /*
    useEffect(() => {
        if (!loading) {
            dispatch(setMainImage(images[0]));
        }
    }, [dispatch, loading]);
    */

    const onMiniatureHover = (e) => {
        const target = e.currentTarget;
        target.classList.toggle('miniature-active');
        dispatch(setMainImage({ src: target.src})); // cambiar a usar el obj completo
    }

    const onMiniatureUnhover = (e) => {
        e.currentTarget.classList.remove('miniature-active');
    }

    if (loading) {
        return (
            <Loader active />
        )
    }

    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={2} className={'miniature-bar'}>
                        {images.map((image,  i) => {
                            return <img
                                src={image.src}
                                key={i}
                                data-key={i}
                                style={{marginTop: '5%'}}
                                onMouseEnter={onMiniatureHover}
                                onMouseLeave={onMiniatureUnhover}
                                ></img>
                        })}
                    </Grid.Column>
                    <Grid.Column width={14}  className={'focused-image-container'}>
                        <img src={product.data.currentFocusImage.src}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
};