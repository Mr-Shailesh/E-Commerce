import { Card, Modal, Rate } from "antd";
import React from "react";
import "./ReviewProduct.css";

const ReviewProduct = ({ product, open, setOpen }) => {
  const { title, price, image, description, rating } = product;
  return (
    <Modal
      title={title}
      centered
      open={open}
      onCancel={() => setOpen(false)}
      footer={null}
    >
      <Card bodyStyle={{ padding: 20 }}>
        <div className="custom-image">
          <img alt="example" width="100%" src={image} />
        </div>
        <div className="custom-card">
          <h3>Price: ${price}</h3>
          <div>
            <h3
              style={{
                margin: 0,
              }}
            >
              Description:
            </h3>
            <p
              style={{
                marginTop: 0,
              }}
            >
              {description}
            </p>
          </div>
        </div>
        <Rate value={rating.rate} disabled />
      </Card>
    </Modal>
  );
};

export default ReviewProduct;
