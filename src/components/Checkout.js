import { PayPalButtons, usePayPalScriptReducer,	getScriptID, destroySDKScript, } from '@paypal/react-paypal-js';
import { useEffect, useState } from 'react';

// Show state
function Checkout(props) {
	const [,dispatch] = usePayPalScriptReducer();

  useEffect(() => {
    destroySDKScript(getScriptID({
      'client-id': 'AWZfLBtr14A990_AB_Y13O7ayJzNC2-PzYlpIBGNC3OSXhymHJV8DkENpi1aeuB3Ef1p8yZdZG9tCH25',
      currency: "USD",
      intent: "capture",
    }));
    dispatch({
      type: "setLoadingStatus",
      value: "initial",
    });
  }, [props.total]);
  const update = (data, actions, err) => {
    return actions.order.create({
      intent: "CAPTURE",
      purchase_units: [
        props.total,
      ],
    });
  }
  
  return (
    <div style={{ width: '100%' }}>
      <PayPalButtons
        fundingSource='paypal'
        createOrder= { update }
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            const name = details.payer.name.given_name;
            alert(`Transaction completed by ${name}`);
          }); 
        }}
      />
    </div>
  );
}

export default Checkout;