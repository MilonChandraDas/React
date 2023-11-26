import React from "react";

const Card = ({ item, btn }) => {
  return (
    <>
      <div className="card w-96 bg-base-600 shadow-xl">
        <figure>
          <img
            src="https://images.philips.com/is/image/PhilipsConsumer/TASH402LF_00-IMS-en_IQ?$jpglarge$&wid=1250"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title py-4 text-lg"> {item} </h2>

          <div className="card-actions justify-end mt-1">
            <button className="btn bg-green-400 p-3 rounded text-lg">
              {btn}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
