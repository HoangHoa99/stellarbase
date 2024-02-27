"use client"

import styles from "./confirmmodal.module.css"

interface ConfirmModalProps {
    isOpen: boolean;
    message: string;
    onConfirm: () => void;
    onCancel: () => void;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
    isOpen,
    message,
    onConfirm,
    onCancel,
}) => {
    if (!isOpen) return null;

    return (
        <div className={styles.modal_overlay}>
            <div className={styles.modal_content}>
                <p>{message}</p>
                <div className={styles.buttons}>
                    <button onClick={onCancel}>Cancel</button>
                    <button onClick={onConfirm}>Confirm</button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmModal;