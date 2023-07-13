import { Card, Container, Loader, Icon } from "semantic-ui-react";

import { NewReviewContainer } from "./NewReviewContainer";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getReviewListFromProduct } from "../../store/product/reviewList.thunks";

import './productReviewContainer.css';

export const ProductReviewContainer = (props) => {

    /*const dispatch = useDispatch();
    const reviewList = useSelector((state) => state.reviewList);
    const { loading } = reviewList;

    const { product_id } = useParams();

    // TODO: could be optional standalone
    useEffect(() => {
        dispatch(getReviewListFromProduct(product_id));
    }, [])

    */

    const reviewList = useSelector((state) => state.reviewList);

    const { loading, count, average } = reviewList;

    const reviewListRender = reviewList.list?.map((reviewObj, i) => {
        return (
            <Card fluid key={i}>

                <Card.Header>
                    <div style={{ marginLeft: '1%', marginRight: '1%', width:'20%', display: 'inline'}}>
                        {[...Array(reviewObj.score)].map((_, i) => {
													return <Icon name='star' key={i}></Icon>
												})}
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
            <Container>
                reviews : {count}
                promedio: {average}
            </Container>
            <NewReviewContainer></NewReviewContainer>
        </Card>
    )
};