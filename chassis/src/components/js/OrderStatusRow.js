function OrderStatusRow({order}) {
    return (
        <div className="order-row">
            <h2>{order.status}</h2>
            <h3>Ordered on {order.created_at}</h3>

            {(order.parts_ordered).map((part) => 
                <div className="order-info" key={part.id}>
                    <p>{part.car_parts.name}</p>
                    <p>Quantity: {part.quantity}</p>
                </div>
            )}
        </div>
    )
}

export default OrderStatusRow;