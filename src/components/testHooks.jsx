import React, { useState, useEffect } from 'react';
import {usePopupClose} from "../hooks/usePopupClose.jsx"; // Путь к определению хука

export default function PopupWithForm({title, name, buttonText, children, isOpen, onClose, onSubmit}) {
  const { isPopupClosed, closePopup } = usePopupClose(isOpen, onClose); // Вызов кастомного хука и получение результатов

  useEffect(() => {
    if (isPopupClosed) {
      onClose();
    }
  }, [isPopupClosed, onClose]);

  // Остальная логика компонента

  return (
    <div className={`popup ${isOpen ? 'popup_opened' : ''}`} id={name}>
      <div className="popup__container">
        <button
          type="button"
          aria-label="Close"
          className={`popup__close popup__close_type_${name} cursor`}
          onClick={onClose}
        />
        <h2 className={`popup__title`}>{title}</h2>
        <form
          className="popup__content"
          id={name}
          name={name}
          onSubmit={onSubmit}
          // noValidate=""
        >
          {children}
          <button type="submit" className="popup__submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  )
}