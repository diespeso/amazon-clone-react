import { Card, Container, Loader } from "semantic-ui-react";

import { NewReviewContainer } from "./NewReviewContainer";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getReviewListFromProduct } from "../../store/product/reviewList.thunks";

import './productReviewContainer.css';

export const ProductReviewContainer = (props) => {

    const dispatch = useDispatch();
    const reviewList = useSelector((state) => state.reviewList);
    const { loading } = reviewList;

    const { product_id } = useParams();

    // TODO: could be optional standalone
    useEffect(() => {
        dispatch(getReviewListFromProduct(product_id));
    }, [])

    console.log(loading);

    const reviewListRender = reviewList.data.map((reviewObj, i) => {
        return (
            <Card fluid key={i}>

                <Card.Header>
                    <div style={{ marginLeft: '1%', marginRight: '1%', width:'20%', display: 'inline'}}>
                        {[...Array(reviewObj.rate)].map((_, i) => (<span key={i}>★</span>))}
                    </div>
                    <h4 style={{ display: 'inline'}}>{reviewObj.title}</h4>
                </Card.Header>
                <Card.Content>
                    {reviewObj.content}
                </Card.Content>
            </Card>
        )
    });

    return (
        <Card>
            <Container className={props.className}>
                {loading ? <Loader  active/> : reviewListRender}
            </Container>
            <NewReviewContainer></NewReviewContainer>
        </Card>
    )
};