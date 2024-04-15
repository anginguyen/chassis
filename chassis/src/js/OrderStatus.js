import { useEffect, useState } from "react";
import { supabase } from "../helpers/supabaseClient";
import OrderStatusRow from "../components/js/OrderStatusRow";

function OrderStatus() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        getOrders();
    }, []);

    async function getOrders() {
        const { data } = await supabase
            .from("orders")
            .select(`
                *,
                parts_ordered (
                    car_parts:car_part_id (
                        name
                    ),
                    quantity
                )
            `);
        setOrders(data);
        console.log(data);
    }

    return (
        <>
            {orders.map((order) => 
                <OrderStatusRow order={order} key={order.id} />
            )}
        </>
    )
}

export default OrderStatus;