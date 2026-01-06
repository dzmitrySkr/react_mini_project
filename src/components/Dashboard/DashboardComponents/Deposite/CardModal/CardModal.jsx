import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeModal, saveCardData } from "../../../../../store/ModalSlicer";
import "./cardModal.css"

export default function CardModal() {
    const dispatch = useDispatch();
    const isOpen = useSelector((state) => state.modal.isModalOpen);
    const savedData = useSelector((state) => state.modal.cardData);

    const [cardNumber, setCardNumber] = useState("");
    const [expiry, setExpiry] = useState("");
    const [owner, setOwner] = useState("");


    useEffect(() => {
        if (isOpen) {
            setCardNumber(savedData.cardNumber);
            setExpiry(savedData.expiry);
            setOwner(savedData.owner);
        }
    }, [isOpen, savedData]);

    const handleSave = () => {
        dispatch(saveCardData({ cardNumber, expiry, owner }));
        dispatch(closeModal());
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <button className="close-btn" onClick={() => dispatch(closeModal())}>
                    &times;
                </button>
                <h2>Card Information</h2>
                <form onSubmit={(e) => e.preventDefault()}>
                    <label>
                        Card Number
                        <input
                            type="text"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                            placeholder="1234 5678 9012 3456"
                            required
                        />
                    </label>
                    <label>
                        Expired
                        <input
                            type="month"
                            value={expiry}
                            onChange={(e) => setExpiry(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Card Name
                        <input
                            type="text"
                            value={owner}
                            onChange={(e) => setOwner(e.target.value)}
                            placeholder="Иван Иванов"
                            required
                        />
                    </label>
                    <div className="modal-buttons">
                        <button type="button" className="btn cancel" onClick={() => dispatch(closeModal())}>
                            Close
                        </button>
                        <button type="button" className="btn save" onClick={handleSave}>
                            Save
                        </button>
                    </div>
                </form>
            </div>

        </div>
    )}

