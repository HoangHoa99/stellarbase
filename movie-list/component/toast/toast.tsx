"use client"
import React, { useState, useEffect } from 'react';
import styles from "./toast.module.css"

interface ToastProps {
  message: string;
  duration?: number;
  onClose?: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, duration = 3000, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className={`${styles.toast} ${visible ? styles.visible : ''}`}>
      <div className={styles.toast_content}>
        <span>{message}</span>
      </div>
    </div>
  );
};

export default Toast;